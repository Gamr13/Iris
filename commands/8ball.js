const Discord = require("discord.js");
const client = new Discord.Client();
const Command = require("../base/Command.js");

class eball extends Command {
  constructor (client) {
    super(client, {
      name: "8ball",
      description: "Ask the 8ball a question.",
      usage: "8ball <question>",
      aliases: ["8ball"],
	  category: "Fun commands"
    });
  }
  


  async run (message, args, level) {
    try {
		
var fortunes = [
    "`Yes`",
    "`No`",
    "`Maybe`",
    "`Ask again`",
    "`Sometimes`",
    "`Okay`",
    "`HELL NO`",
    "`FUCK YEAH`",
    "`no no no`",
	"`Sure`",
	"`Nah`",
	"`Eh`"
 ];
  
      if(!args[0]){
			return message.channel.send(":x: " + "| Please Enter A Question You Would Like Answered")
			.then(msg => {
			msg.delete(3000)
		})
		}
	 
	 message.channel.send({embed: {
        color: 3447003,
        author: {
          name: `8ball`,
          icon_url: 'http://8ballsportsbar.com/wp-content/uploads/2016/02/2000px-8_ball_icon.svg_.png'
        },
        fields: [{
            name: 'Info:',
            value: `**My answer:** ${fortunes[~~(Math.random() * fortunes.length)]}`
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

module.exports = eball;
