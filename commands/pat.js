const Discord = require("discord.js");
const Command = require("../base/Command.js");

class pat extends Command {
  constructor (client) {
    super(client, {
      name: "pat",
      description: "Pat someone.",
      usage: "pat @user",
      aliases: ["pat"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const pat = [
	'http://franieblues.f.r.pic.centerblog.net/7719b99c.gif',
	'https://thumbs.gfycat.com/ImpurePleasantArthropods-small.gif',
	'https://i.imgur.com/fp9XJZO.gif',
	'https://i.imgur.com/4ssddEQ.gif',
	'https://78.media.tumblr.com/584a3894e3483eed23d1afaf1f6f9347/tumblr_ok1oplyzSF1r0tp5lo1_500.gif',
	'https://78.media.tumblr.com/71d93048022df065a1d2af96ab71afa3/tumblr_olykrec0DB1qbvovho1_500.gif',
	'https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif',
	'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif',
	'https://i.gifer.com/H69F.gif',
	'https://fat.gfycat.com/NippyWeeAkitainu.gif',
	'https://i.imgur.com/LUypjw3.gif',
	'http://gifimage.net/wp-content/uploads/2017/07/head-pat-gif-21.gif',
	'https://i.pinimg.com/originals/a0/6d/65/a06d65ad49f019aaae3f30fb872df619.gif',
	'https://78.media.tumblr.com/3cc69630f81a1af371e9b1060282aee2/tumblr_nzxsdtG8Re1sbzv20o1_500.gif',
	'https://thumbs.gfycat.com/AgileHeavyGecko-max-1mb.gif',
	'https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif',
	'https://i.imgur.com/4ssddEQ.gif',
	'https://thumbs.gfycat.com/ImpurePleasantArthropods-small.gif',
	'https://media.tenor.com/images/7d12c7bc28c3b0330401388102cdcc0f/tenor.gif',
	'https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-size_restricted.gif',
	'https://media.giphy.com/media/RhD1o6EyIPAze/giphy.gif',
	'https://media1.tenor.com/images/398c9c832335a13be124914c23e88fdf/tenor.gif',
	'https://media1.tenor.com/images/8b426c9bedc37054cd7e73925fa10da5/tenor.gif',
	'https://data.whicdn.com/images/114648533/original.gif',
	'https://i.gifer.com/AWA8.gif',
	'https://i.kym-cdn.com/photos/images/newsfeed/001/071/614/ece.gif',
	'https://i.imgur.com/POolhtQ.gif',
	'https://i.pinimg.com/originals/74/9a/0b/749a0b892d141660ce151de68d9731a2.gif',
	'https://data.whicdn.com/images/217039329/original.gif',
	'http://i.imgur.com/sLwoifL.gif',
	'https://media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif',
	'https://data.whicdn.com/images/84233961/original.gif',
	'https://gifimage.net/wp-content/uploads/2017/07/head-pat-gif-11.gif',
	'https://thumbs.gfycat.com/RequiredDiligentIndochinesetiger-small.gif',
	'https://i.pinimg.com/originals/97/8e/10/978e10708f7d5d2302fda433644a4eb0.gif',
]
	  
	  const selfpat = [
	'*You gave yourself a gentle pat on the head.*',
	'*You reached over your shoulder and gave yourself a pat on the back.*',
	'*Feeling overjoyed you pat yourself on the back.*',
	]
	  
	  function isSelfTest () {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(member.user === message.author )  return true;
    return false;
  };
	  
	  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
   if(!member)
   return message.channel.send("You should pick someone you'd like to pat.")
		.then(msg => {
			msg.delete(3000)
		});
   if(isSelfTest()) return message.channel.send(
	selfpat[Math.floor(Math.random() * selfpat.length)]
   )
const patmsg = [
`${message.author} gave ${member} a gentle pat on the head`,
`${member} just got pats from ${message.author}`,
]
		let embed = new Discord.RichEmbed()
		.setAuthor("Pat","https://i.imgur.com/dJb2tIq.png")
		.setDescription((patmsg[Math.floor(Math.random() * patmsg.length)]))
		.setImage((pat[Math.floor(Math.random() * pat.length)]))
		.setColor('#961CAF')
		.setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png")
		message.channel.send({embed});
	  
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = pat;
