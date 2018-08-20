const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";

//bot logs in
client.on('ready', () =>
{

    console.log('I am ready!');
    client.user.setActivity("Master! use ?help");

});

//example message
client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});


//Array with sentences
var relevant =[
  "Pudding",
  "Mode",
  "Aniki",
  "Overkill",
  "Don",
  "Armando",
  "Sayaka"
];
var meme = [
    "Can't believe **Mode** runs like Naruto IRL",
    "Can't believe **Pudding** stole money from his mom for MHW ",
    "Can't believe **Don** is a plantfucker ",
    "Can't believe **Overkill** is an uncreative faggot",
    "Can't believe **Armando** is transnigger",
    "Can't believe **Aniki** waterboards himself",
    "Can't believe **Pudding** is a griefer"
];
var sleep =[
  "480950640495820810",
  "480950660548788224",
  "480950679817551902"
]
var okitapic =[
  "https://i.imgur.com/Cp7FkmT.jpg",
  "https://i.imgur.com/sFGQw1P.png",
  "https://i.imgur.com/onglIwt.jpg",
  "https://i.imgur.com/agTpgUS.jpg",
  "https://i.imgur.com/wMCqa91.jpg"
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
        case "believe":
            var response = meme [Math.floor(Math.random()*meme .length)];
            message.channel.send(response).then().catch(console.error);
            break;
        case "postthat":
              const junior = client.emojis.find("name", "seductivejunior");
              message.channel.send(`${junior}`)
              break;
        case "animestream":
              message.channel.send("https://www.twitch.tv/notanimestream");
              message.channel.send("Currently on List : To Aru Majutsu No Index S1")
              break;
        case "shittaste":
              var response = relevant [Math.floor(Math.random()*relevant .length)];
              const smugrin = client.emojis.find("name", "smug_rin");
              message.channel.send(`Obviously the shittiest taste is from **${response}** ${smugrin}`).then().catch(console.error);
              break;
        case "selfie":
              message.channel.send({
              file: okitapic[Math.floor(Math.random() * okitapic.length)]
              });
              break;
        case "dab":
              message.channel.send({
              files: ["https://i.imgur.com/vDTIHTL.png"]
              });
              break;
        case "help":
        const okitahelp = client.emojis.find("name", "okita_yay");
        var embed = new Discord.RichEmbed()
         .addField("Shinsengumi's first unit's captain, Okita Sōji arrives!",`${okitahelp}`)
         .addField("Commands", "`?believe` `?postthat` `?animestream` `?shittaste` `?selfie`  ")
         .setColor(0x00FFFF)
     message.channel.sendEmbed(embed);
              break;
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
  if(message.content.includes('night') || message.content.includes('sleep') || message.content.includes('Night') || message.content.includes('Sleep'))
{
       message.react("480910147699605539");
}
});


//Someone starts sentence with Overkill
client.on('message', message =>
{
          if (message.content.startsWith('overkill'))
          {
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
