const Discord = require("discord.js");
const Command = require("../base/Command.js");

class invite extends Command {
  constructor (client) {
    super(client, {
      name: "invite",
      description: "Get the link to invite Iris to your server.",
      usage: "invite",
      aliases: ["invite"]
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const embed = new Discord.RichEmbed()
  .setTitle("Click here to invite me to your server!")
  .setAuthor("Invite","https://i.imgur.com/dJb2tIq.png")
  .setColor(0x00AE86)
  .setDescription("Thank you for helping to spread me around! <3 ^u^")
  .setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png")
  .setThumbnail("https://i.imgur.com/ehMzi5y.gif")
  .setURL("https://discordapp.com/oauth2/authorize?client_id=483370290273845260&scope=bot&permissions=66448838")
  message.channel.send({embed});
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = invite;
