const Command = require("../base/Command.js");

class say extends Command {
  constructor (client) {
    super(client, {
      name: "say",
      description: "This command is for admins to make the bot say something.",
      usage: "say <message>",
      aliases: ["say"],
	  category: "Admin commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      if (message.member.hasPermission("ADMINISTRATOR")) {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
		}
		else{
		return message.reply("Sorry, you don't have permissions to use this!")
		.then(msg => {
			msg.delete(3000)
		})
		}
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = say;
