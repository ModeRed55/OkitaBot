const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')
const prefix = "?";

//bot logs in
client.on('ready', () =>
{

    console.log('I am ready!');
    client.user.setActivity("Daishouri");

});

//example message
client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});


//Array with sentences

var meme = [
    "Can't believe **Mode** runs like Naruto IRL",
    "Can't believe **Pudding** stole money from his mom for MHW ",
    "Can't believe **Don** is a plantfucker ",
    "Can't believe **Overkill** is uncreative faggot",
    "Can't believe **Armando** is transnigger",
    "Can't believe **Aniki** waterboards himself"
];

//command
// The onMessage event handler
client.on('message', function (message) {
    // It is considered bad practice to let your bot react to other bots.
    if (message.author.bot) return;

    // If a message doesn't start with your bot's prefix, don't bother going through the cases.
    if (!message.content.startsWith(prefix)) return;

    // Args length check. #1 is the command, #2 and higher are the arguments
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "test":
            var response = meme [Math.floor(Math.random()*meme .length)];

            message.channel.send(response).then().catch(console.error);
            break;
        case "postthat":
              const junior = client.emojis.find("name", "seductivejunior");
              message.channel.send(`${junior}`)
        default:
            break;
    }
});

//someone says okita
client.on('message', message =>
{
  if (message.author.bot) return;
  if(message.content.includes('okita') || message.content.includes('Okita'))
{
       const okita = client.emojis.find("name", "okita_happy");
       message.channel.send(`${okita}`);
       message.react("480911280400760837");
}
});

//someone says night
client.on('message', message =>
{
  if (message.author.bot) return;
  if(message.content.includes('night') || message.content.includes('sleep'))
{
       message.react("480910147699605539");
}
});


//Someone starts sentence with Overkill
client.on('message', message =>
{
          if (message.content.startsWith('overkill'))
          {
            message.channel.send('is my husband');
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

client.login(settings.token);
