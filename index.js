// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Ron Gahbi', {type: 'STREAMING'});
    const channel = client.channels.get("662756581489770530"); 
if (!channel) return console.error("The channel does not exist!"); 
channel.join().then(connection => { 
// Yay, it worked! 
console.log("Successfully connected."); }).catch(e => { 
// Oh no, it errored! Let's log it to console :) 
console.error(e); });
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
    if (ms.includes('זדיין')) 
    {
    const member = msg.guild.member(msg.author);
    if(member)
    member.kick('מת').then(() => { msg.channel.send(`כרגע מת ${msg.author.tag}`); }).catch(err => { msg.channel.send('לצערי אני כבוט ציוני אינני יכול לסלק ילד מת זה'); console.error(err); });
    }
    }
});

client.login(process.env.TOKEN);
