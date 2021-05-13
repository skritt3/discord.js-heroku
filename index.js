// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var cron = require('node-cron');
var request = require("request");
var ld=new Date();
var rc;

client.on('ready', () => {
    client.user.setActivity('imagine being a living sack of shit');
    /*client.user.setPresence({
        status: "dnd",  //You can show online, idle....
        game: {
            name: "disabled features until skritt doesn't have administrator",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });*/
    var url = "https://www.tzevaadom.co.il/historyjson.php";
    request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            if(body.length>0)
            {
                ld=new Date(((body[0]['date'])*1000)+10800000);
                console.log(ld);
            }
        }
    });
});

client.on('message', msg => {
    if(!msg.guild) return;
    const ms = msg.content.toLowerCase();
    if ((ms.includes('nigger') || ms.includes('Ниг') || ms.includes('ניג') || ms.includes('nigga')|| ms.includes('nigge')|| ms.includes('nigg')
        || ms.includes('nugget')  || ms.includes('נאגט')
        || ms.includes('נייגר')|| ms.includes('נגר')|| ms.includes('אמאשך')|| ms.includes('אמא שך')|| ms.includes('אבא שך')|| ms.includes('אבא שלך')|| ms.includes('אמא שלך')|| ms.includes('lo fi')|| ms.includes('אבאשך')|| ms.includes('toxic')|| ms.includes('טוקסיק')|| ms.includes('ni gg')|| ms.includes('nagar')|| ms.includes('naygar')|| ms.includes('naagar'))
        && msg.channel.id !== '703603549191405638' && !msg.member.roles.cache.find(r => r.id === "734842442834247782")) {
        msg.delete();
    }
    else if(msg.channel.id !== '779780376498798632' && msg.channel.id !== '841996869890080779') return;
    else if (msg.content.startsWith(process.env.PREFIX))
    {
        const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
        const args = msg.content.split(' ').slice(1).join(' ');
        if (command === 'guide') return msg.channel.send('@MR_Gutsy#3758');
        else if (command === 'invite') return msg.channel.send(process.env.INVITE);
    } else {
        //console.log(Buffer.from(ms, 'utf8').toString('hex').replace(/e2808f/g, '').replace(/e2808e/g, ''));
        /*if (Buffer.from(ms, 'utf8').toString('hex').replace(/e2808f/g, '').replace(/e2808e/g, '').includes('d796d793d799d799d79f'))
        {
            const member = msg.guild.member(msg.author);
            if(member)
                member.kick('מת').then(() => { msg.channel.send(`כרגע מת ${msg.author.tag}`); }).catch(err => { msg.channel.send('לצערי אני כבוט ציוני אינני יכול לסלק ילד מת זה'); console.error(err); });
        }
        else*/ if (ms === '/join') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./Oof.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/bababooey') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./Babaooey.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/speedrun') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./speedrun.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/chingchong') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./chingchong.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/chosen') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./nibra.ogg');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/zal') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./elcharizi.ogg');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/gang') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./ganga.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/butterdog') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./butterdog.ogg');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/homori') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./homri.aac');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/sus') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./choochiman.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/pp') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./Pp.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/ws') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./Areyawinningson.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/giveup') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./RickRollMusic.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/bruh') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./Bruh.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/lol') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./lol.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/xue') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voice.channel) {
                msg.member.voice.channel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const voice = connection.play('./xue.mp3');
                        voice.on('finish', () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
        else if (ms === '/ra') {
            rc=msg.channel;
            msg.reply('Red Alert channel set!');
        }
        else if (ms === '/leave') {
            const member = msg.guild.member(client.user);
            member.voice.connection.disconnect();
            msg.reply('I have successfully left the channel!');
        }
        else if (ms.startsWith('/cum')) {
            const user = msg.mentions.users.first();
            if(user)
            {
                if(msg.member.roles.cache.find(r => r.id === "662758055972175893"))
                {
                    const mm = msg.guild.member(user);
                    mm.setNickname('Cum');
                    msg.reply('Cum applied on <@'+mm.user.id+'>');
                } else msg.reply('No permissions');

            } else {
                msg.member.setNickname('Cum');
                msg.reply('Cum applied');
            }
        }
        else if (ms.startsWith('/kill')) {
            const user = msg.mentions.users.first();
            if(user)
            {
                const mm = msg.guild.member(user);
                if(msg.member.roles.cache.find(r => r.id === "722553617516855417"))
                {
                    if(mm.voice.channel)
                    {
                        var channel=mm.voice.channel;
                        var voiceChannel = client.channels.cache.get('722428400429563904');
                        mm.voice.setChannel(voiceChannel, 'lol').then(() => {
                            msg.reply('<@' + mm.user.id + '> fucking dead now').then(() => {
                                voiceChannel.join()
                                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                                        const voice = connection.play('./Kill.mp4');
                                        voice.on('finish', () => {
                                            connection.channel.leave();
                                            mm.voice.setChannel(channel,'lol');
                                        })
                                    })
                                    .catch(console.log);
                            });
                        });
                    } else msg.reply('User not in vc');
                } else msg.reply('No permissions');
            } else {
                msg.reply('No user selected');
            }
        }
        /*else if (ms.startsWith('/uncum')) {
            const user = msg.mentions.users.first();
            if(user)
            {
                if(msg.member.roles.some(r=>["Admins"].includes(r.name)) )
                {
                    const mm = msg.guild.member(user);
                    mm.setNickname(mm.user.username);
                    msg.reply('Uncum applied on <@'+mm.user.id+'>');
                } else msg.reply('No permissions');

            } else {
                msg.member.setNickname(msg.member.user.username);
                msg.reply('Uncum applied');
            }
        }*/
        /*else if(msg.channel.id == '715191707263565864' && (ms.includes('lofi') ))
        {
            client.setTimeout(function(){
                msg.guild.fetchMember('235088799074484224').then(mem=>{
                mem.setVoiceChannel(null)});
            },2000);
        }*/
    }
});


client.login(process.env.TOKEN);

var task=cron.schedule('* * * * * *', () => {
    //console.log("Parsing...");
    var url = "https://www.tzevaadom.co.il/historyjson.php";
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        //console.log(response.statusCode+' "'+body);
        if (!error && response.statusCode === 200) {
            for (var i=body.length-1; i>=0; i--)
            {
                if(body[i]!==undefined) {
                    var dt = new Date(((body[i]['date'])*1000)+10800000);
                    console.log(body.length - i + ': ' + dt.toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' ' + body[i]['area']);
                    if (dt > ld /*&& body[i]['area'].indexOf('אשדוד') != -1*/) {
                        if(i==0) ld = dt;
                        const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#ff0000')
                            .setTitle('צבע אדום')
                            .setDescription('<@&842008317220225054>')
                            .setThumbnail('https://www.oref.org.il/Images/Logo_pakar.png')
                            .addFields(
                                {name: 'מיקום', value: body[i]['area']},
                                {name: 'תאריך ושעה', value: dt.toISOString().replace(/T/, ' ').replace(/\..+/, '')},
                            )
                            .setTimestamp();
                        if(rc)rc.send(exampleEmbed);
                    }
                }
            }
        }
    });
},false);
task.start();
