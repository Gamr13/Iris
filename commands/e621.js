const Discord = require("discord.js");
const client = new Discord.Client();
const Request = require("request");
const snekfetch = require('snekfetch');
const Command = require("../base/Command.js");

class e621 extends Command {
  constructor (client) {
    super(client, {
      name: "e621",
      description: "e621 test",
      usage: "e621 <tag>",
      aliases: ["e621"],
    });
  }
  
  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {

const lewd = [
'Ooooo~ Thats hot!',
'Lewd!',
'e621s finest~',
'Spicy!',
'Yum ;3',
'Keep them cumming!',
'nnf~',
'Ohhhh yes~',
'Hehe~',
'Lewd~ ;3',
'>//////<',
'^////^',
'I like this one! ^///^',
'Mmmmf~',
'Ohhh yeah, thats the stuff!',
 ]

 function randomval(Min, Max){
  return Math.floor( Math.random() * ( 1 + Max - Min ) ) + Min;
}

function EmbedSend(Str,Url,Mess){
  Mess.channel.send({embed:{
    color: 3447003,
    author: {
      name: "Iris",
      icon_url: "https://i.imgur.com/rRVy516.jpg"
    },
	footer: {
          icon_url: "https://i.imgur.com/dJb2tIq.png",
          text: "©Toby#7938 2019"
        },
    description: Str,
    image:{url: Url}
  }});
}

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
}
	   if (message.channel.nsfw === false) {
			return message.reply("⚠ Not an NSFW channel :c");
		}
    E621Lewd(args,message); 
 
     } catch (e) {
      console.log(e);
    }
  }
}

module.exports = e621;
