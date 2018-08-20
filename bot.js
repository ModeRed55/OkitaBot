const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";

//welcome to my shitty code, things to do
//fix the code so every command is a single archive!
//random Commands
//a IDLERPG game but fate related


//bot logs in, only relevant when executing on console manually
client.on('ready', () =>
{

    console.log('I am ready!');
    client.user.setActivity("Master! use ?help");

});

//example message for things
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
//memes
var meme = [
    "Can't believe **Mode** runs like Naruto IRL",
    "Can't believe **Pudding** stole money from his mom for MHW ",
    "Can't believe **Don** is a plantfucker ",
    "Can't believe **Overkill** is an uncreative faggot",
    "Can't believe **Armando** is transnigger",
    "Can't believe **Aniki** waterboards himself",
    "Can't believe **Pudding** is a griefer"
];
const resultwar =["got murdered in a Master battle.",
                  "was first one to die, murdered by an Assassin-class.",
                  "got defeated in battle but they survived.",
                  "got defeated in battle and was killed.",
                  "won the Holy Grail War and married their Servant!",
                  "got ran over by a car and died.",
                  "got killed by his own servant."];

const randomtextgrail =["His low mana reserves reduced their Servant's stats by one rank!",
                        "His very low mana reserves reduced their Servant's stats by two ranks!",
                        "He used chicken's blood for the summoning circle.",
                        "He used his semen to summon it.",
                        "His servant got summoned by accident!",
                        "He summoned it normally.",
                        "he used spit to summon it."
                       ];
//% of chance to pull servant 2 = 5* 6 = 4* 40 = 3*, no 2* and 1* because they suck
const ratefgo =[2, 10, 40];
//servant IDS,basically the ID on a specific servant in cirnopedia, Incomplete
const servantid5 =[ "002", "008", "012", "037", "051", "052", "059", "060", "062", "065", "068", "070", "075", "076", "077", "084", "085", "086", "088",
                    "090", "091", "093", "096", "097", "098", "099", "106", "108", "112", "113", "114", "118", "119", "127", "128", "129", "136", "139",
                    "142", "143", "144", "150", "153", "154", "155" ,"156", "160", "161", "163", "167", "169", "173", "175", "179", "189", "195", "196",
                    "198", "199", "201", "205", "206", "209", "212", "213", "215", "216", "220"];

const servantid4 =["003", "004", "005", "006", "010", "011", "014", "018", "029", "030", "041", "046", "047", "048", "058", "061", "066", "067", "069",
                  "073", "074", "078", "082", "087", "089", "092", "094", "100", "101", "102", "103", "109", "111", "115", "116", "120", "122", "123",
                  "130", "131", "132", "133", "135", "137", "138", "140", "141", "145", "146", "147", "157", "158", "159", "162", "164", "165", "166",
                  "170", "171", "176", "177", "178", "180", "181", "182", "183", "184", "185", "187", "188", "190", "191", "192", "193", "194", "197",
                   "200", "202", "207", "208", "211", "214", "217", "218", "219", "221", "222"];

const servantid3 =["007", "009", "013", "015", "017", "020", "022", "023", "026", "027", "028", "031", "032", "035", "038", "042", "049", "055",
                   "056", "063", "064", "071", "072", "079", "080", "081", "095", "104", "105", "110", "117", "124", "125", "126", "148", "172", "186",
                   "203", "204", "210"];

//okitapics! need to add more
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
         .addField("Commands", "`?believe` `?postthat` `?animestream` `?shittaste` `?selfie` `?grailwar` ")
         .setColor(0x00FFFF)
     message.channel.sendEmbed(embed);
              break;
        default:
            break;
    }
});

/*grailwar command
basically a bunch of comparison between random numbers get you a random servant, the % is defined by ratefgo array
*/
client.on('message', message =>
{
  if (message.author.bot) return;
  if(message.content === "?grailwar")
  {
  var chance = Math.random() * 100;
  var rate = ratefgo;
  var id = "0";
  var name = message.author.username;
  const smugrin = client.emojis.find("name", "smug_rin");
  var finalresultwar = resultwar [Math.floor(Math.random()*resultwar .length)];
  var randomsummontext = randomtextgrail [Math.floor(Math.random()*randomtextgrail .length)];
  if (chance <= rate[0]) chance = "5";
  else if (chance <= rate[1]) chance = "4";
  else if (chance <= rate[2]) chance = "3";
  else chance = "3";

 if(chance === "3")
 {
   var id = servantid3 [Math.floor(Math.random()*servantid3 .length)];
 }
 if(chance === "4")
 {
   var id = servantid4 [Math.floor(Math.random()*servantid4 .length)];
 }
 if(chance === "5")
 {
   var id = servantid5 [Math.floor(Math.random()*servantid5 .length)];
 }

 var resultgrailwar = new Discord.RichEmbed()
   .addField("Servant Summoned",`**${name}** has summoned a Servant!, ${randomsummontext} `)
   .setImage(`https://fate-go.cirnopedia.org/icons/servant_card/${id}4.jpg`)
   .addField("Result", `And in the end he ${finalresultwar} ${smugrin}`)
   .setColor(0x00FFFF)
  message.channel.send(resultgrailwar);
}});




//Okita is someone's sentence
client.on('message', message =>
{
  if (message.author.bot) return;
  if(message.content.includes('okita') || message.content.includes('Okita'))
{
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
    message.reply("I'm in good condition, Master. Yes, as good as ever!.");
}
});


//new member
  client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'stables');
  channel.send(`Welcome to the Shinsengumi Police Station~! ${member}`);

});


 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
