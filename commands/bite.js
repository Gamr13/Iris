const Discord = require("discord.js");
const Command = require("../base/Command.js");

class bite extends Command {
  constructor (client) {
    super(client, {
      name: "bite",
      description: "Bite someone.",
      usage: "bite @user",
      aliases: ["bite"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const bite = [
'https://media1.tenor.com/images/d97e4bc853ed48bf83386664956d75ec/tenor.gif',
'https://media.giphy.com/media/OqQOwXiCyJAmA/giphy.gif',
'https://media1.tenor.com/images/f308e2fe3f1b3a41754727f8629e5b56/tenor.gif',
'https://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-4.gif',
'https://pa1.narvii.com/6045/a9bb6d864ebe7e01ed647b78fc652f15116716c4_hq.gif',
'https://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-7.gif',
'https://data.whicdn.com/images/151203966/original.gif',
'https://pa1.narvii.com/6375/ea79c34150072b17a6e9fcb8cf623905fb6ea9da_hq.gif',
'https://media1.tenor.com/images/8901a31defde8ec91e0b8b4f52e377b5/tenor.gif',
'http://i.imgur.com/fWSIugu.gif',
'https://data.whicdn.com/images/243843406/original.gif',
'https://66.media.tumblr.com/18cac2fa4705429b0add5150e0ce4d1d/tumblr_obmhi2mtz01u6w1edo1_500.gif',
'https://i.gifer.com/np4.gif',
]

const selfbite = [
'*You bit your arm softly and sat there watching everyone else chatting.*',
'*Out of sheer boredom you decided to bite into your arm softly.*',
'*Your bite at the air threateningly...Someone seems to have wet themselves.*',
"*You tried to bite your leg...But you're not that flexible.*",
'*You sit there biting yourself...Everyone wonder what went wrong with you.*',
'*You realize that you look weird biting yourself, but continue to do so happily.*',
'**You nip at your skin.*',
]



function isSelfTest () {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(member.user === message.author )  return true;
    return false;
  };
  
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
   if(!member)
   return message.channel.send("You should pick your victim.")
		.then(msg => {
			msg.delete(3000)
		});
   if(isSelfTest()) return message.channel.send(
	selfbite[Math.floor(Math.random() * selfbite.length)]
   )
const bitmsg = [
`${message.author} bit ${member}! Ouch!`,
`${message.author} munched on ${member}!`,
`${message.author} apparently likes cannibalism! (Sucks for you, ${member})`,
`${message.author} thought ${member} tasted pretty good.`,
`${message.author} thought ${member} looked delectable.`,
]
	  let embed = new Discord.RichEmbed()
	  .setAuthor("Bite","https://i.imgur.com/rRVy516.jpg")
	  .setDescription((bitmsg[Math.floor(Math.random() *bitmsg.length)]))
	  .setColor('#DC143C')
	  .setImage((bite[Math.floor(Math.random() * bite.length)]))
	  .setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png")
      message.channel.send({embed});
  
  
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = bite;
