const Discord = require("discord.js");
const client = new Discord.Client();
const Command = require("../base/Command.js");

class flip extends Command {
  constructor (client) {
    super(client, {
      name: "flip",
      description: "Flip a coin. Heads or Tails?",
      usage: "flip",
      aliases: ["flip"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      let answers = [
            'heads',
            'tails'
        ];
		
		message.channel.send({embed: {
            color: 3447003,
            title: "Coinflip:",
            fields: [{
                name: "Result",
                value: `\`${answers[~~(Math.random() * answers.length)]}\``
              }
            ],
            footer: {
              icon_url: "https://i.imgur.com/dJb2tIq.png",
              text: "©Toby#7938 2019"
            }
          }
        });
		
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = flip;
