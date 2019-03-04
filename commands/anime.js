const Discord = require("discord.js");
const Command = require("../base/Command.js");

class anime extends Command {
  constructor (client) {
    super(client, {
      name: "anime",
      description: "Sends a random anime picture.",
      usage: "=anime",
      aliases: ["anime"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const animesf = require('snekfetch');

            let res = await animesf.get('http://api.cutegirls.moe/json');
            if (res.body.status !== 200) {
                return message.channel.send('Oh man, an error occurred. Try again!')
					.then(msg => {
					msg.delete(3000)
					});
            }
			
			const animemsg = [
			`This one's cute!`,
			`I like this one ^u^`,
			`I hope you enjoy this one!`,
			`^///^`,
			`So cute!`,
			`Adorable! ^u^`,
			`>////<`,
			]
			
            let animepicembed = new Discord.RichEmbed()
			.setAuthor("Random Anime Image", "https://i.imgur.com/rRVy516.jpg")
            .setColor('#f266f9')
			.setDescription((animemsg[Math.floor(Math.random() *animemsg.length)]))
            .setImage(res.body.data.image)
		    .setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png");
    
            message.channel.send(animepicembed);
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = anime;
