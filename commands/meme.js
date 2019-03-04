const Discord = require("discord.js");
const Request = require("request");
const snekfetch = require('snekfetch');
const Command = require("../base/Command.js");

class meme extends Command {
  constructor (client) {
    super(client, {
      name: "meme",
      description: "Search for a meme off r/dankmemes",
      usage: "meme <tag>",
      aliases: ["meme"],
	  category: "Fun commands"
    });
  }
     

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
			exports.run = async (client, message, args) => {
			}
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/dankmemes/search.json?q='+(args)+'&sort=new'+'&restrict_sr=1')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('Be sure to add a search tag! If you have and you are still seeing this error, a connection error occurred.')
			.then(msg => {
			msg.delete(3000)
			});
        const randomnumber = Math.floor(Math.random() * allowed.length)
		console.log();
        const embed = new Discord.RichEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png")
        message.channel.send(embed)
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = meme;
