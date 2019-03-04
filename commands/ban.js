const Command = require("../base/Command.js");

class ban extends Command {
  constructor (client) {
    super(client, {
      name: "ban",
      description: "Ban someone from your server.",
      usage: "ban @user",
      aliases: ["ban"],
	  category: "Admin commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      if (message.member.hasPermission("BAN_MEMBERS")) {
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server")
			.then(msg => {
			msg.delete(3000)
			});
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?")
			.then(msg => {
			msg.delete(3000)
			});

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
		 else{
			  return message.reply("Sorry, you don't have permissions to use this!");
		 }
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = ban;
