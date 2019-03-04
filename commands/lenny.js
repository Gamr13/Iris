const Discord = require("discord.js");
const Command = require("../base/Command.js");

class lenny extends Command {
  constructor (client) {
    super(client, {
      name: "lenny",
      description: "This will post the Lenny face.",
      usage: "lenny",
      aliases: ["lenny"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const lenny = [
	'https://i.imgur.com/JSvkVA4.gif',
	'https://media.giphy.com/media/x44hq2iDRnJFC/giphy.gif',
	'https://uploads.scratch.mit.edu/users/avatars/24954151.png',
	'https://media.giphy.com/media/Hot2b4Wn3aHwk/giphy.gif',
	'https://media.giphy.com/media/5uZjTWWr8gK8U/giphy.gif',
	'https://media.giphy.com/media/C3CUJPTRqNk88/source.gif',
	'https://78.media.tumblr.com/4c3323dfc601ddc97c44a11dc62fa05a/tumblr_o07eviy5es1tvo0jlo1_500.gif',
	'https://thumbs.gfycat.com/BogusBigBubblefish-small.gif',
	'https://gifer.com/i/75FW.gif',
	'https://i.redd.it/2n9bqhy2waz01.gif',
	'https://i.imgur.com/fmckMvo.gif',
	]

	 
	let embed = new Discord.RichEmbed()
	.setAuthor("Lenny","https://i.imgur.com/rRVy516.jpg")
	.setImage((lenny[Math.floor(Math.random() * lenny.length)]))
	.setColor('#4EB634')
	.setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png")
	message.channel.send({embed});
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = lenny;
