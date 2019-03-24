const Discord = require("discord.js");
const client = require('nekos.life');
const snekfetch = require('snekfetch');
const Command = require("../base/Command.js");
const {nsfw} = new client();


class nsfwneko extends Command {
  constructor (client) {
    super(client, {
      name: "nsfwneko",
      description: "Get a lewd Neko image >///<",
      usage: "nsfwneko",
      aliases: ["nsfwneko"]
    });
  }

	async run (message, args, level) {
		try{
			if (message.channel.nsfw) {
			await snekfetch.get('https://nekos.life/api/lewd/neko')
				.then(r => message.channel.send({
					embed: {
						color: 3447003,
						author: {
							name: "Lewd Nekos >///<",
							icon_url: "https://i.imgur.com/rRVy516.jpg"
						},
						image: {
							url: r.body.neko
						}
					}
				}).catch(e => console.warn('Error: ' + e)));

			} else {
		await message.channel.send("⚠ Not an NSFW channel :c")
			}	
		
		}catch (e) {
      console.log(e);
		}
	}
}

module.exports = nsfwneko;


