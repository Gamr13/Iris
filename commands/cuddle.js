const Discord = require("discord.js");
const Command = require("../base/Command.js");

class cuddle extends Command {
  constructor (client) {
    super(client, {
      name: "cuddle",
      description: "Give someone a nice warm cuddle.",
      usage: "cuddle @user",
      aliases: ["cuddle"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const cuddle = [
'https://media.giphy.com/media/h4BprYiFYNxRe/giphy.gif',
'https://media.tenor.com/images/60e2ee56634ff677cf0592e9313cd403/tenor.gif',
'https://i.imgur.com/CKbF1v6.gif',
'https://media.tenor.com/images/f435deaee30783c37116a8c321fdee37/tenor.gif',
'https://pa1.narvii.com/6103/377538d76d83ec7d9d2be32870d43f2ac931a412_hq.gif',
'https://thumbs.gfycat.com/JealousFlakyArabianwildcat-small.gif',
'http://gifimage.net/wp-content/uploads/2017/09/anime-cuddle-gif-8.gif',
'https://gifer.com/i/CzCS.gif',
'https://i.pinimg.com/originals/dd/a9/67/dda96758b0d0660fffb5f444e71a63a1.gif',
'https://media.tenor.com/images/ca88f916b116711c60bb23b8eb608694/tenor.gif',
'https://media.tenor.com/images/a0f0584452bb110283c011b85b396bab/tenor.gif',
'https://media.tenor.com/images/eca14a1c1c5e2f8f5e9339d6b2245a8e/tenor.gif',
'https://media1.tenor.com/images/641a584c05345c733e8e5d94f906e53c/tenor.gif',
'https://orig00.deviantart.net/e35f/f/2016/339/b/e/rowlet_cuddle_animation__complete__by_montemarte-daqlqkh.gif',
'https://media.giphy.com/media/yhbzJcQhek0g0/giphy.gif',
'https://media1.tenor.com/images/fd40fe3e4d96c53efc3a6fa8c4a151a5/tenor.gif',
'https://i.gifer.com/7LJ9.gif',
'https://media1.tenor.com/images/542b8fe2f84e2d4d03e9b6a4e32975e8/tenor.gif',
'https://media.giphy.com/media/kWr9AMkPlADU4/giphy.gif',
'https://66.media.tumblr.com/30cc8090670fcf2c23a6faf7bfce74bb/tumblr_n6h0nlTBud1qbvovho1_500.gif',
'https://media2.giphy.com/media/E2YWwrqSfK6Ws/giphy.gif',
'https://i.pinimg.com/originals/ae/09/8b/ae098bfad5217309e4d21c688d41822c.gif',
'https://media.tenor.com/images/18225ef7f84125465588b9ea957ce62f/tenor.gif',
'https://derpicdn.net/img/2017/4/8/1406513/full.gif',
'http://www.lovethisgif.com/uploaded_images/176986-Adorable-Cuddling-Gifs.gif',
'https://media1.tenor.com/images/96e0d6899fa58ab0a68899974c9cabe9/tenor.gif',
'https://media.giphy.com/media/qI1VGDoje5TX2/giphy.gif',
]

const selfcuddle =[
'*You wrap your arms around yourself and raise your shoulders to give yourself a nice warm cuddle.*',
'*You read chat with your arms wrapped around yourself.*',
'*You sit with your back pressed up against the wall and your arms wrapped around yourself longing for a cuddle.*',
'*The weather outside is cold, you lie in bed with your arms and duvet wrapped around you.*',
]



function isSelfTest () {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(member.user === message.author )  return true;
    return false;
  };
  
  		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
   if(!member)
   return message.channel.send("You should pick someone you'd like to cuddle.")
		.then(msg => {
			msg.delete(3000)
		})
   if(isSelfTest()) return message.channel.send(
	selfcuddle[Math.floor(Math.random() * selfcuddle.length)]
   )
   const cudmsg = [
		`${message.author} cuddled ${member} softly~`,
		`${member} got a soft cuddle from ${message.author}`,
		]

		let embed = new Discord.RichEmbed()
		.setAuthor("Cuddle","https://i.imgur.com/rRVy516.jpg")
		.setDescription((cudmsg[Math.floor(Math.random() *cudmsg.length)]))
		.setColor('#F69EFF')
		.setImage(cuddle[Math.floor(Math.random() * cuddle.length)])
		.setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png")
		message.channel.send({embed});
  } catch (e) {
      console.log(e);
    }
  }
}

module.exports = cuddle;
