const Discord = require("discord.js");
const Command = require("../base/Command.js");

class avatar extends Command {
  constructor (client) {
    super(client, {
      name: "avatar",
      description: "Get your avatar or find someone elses avatar.",
      usage: "avatar | Or | avatar @user",
      aliases: ["avatar"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
		let msg = await message.channel.send("Fetching your avatar...");
		let target = message.mentions.users.first() || message.author;
		    let embed = new Discord.RichEmbed()
			.setAuthor("Avatar Grabber", "https://i.imgur.com/rRVy516.jpg")  
			.setImage(target.displayAvatarURL)
			.setColor('31D7D7')
			.setFooter("©Toby#7938 2019","https://i.imgur.com/dJb2tIq.png")
			await message.channel.send({embed});
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = avatar;
