const Command = require("../base/Command.js");

class kick extends Command {
  constructor (client) {
    super(client, {
      name: "kick",
      description: "Kick a member from your server (Requires kick permissions)",
      usage: "kick @user",
      aliases: ["kick"],
	  category: "Admin commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      if (message.member.hasPermission("KICK_MEMBERS")) {
   
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
	}
		
	else{
		return message.reply("Sorry, you don't have permissions to use this!");
	}
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = kick;
