const Discord = require('discord.js');
const client = new Discord.Client();


//bot logs in
client.on('ready', () => 
{

    console.log('I am ready!');
    client.user.setGame("Daishouri");

});

//example message
client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});


//Array with sentences





//Someone starts sentence with Overkill
client.on('message', message =>{
          if (message.content.startsWith('overkill')){
            message.channel.sendMessage('is my husband');
						message.react('😍')
          }
});

//when Bot is mentioned
client.on('message', message=> {
    if (message.isMentioned(client.user)) {
    message.reply('What do you want cunt.');
}
});


//new member
  client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'stables');
  channel.send(`Hello Faggot ${member}`);

});
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
