const Discord = require("discord.js");
const client = new Discord.Client();
const Command = require("../base/Command.js");
const GoogleImages = require('google-images');

class gimage extends Command {
  constructor (client) {
    super(client, {
      name: "gimage",
      description: "Search for an image off Google Images.",
      usage: "gimage <search tag>",
      aliases: ["gimage"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const client = new GoogleImages('011505958407223462517:mkbh568yhqw', 'AIzaSyAut7tzFU6ht-aDvzEIkNjzZaLRDN2_wnU');
	
	if(!args[0]){
			message.channel.send(":x: | You must search for something")
			.then(msg => {
			msg.delete(3000)
		})
		}
		
    var search = client.search(args.join(" ")).then(function(images) {
    let embed = new Discord.RichEmbed()
	.setAuthor("Google Image Search","https://www.iosicongallery.com/icons/google-2015-10-22/512.png")
	.setImage((images[Math.floor(Math.random() * images.length)].url))
	.setColor('#275BF0')
	.setFooter("©Toby#0621 2019", "https://i.imgur.com/dJb2tIq.png")
	message.channel.send({embed});
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = gimage;
