const Command = require("../base/Command.js");
const Discord = require("discord.js");



class user extends Command {
  constructor (client) {
    super(client, {
      name: "user",
      description: "Obtain user information.",
      usage: "user @user",
      aliases: ["user"]
    });
  }
  
  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      let memberInfo = message.mentions.members.first();
	  if(!memberInfo){
		  
    const userinf = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setDescription("This is the user's info!")
        .setColor(0x00FF00)
        .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID:", message.author.id)
        .addField("Created At:", message.author.createdAt)
		.setFooter("©Toby#0621 2019", "https://i.imgur.com/dJb2tIq.png")
        message.channel.send(userinf);

  }else{

    const userinfoo = new Discord.RichEmbed()
        .setAuthor(memberInfo.displayName)
        .setThumbnail(memberInfo.user.avatarURL)
        .setDescription("This is the user's info!")
        .setColor(0x00FF00)
        .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
        .addField("ID:", memberInfo.id)
        .addField("Created At:", memberInfo.user.createdAt)
		.setFooter("©Toby#0621 2019", "https://i.imgur.com/dJb2tIq.png")

        message.channel.send(userinfoo);
  }
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = user;