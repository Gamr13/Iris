const Discord = require("discord.js");
const Command = require("../base/Command.js");

class pick extends Command {
  constructor (client) {
    super(client, {
      name: "pick",
      description: "Pick a number!",
      usage: "pick <first number> <second number>",
      aliases: ["pick"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      let min = parseInt(args[0]);
        let max = parseInt(args[1]);
			if (max >= 1000001){
				message.channel.send("Please select a number 1 million or less")
				return
			}
        if(min > max){
            let temp = max;
            max = min;
            min = temp;
        }

        var Result = Math.floor(Math.random() * (max - min + 1)) + min;

        if(isNaN(Result)){
            return message.channel.send("Please enter a min and a max number")
			.then(msg => {
			msg.delete(3000)
			});
        }else{
			let embed = new Discord.RichEmbed()
		.setAuthor("Random Number Picker","https://i.imgur.com/rRVy516.jpg")
		.setDescription(Result)
		.setColor('#961CAF')
		.setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png")
		message.channel.send({embed});
        }
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = pick;
