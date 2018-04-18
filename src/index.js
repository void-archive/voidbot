const Discord = require('discord.js');
const fs = require('fs');
const chalk = require('chalk');
const config = require('./config.json');
const statuses = [ 'with my master', 'being tested', 'on void\'s Bots' ];

const client = new Discord.Client();

client.on('ready', () => {
    /**
     * Example for chalk:
     * console.log(chalk.blue('Hello world!'));
     * 
     * Possible colours and styling:
     * bold, dim, italic, underline, inverse, strikethrough
     * 
     * red, green, yellow, blue, magenta, cyan, white, gray, black
     * bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite, bgBlack
     */
    console.log(chalk.bgGreen.bold('[STATUS: Ready]') + ' Successfully initialised and launched voidbot!');

    /**
     * Old code:
     * client.user.setActivity(`${statuses[Math.floor(Math.random() * statuses.length)]}`);
     */
    setInterval(function(){
        client.user.setActivity(`${statuses[Math.floor(Math.random() * statuses.length)]}`);
    }, 15000);
    // default 15000
});

client.on('message', msg => {
});

client.login(config.data.token);
