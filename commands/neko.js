const Discord = require("discord.js");
const client = require('nekos.life');
const snekfetch = require('snekfetch');
const Command = require("../base/Command.js");
const {sfw} = new client();


class neko extends Command {
  constructor (client) {
    super(client, {
      name: "neko",
      description: "Get a cute Neko image :3",
      usage: "neko",
      aliases: ["neko"]
    });
  }

	async run (message, args, level) {
		try{
			await snekfetch.get('https://nekos.life/api/neko')
				.then(r => message.channel.send({
					embed: {
						author: {
						name: "Nekos!",
						icon_url: "https://i.imgur.com/rRVy516.jpg"
					},
						image: {
							url: r.body.neko
						}
					}
				}).catch(e => console.warn('wew tf happened here ' + e)));
		} catch (e) {
      console.log(e);
    }
	}
}

module.exports = neko;


