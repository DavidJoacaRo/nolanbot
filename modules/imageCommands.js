const Discord = require('discord.js');
const randomPuppy = require('random-puppy'); //Because puppies are nice.
const { client, PREFIX } = require('../index'); // Import client from index.js

client.on('message', message => 
{
    if (message.author.bot) return;
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}sbubby`)) 
	{
		randomPuppy('sbubby').then(url => {
			message.channel.send(url);
		});  
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}animeme`)) 
	{
		randomPuppy('Animemes').then(url => {
			message.channel.send(url);
		});  
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}pic`)) 
	{
		randomPuppy('pics').then(url => {
			message.channel.send(url);
		});  
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}comedyheaven`)) {
		randomPuppy('comedyheaven').then(url => {
			message.channel.send(url);
		});  
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}dankmeme`)) 
	{
		randomPuppy('dankmemes').then(url => {
			message.channel.send(url);
		});  
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}4chan`)) 
	{
		randomPuppy('greentext').then(url => {
			message.channel.send(url);
		});  
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}requestavatar`)) 
	{
		message.channel.send("Here is your avatar!");
		message.channel.send(message.author.displayAvatarURL());	
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}evaxephon`)) 
	{
		message.channel.send("https://yandere-simulator.com/tampon.png");	
	}
	
	if (message.content.toLowerCase().startsWith(`${PREFIX}puppy`)) 
	{
		randomPuppy().then(url => {
			message.channel.send(url);
		});  
	}
	if (message.content.toLowerCase().startsWith(`${PREFIX}aww`)) {
		randomPuppy('aww').then(url => {
			message.channel.send(url);
		});  
	}

    if (message.content.toLowerCase().startsWith(`${PREFIX}bonk`)) 
    {
    	console.log("Hey can somebody keep track of my heads batted in? BONK");
    	message.channel.send('https://cdn.discordapp.com/attachments/686015484281225241/722533493435007066/posterbonk.png');
    }

});