const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";
const cooldownNP = new Set();
const cooldownGrail =new Set();

/*
OkitaBOT8.0
welcome to my shitty code, things to do:
-fix the code, make every single command a single js archive, see nobubot for examples
-more fun(shitposting) commands
-steal nobubot gacha
-Powerlevel scouter but fgo related
-love command because why not :saber_heart:
-best girl command, could add pics or names
-a IDLERPG game but fate related
don't forget to make backups!
*/

//bot logs in, only relevant while starting bot with console,ask for more details if you want to try
client.on('ready', () =>
{
    console.log('I am ready!');
    client.user.setActivity("Master! use ?help");

});

//example message for things
/*client.on('message', message => {

    if (message.content === 'ping')
    {
      message.reply('pong');
     }
});*/


//Array with sentences
//relevant people used for circlejerkmemes
var relevant =[
  "Pudding",
  "Mode",
  "Aniki",
  "Overkill",
  "Don",
  "Armando",
  "Sayaka",
  "KoO"
];
//circlejerk memes
var meme = [
    "Can't believe **Mode** runs like Naruto IRL.",
    "Can't believe **Pudding** stole money from his mom for MHW.",
    "Can't believe **Don** is a plantfucker.",
    "Can't believe **Overkill** is an uncreative faggot.",
    "Can't believe **Armando** is transnigger.",
    "Can't believe **Aniki** waterboards himself.",
    "Can't believe **Pudding** is a griefer.",
    "Can't believe **Overkill** is making everyone wait AGAIN.",
    "Can't believe **Mode** is making everyone wait AGAIN."
];
//random text on the result of grailwar command
const resultwar =["got murdered in a Master battle.",
                  "was the first one to die, murdered by an Assassin-class.",
                  "got defeated in battle but they survived.",
                  "got defeated in battle and was killed.",
                  "won the Holy Grail War and married their Servant!",
                  "got ran over by a car and died.",
                  "got killed by their own servant.",
                  "they handled Gilgamesh by themselves.",
                  "they died to 32 Noble Phantasm.",
                  "was evaporated by a sword beam and died.",
                  "was raped to death by their servant.",
                  "they died by getting nuked by an insta-NP from a break bar.",
                  "they won the HGW and said their goodbyes.",
                  "they won the HGW and they never saw their Servant again...",
                  "got stabbed in the back by another master.",
                  "got their heart ripped off by Zabanya",
                  "got turned into a pig and eaten.",
                  "got their eyes slashed off and then killed.",
                  "pumped too much magical energy into his servant and died.",
                  "died, but got revived by doctor Gil and won the HGW.",
                  "decided to marry his servant instead and fled the HGW.",
                  "died because he got wormed too hard.",
                  "persisted on becoming a superhero and died.",
                  "drowned in infinite rice.",
                  "fell into the grail mud and died.",
                  "accidentally got teleported into Gensokyo and spent the rest of their lives there.",
                  "got eaten by the sakura's shadow tentacle monster thing.",
                  "lost to Nero's plot armor.",
                  ];
//random text that appears in summoning part of grailwar command
const randomtextgrail =[
                        "Their low mana reserves reduced their Servant's stats by one rank!",
                        "Their very low mana reserves reduced their Servant's stats by two ranks!",
                        "They used chicken blood for the summoning circle.",
                        "He used his semen to summon it.",
                        "They summoned it by accident!",
                        "They summoned it normally.",
                        "They used spit to summon it.",
                        "They summoned it with the help of crest worms.",
                        "They summoned their servant with Madness Enhancement",
                        "They summoned their servant with a human sacrifice"
                       ];
//possible answers whe asking a question to okitabot
const answerball= [
                   "I agree.",
                   "Maybe" ,
                   "Umm... This is hard to say",
                   "I'll give you Okita-san's seal of approval!",
                   "No!",
                   "COUGH!"
];
//% of chance to pull servant 2 = 5* 6 = 4* 40 = 3*, no 2* and 1* because they suck
const ratefgo =[2, 10, 40];
//servant IDS,basically the ID on a specific servant in Cirnopedia
//Cirnopedia ID for 5* servants
const servantid5 =[ "002", "008", "012", "037", "051", "052", "059", "060", "062", "065", "068", "070", "075", "076", "077", "084", "085", "086", "088",
                    "090", "091", "093", "096", "097", "098", "099", "106", "108", "112", "113", "114", "118", "119", "127", "128", "129", "136", "139",
                    "142", "143", "144", "150", "153", "154", "155" ,"156", "160", "161", "163", "167", "169", "173", "175", "179", "189", "195", "196",
                    "198", "199", "201", "205", "206", "209", "212", "213", "215", "216", "220"];
//Cirnopedia ID for 4* servants
const servantid4 =["003", "004", "005", "006", "010", "011", "014", "018", "029", "030", "041", "046", "047", "048", "058", "061", "066", "067", "069",
                  "073", "074", "078", "082", "087", "089", "092", "094", "100", "101", "102", "103", "109", "111", "115", "116", "120", "122", "123",
                  "130", "131", "132", "133", "135", "137", "138", "140", "141", "145", "146", "147", "157", "158", "159", "162", "164", "165", "166",
                  "170", "171", "176", "177", "178", "180", "181", "182", "183", "184", "185", "187", "188", "190", "191", "192", "193", "194", "197",
                   "200", "202", "207", "208", "211", "214", "217", "218", "219", "221", "222"];
//Cirnopedia ID for 3* servants
const servantid3 =["007", "009", "013", "015", "017", "020", "022", "023", "026", "027", "028", "031", "032", "035", "038", "042", "049", "055",
                   "056", "063", "064", "071", "072", "079", "080", "081", "095", "104", "105", "110", "117", "124", "125", "126", "148", "172", "186",
                   "203", "204", "210"];

//random words to make random names for NP command
const randomnpname =["Excalibur", "Destroyer", "Enuma", "Cuck",  "BTFO",  "Epic",  "AIDS", "Faggot",  "Tranquilizer",  "Le",  "Dab",  "Ultra", "Rape",  "Toaster",
                     "Melt",  "Water",  "Thunder",  "Overload",  "Brave",  "Divine ", "Figure",  "Wheel",  "Destruction", "Frog", "Funny", "Clown", "Six" ,"Stella",
                     "Jets", "Wrong", "Explotion", "Disgusting", "Monster", "Hunter", "World", "Earth" ,"Sick", "Meme", "Killer", "Kill", "Genocide", "Hug", "Nazi"];
//type of NP
const nptype =["Anti-Unit", "Anti-Army",  "Anti-World", "Anti-Fortress", "Anti-Divine", "Anti-Demon", "Anti-Country", "Anti-Planet", "Anti-Humanity", "Barrier", "Fortress", "Suicide"];
//damage of NP
const npdamage =["500%", "1000%", "300%", "600%", "1200%"];
const nprank =["EX", "A++", "A+", "A", "A-", "B+++", "B++", "B+", "B", "B-", "C+++", "C++", "C+", "C", "C-", "D+", "D", "D-",
               "E", "E-", "?"];
//for now only used on command NP, can be used in other commands later
const fgocards =["Quick", "Buster" ,"Arts"];


//okitapics! need to add more
var okitapic =[
  "https://i.imgur.com/Cp7FkmT.jpg",
  "https://i.imgur.com/sFGQw1P.png",
  "https://i.imgur.com/onglIwt.jpg",
  "https://i.imgur.com/agTpgUS.jpg",
  "https://i.imgur.com/wMCqa91.jpg"
];

//commands

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
                    .addField("Commands", "`?believe` `?postthat` `?animestream` `?shittaste` `?selfie` `?grailwar` `?mynp` ")
                    .setColor(0x00FFFF)
                    message.channel.send(embed);
              break;

        case "don":
                          message.channel.send({
                          files: ["https://i.imgur.com/Uh0jIf5.png"]
                          });
                  break;

        case "overkill":
                               message.channel.send({
                               files: ["http://i.imgur.com/hljYGCE.png"]
                               });
                   break;

        case "mode":
                          message.channel.send({
                          files: ["https://i.imgur.com/lhfncXf.png"]
                          });
              break;

        case "pudding":
                              message.channel.send({
                              files: ["https://i.imgur.com/P09qWTe.png"]
                              });
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
    if(message.content === `${prefix}grailwar`)
    {
      if (cooldownGrail.has(message.author.id))
      {
        message.channel.send("Master! you can only send this command every 5 minutes,why don't you join me for some dango? ")
      }
      else
      {
           var chance = Math.random() * 100;
           var rate = ratefgo;
           var id = "0";
           var name = message.author.username;
           var useravatar = message.author.avatarURL
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
            .addField("Servant Summoned",`**${name}** has summoned a Servant! ${randomsummontext} `)
            .setImage(`https://fate-go.cirnopedia.org/icons/servant_card/${id}4.jpg`)
            .setThumbnail(`${message.author.avatarURL}`)
            .addField("Result", `And in the end ${finalresultwar} ${smugrin}`)
            .setColor(0x00FFFF)
            message.channel.send(resultgrailwar);
      }
           cooldownGrail.add(message.author.id);
           setTimeout(() => {cooldownGrail.delete(message.author.id);}, 300000);
   }

});

//Take random words from array to make a random NP!
client.on('message', message =>
{
  if (message.author.bot) return;
  if(message.content === `${prefix}mynp`)
  {
    if (cooldownNP.has(message.author.id))
    {
      message.channel.send("Master! you can only send this command every 5 minutes,why don't you join me for some dango? ")
    }
    else
    {
    var useravatar = message.author.avatarURL
    var name = message.author.username;
    var npname1 = randomnpname [Math.floor(Math.random()*randomnpname .length)];
    var npname2 = randomnpname [Math.floor(Math.random()*randomnpname .length)];
    var typenp =  nptype [Math.floor(Math.random()*nptype .length)];
    var damagenp = npdamage [Math.floor(Math.random()*npdamage .length)];
    var cardtype = fgocards [Math.floor(Math.random()*fgocards .length)];
    var ranknp = nprank [Math.floor(Math.random()*nprank .length)];
    var resultnp = new Discord.RichEmbed()
    .addField("Your Noble Phantasm",`**${name}** your Noble Phantasm is **${npname1} ${npname2}** `)
    .setThumbnail(`${message.author.avatarURL}`)
    .addField("Classification", `**${typenp}**`)
    .addField("Type",  `**${cardtype}**`)
    .addField("Damage", `**${damagenp}**`)
    .addField("Rank", `**${ranknp}**`)
    .setColor(0x00FFFF)
    message.channel.send(resultnp);
  }
  cooldownNP.add(message.author.id);
  setTimeout(() => {cooldownNP.delete(message.author.id);}, 300000);
  }
});

//8ball,answers only if sentences starts with okitabot and includes a ?
client.on('message', message =>
{
       if (message.author.bot) return;
       if(message.content.startsWith('okitabot') && message.content.includes('?'))
       {
           var answer = answerball [Math.floor(Math.random()*answerball .length)];
          message.channel.send(answer);
       }
});

//Okita is someone's sentence
/*client.on('message', message =>
{
  if (message.author.bot) return;
  if(message.content.includes('okita') || message.content.includes('Okita'))
{
      message.react("480911280400760837");
}
});
*/

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
/*client.on('message', message =>
{
          if (message.content.startsWith('overkill'))
          {
            	message.react('😍')
          }
});*/


//when Bot is mentioned
client.on('message', message=> {
    if (message.isMentioned(client.user))
    {
    message.reply(" I'm in good condition, Master, yes, as good as ever!");
    }
});


//new member
  client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'stables');
  channel.send(`Welcome to the Shinsengumi Police Station~! ${member}`);
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
