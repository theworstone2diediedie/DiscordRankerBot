// SETTINGS
const roleNeeded = 'Army Staff'
const groupId = 4588469
const prefix = '>' // The prefix that the bot will use. Use >help for all commands!
const cookie = '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_2027396A775C2F7467DE69DBBD8BD81F822B9F258414E8864ED989EE2D2E7CED817B1FC92A5733C0718D5595AE2D1EF76DA2EF5AF629C1A0CA3E92BDC9E3E528190F4070AE2CEEB3AA803A1E12FD8340DFF96071F6AD3E839A5C64D7356DF488C598F6F733A9098194BD8378F640A431590FEDBBF4C34D99E9F820D284C9BDA2B26335C1A638A10C4428DCCFCAD2E53947C689EC8AC200038DB0BCAFED568C466BC97AA2688F97FB94216FA6C12A276B56E66F855DE638CEB4190A98B0F68228CB0CDE184610753ABBEDFA36F68F285BAD611235AF48F0D7C8A1A10910E21961C2E5FCF33A3AFF39C026D02D972C36881E562061804507AF53F7901158C5BD738293430F339BE1967DE91572F1C500CA4BD8CD7C2DB8F49AB363E1C6F4F709EE27A667A99F49BB96AA0C19D50916A9F25D0BF2AB'
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

client.login('NzI4OTcyNzQ1NTYzNTcwMjg3.XwC9QQ.ndbP_WYdfkhkagMyoKsTzgHIaWQ');