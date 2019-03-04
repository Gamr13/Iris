const Discord = require("discord.js");
const Command = require("../base/Command.js");

class info extends Command {
  constructor (client) {
    super(client, {
      name: "info",
      description: "About Iris.",
      usage: "info",
      aliases: ["info"]
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const embed = new Discord.RichEmbed()
	.setTitle("About me")
	.setAuthor("Toby#7938","https://i.imgur.com/dJb2tIq.png")
	.setColor(0x00AE86)
	.setDescription("Programmer: Toby#7938\nHelpers: dreamer#2345, babaruski#6494")
	.addField("Need help? Join our server!", "https://discord.gg/9r7Ktbs")
	.setThumbnail("https://i.imgur.com/rRVy516.jpg")
	.setFooter("©Toby#7938 2019","https://i.imgur.com/dJb2tIq.png")
	message.channel.send({embed});
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = info;
