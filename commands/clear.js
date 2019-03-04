const Command = require("../base/Command.js");

class clear extends Command {
  constructor (client) {
    super(client, {
      name: "clear",
      description: "Clear messages in a channel. (Requires Manage Messages)",
      usage: "clear <amount>",
      aliases: ["clear"],
	  category: "Admin commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      if (message.member.hasPermission("MANAGE_MESSAGES")) {

    // This command removes all messages from all users in the channel, up to 300.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 300)
      return message.reply("Please provide a number between 2 and 300 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
	message.delete().catch(O_o=>{});
	}
		else{
	        return message.reply("Sorry, you don't have permissions to use this!")
			.then(msg => {
			msg.delete(3000)
		});
		}
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = clear;
