// SETTINGS
const roleNeeded = 'role name'
const groupId = 1
const prefix = '>' // The prefix that the bot will use. Use >help for all commands!
const cookie = '._ROBLOXSECURITYFORCOOL'
 // The ._ROBLOSECURITY cookie that is used to log in.



// Core code. Do not mess with this!

const Discord = require('discord.js')
const client = new Discord.Client()
const ytdl = require('ytdl-core')
const noblox = require('noblox.js')



async function run() {
	await noblox.setCookie(cookie)
	console.log('Logged in.')
}
run();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}`);
// Set the client user's activity
client.user.setActivity(`${prefix}help`, { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);

});





client.on('message', message =>{
if(message.author.bot) return;
if (message.content == prefix + 'help'){
	message.reply()
	message.channel.send(`${prefix}help - Shows this list.`)
	message.channel.send(`${prefix}promote <username> - Promotes a user with that username.`)
	message.channel.send(`${prefix}demote <username> - Demotes a user with that username.`)
	message.channel.send(`${prefix}setRank <username> - Sets a users rank to that rank.`)
	
		
}

const args = message.content.split(" ")


if (args[0] === prefix + "promote"){
	if (!args[1]){
		message.reply('Please specify a username.')
		return
	};

	if (message.member.roles.cache.some(role => role.name === roleNeeded)) {
//Rest of your code
        console.log('Promote called!');
		console.log(args[1]);


		const id = noblox.getIdFromUsername(args[1]);
		noblox.changeRank(groupId,id, +1)
}

	if (!message.member.roles.cache.some(role => role.name === roleNeeded)) {
message.reply(`You need the ${roleNeeded} role to do this!`)
}
	
       
   
			
	
	
	
}

if (args[0] === prefix + "demote"){
	if (!args[1]){
		message.reply('Please specify a username.')
		return
	};

	if (message.member.roles.cache.some(role => role.name === roleNeeded)) {
//Rest of your code
        console.log('Demote called!');
		console.log(args[1]);


		const id = noblox.getIdFromUsername(args[1]);
		noblox.changeRank(groupId,id, -1)
}

	if (!message.member.roles.cache.some(role => role.name === roleNeeded)) {
message.reply(`You need the ${roleNeeded} role to do this!`)
}
	
}


if (args[0] === prefix + "setRank"){
	if (!args[1]){
		message.reply('Please specify a username.')
		return
	};

	if (message.member.roles.cache.some(role => role.name === roleNeeded)) {
//Rest of your code
        console.log('setRank called!');
		console.log(args[1]);


		const id = noblox.getIdFromUsername(args[1]);
		noblox.setRank(groupId,id, Number(args[2]));
}

	if (!message.member.roles.cache.some(role => role.name === roleNeeded)) {
message.reply(`You need the ${roleNeeded} role to do this!`)
}
	
}



});

client.login('bot token');
