const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'your token here';




bot.on('ready',()=>{
	console.log('This bot is online!');
})

bot.on('message',msg=>{
	if (msg.content === "am i right") {
		var random = Math.random();

		if (random > 0.5) {
			msg.reply('yes');
		}
		else {
			msg.reply('no');
        }
	}
})

bot.login(token);