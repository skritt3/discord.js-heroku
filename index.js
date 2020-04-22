// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
    client.user.setActivity('for bans', {type: 'WATCHING'});
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
        else if (ms === '/join') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('I have successfully connected to the channel!');
                        const stream = fs.createReadStream('./Oof.mp3');
                        const voice = connection.playStream(stream);
                        voice.on("end", () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
          }
        else if (ms === '/leave') {
            // Only try to join the sender's voice channel if they are in one themselves
            const member = msg.guild.member(client.user);
            if(member.voiceChannel)
            member.setVoiceChannel(null)
                .then(connection => { // Conn// ection is an instance of VoiceConnection
                    msg.reply('I have successfully left the channel!');
                })
                .catch(console.log);
            else if (msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                    .then(connection => { // Conn// ection is an instance of VoiceConnection
                        msg.reply('שמע טוב יבן שרמוטה ישרליל יהומו ידוחף בולבולים לתחת יבולעע ימידיין בתחת יבן בן זונה כוסלאלאמשלך הזונה הזאת הבת זונה הזאת של היום חברים שלך עומדים מיתחת לחלון ואמשלך מיתיצבת בשעה 7 וצועקים אנחנו רוצים לזיין יבן זונה גומרים לה מהחלון והיא תופסת מילמטהאמאמשלך כל כך זונה מיסכנה רק עוזרים לה היא חרמנית מתה אפילו בתור סטוץ לא היו לוקחים אותה מרוב שהכוס שלה פתוח כבר אפשר להכניס תראש שלך ימידייןןן יבן אלף זונות אבא שלך חשפן יבן זונה יטמבל אבא שלך כל חמישי מקבל צינור בתחת אין פלא שהוא אוהב לשבת על אופנים בלי מושב יא כושילאמאמאמאמא שלך ימדיין ימקבלכל יום בתחת מסודני יזונה מה ניראלךךךך למי אתה חושב שאתה מדבר יהומו משתיינים על כמוך ועל אמא שלך בקשת יבן זונה יבן בן זונה יבן אלףףףף עשו אותך מסטוץ של דנה אינטרנשנל בתוך מונית שרות ימוצצ ישרמוטה , יבתול כייף בראבק יטמבל ימיבכן יבןבןבןבןבןבןבן זונה , טפייייי עליך יבן שרלילות יהומו יכלב יבן אלףףף , אמא שלך על אח שלך מצלם יא זיין ביצה שמאלית שלי אתה יבן שרמוטה יהומו מיזדדיין אמא שלך עשתה אותך ביחד עם אבא שלך על שולחן סונקר ימיזיין בתחת יבן אלף שרלילות ישלך ראש של כדור יבן זונה אתה ניכנס ישר לחור של אמא שלך הזונה הזאת כולם היום הרגלים שלה פתוחות אפשר להכניס שם בית יטמבל מרוב שהיא זונה יבן אלף זונות ביגלל ילדים כמוך יש מילחמות בארץ');
                        const stream = fs.createReadStream('./Oof.mp3');
                        const voice = connection.playStream(stream);
                        voice.on("end", () => {
                            connection.channel.leave();
                        })
                    })
                    .catch(console.log);
            } else msg.reply('You need to join a voice channel first!');
        }
    }
});

client.login(process.env.TOKEN);
