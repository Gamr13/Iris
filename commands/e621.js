const Discord = require("discord.js");
const client = new Discord.Client();
const Request = require("request");
const snekfetch = require('snekfetch');
var fs = require('fs');
const Command = require("../base/Command.js");

class e621 extends Command {
  constructor (client) {
    super(client, {
      name: "e621",
      description: "Grabs an image from e621 (Requires NSFW channel)",
      usage: "e621 <tag>",
      aliases: ["e621"],
	  category: "NSFW commands"
    });
  }

  async run (message, args, level) {
    try {
		
const lewd = [
`Ooooo~ Thats hot!`,
`Lewd!`,
`e621s finest~`,
`Spicy!`,
`Yum ;3`,
`Keep them cumming!`,
`nnf~`,
`Ohhhh yes~`,
`Hehe~`,
`Lewd~ ;3`,
`>//////<`,
`^////^`,
`I like this one! ^///^`,
`Mmmmf~`,
`Ohhh yeah, thats the stuff!`,
 ]
 
function randomval(Min, Max){
  return Math.floor( Math.random() * ( 1 + Max - Min ) ) + Min;
}

function EmbedSend(Str,Url,Mess){
  Mess.channel.send({embed:{
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    description: Str,
    image:{url: Url}
  }});
}

//E6 #####################################################################################
async function E621Lewd(Args,Mess){
    const BaseE6Url = "https://e621.net/post/index.json?&limit=15&tags=order:random+";
    var BaseTextUrl = BaseE6Url + Args.join("+");


    var Header = {
                        url: BaseTextUrl,
                        headers: {
                            'User-Agent': 'Iris by Toby on Discord'
                        }
                    }

    Request(Header,                               //Request Returns a JSON file
        async function(error,response,body){
            if (!error && response.statusCode == 200){
              var JsonParse = JSON.parse(body);
              var randomAdded = JsonParse[randomval(0,JsonParse.length-1)];
              var PURL = randomAdded.file_url;
              await EmbedSend(lewd[Math.floor(Math.random() * lewd.length)],PURL,Mess);
            } else {
                Mess.reply("Oopsie :3");
            }
          }
    );


function EmbedSend(Str,Url,Mess){
	    let embed = new Discord.RichEmbed()
		.setAuthor("e621","https://i.imgur.com/rRVy516.jpg")
		.setColor(3447003)
		.setImage(lewd[Math.floor(Math.random() * lewd.length)],PURL,Mess)
		.setFooter("©Toby#0621 2019", "https://i.imgur.com/dJb2tIq.png")
		message.channel.send({embed});
}


if (message.channel.nsfw === false) {
			return message.reply("⚠ Not an NSFW channel :c");
		}
		E621Lewd(args,message); 
		
		}
	}catch (e) {
      console.log(e);
    }
  }
}

module.exports = e621;
