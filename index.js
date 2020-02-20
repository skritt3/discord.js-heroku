// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Ron Gahbi', {type: 'STREAMING'});
});

client.on('message', msg => {
    if(!msg.guild) return;
    if (msg.content.startsWith(process.env.PREFIX))
    {
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('@MR_Gutsy#3758');
    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
    } else {
    const ms = msg.content;
    if (ms === 'זדיין') 
    {
    const member = message.guild.member(msg.author);
    if(member)
    msg.author.kick('מת').then(() => { // We let the message author know we were able to kick the person message.reply(`כרגע מת ${msg.author.tag}`); }).catch(err => { // An error happened // This is generally due to the bot not being able to kick the member, // either due to missing permissions or role hierarchy message.reply('לצערי אני כבוט ציוני אינני יכול לסלק ילד מת זה'); // Log the error console.error(err); });
    }
    }
});

client.login(process.env.TOKEN);
