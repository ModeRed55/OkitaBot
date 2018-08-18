const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => 
{

    console.log('I am ready!');
    client.user.setGame("Daishouri");

});

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.on('message', message =>{
          if (message.content.startsWith('overkill')){
            message.channel.sendMessage('is my husband');
						message.react('😍')
          }
});

client.on('message', message=> {
    if (message.isMentioned(client.user)) {
    message.reply('What do you want cunt.');
}
});

  client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'stables');
  channel.send(`Hello Faggot ${member}`);

});
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
