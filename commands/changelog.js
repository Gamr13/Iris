const Discord = require("discord.js");
const Command = require("../base/Command.js");

class changelog extends Command {
  constructor (client) {
    super(client, {
      name: "changelog",
      description: "Find out what's new in this version of Iris!",
      usage: "changelog",
      aliases: ["Changelog"]
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
		
	  let embed = new Discord.RichEmbed()
	.setAuthor("Changelog","https://i.imgur.com/rRVy516.jpg")
	.setThumbnail("https://i.imgur.com/rRVy516.jpg")
	.setDescription("Here's what's new in Iris 3.0!\n\n- Drastically improved the design.\n- Iris is now modular!\n- The main prefix has changed to !\n- Added a lot more dad jokes, because Toby's sadistic.\n- ")
	.setColor('#275BF0')
	.setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png")
	message.channel.send({embed});
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = changelog;
