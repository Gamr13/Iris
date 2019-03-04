const Discord = require("discord.js");
const Command = require("../base/Command.js");

class kiss extends Command {
  constructor (client) {
    super(client, {
      name: "kiss",
      description: "Give someone a kiss.",
      usage: "kiss @user",
      aliases: ["kiss"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const kiss = [
'https://i.imgur.com/Es7DO7n.gif',
'https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif',
'https://i.imgur.com/eisk88U.gif',
'https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif',
'https://media.giphy.com/media/kU586ictpGb0Q/giphy.gif',
'https://i.imgur.com/IME6PlH.gif',
'https://media.tenor.com/images/78aaf08e4cb6174a5d3a0d2826c43953/tenor.gif',
'https://78.media.tumblr.com/0aa35a454f83601e8804540a9c9f2db0/tumblr_nic15c3do01r3rdh2o1_500.gif',
'https://thumbs.gfycat.com/FondEvergreenIcterinewarbler-max-1mb.gif',
'https://i.kym-cdn.com/photos/images/original/000/795/067/995.gif',
'http://i.myniceprofile.com/1502/150291.gif',
'http://78.media.tumblr.com/d321dda60769b306472f9879e1d48ff9/tumblr_n1tzw7YFsE1rr1hwfo1_500.gif',
'http://gifimage.net/wp-content/uploads/2017/09/anime-gif-kiss-12.gif',
'https://i.imgur.com/9y34cfo.gif',
'https://78.media.tumblr.com/c3e8446e4e9dba8b584aa15b95724d37/tumblr_inline_oydei8pQZw1tytizd_540.gif',
'https://thumbs.gfycat.com/WarpedSlightFrigatebird-size_restricted.gif',
'https://data.whicdn.com/images/227622044/original.gif',
'https://lifeo.ru/wp-content/uploads/gif-anime-kisses-23.gif',
'http://78.media.tumblr.com/ea431c278ccd1ae3d1041709a4943b64/tumblr_mpqhwgauaS1swflh7o1_500.gif',
'https://i.pinimg.com/originals/56/0b/b3/560bb37b1596f48d93a76db4f87dc2f9.gif',
'https://media.tenor.com/images/197df534507bd229ba790e8e1b5f63dc/tenor.gif',
'https://i.imgur.com/eisk88U.gif',
'http://i.myniceprofile.com/1486/148638.gif',
'https://i.pinimg.com/originals/8f/8c/ab/8f8cab61ce195cd31f1811e94d0b0f6c.gif',
'http://78.media.tumblr.com/9b19dfffef79197fc6bddf21ff576a2b/tumblr_mz7j4o7n6v1sy03uso1_500.gif',
'https://i.imgur.com/fX0lVp7.gif',
'https://media1.tenor.com/images/5c712c9fc3f17b1735a36b8ec65996ba/tenor.gif?itemid=12535181',
'https://media.giphy.com/media/v4JbTGe4KJjKo/giphy.gif',
'https://media.giphy.com/media/NMsoBSWrfVXs4/giphy.gif',
'https://orig00.deviantart.net/a660/f/2012/327/c/8/usuk_kiss_by_kavathewolfie9149-d5lz2gg.gif',
'https://i.gifer.com/RKI.gif',
'http://i.imgur.com/oZeeahx.gif',
'https://media.tenor.com/images/92596e40f02f69a215a554821482a177/tenor.gif',
'https://media1.tenor.com/images/2b39e853916e31ff1d7aad7f359b0774/tenor.gif',
'https://i.gifer.com/6CP1.gif',
'https://media1.tenor.com/images/a14faff7867c7c78c80ba2d0f885390d/tenor.gif',
'https://thumbs.gfycat.com/DecisiveHelplessJohndory-small.gif',
'https://thumbs.gfycat.com/SparseForthrightAdamsstaghornedbeetle-max-1mb.gif',
]

function isSelfTest () {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(member.user === message.author )  return true;
    return false;
  };
  
  
let member = message.mentions.members.first() || message.guild.members.get(args[0]);
   if(!member)
   return message.channel.send("You should pick someone you'd like to kiss.")
		.then(msg => {
			msg.delete(3000)
		});
   if(isSelfTest()) return message.channel.send("*You tried to kiss yourself...But it didn't work.*")
 const kissmsg = [
`${message.author} held ${member} close and passionately kissed them~`,
`${member}, you just got kissed by ${message.author}!`,
`${message.author} kissed ${member}!`,
]

		let embed = new Discord.RichEmbed()
		.setAuthor("Kiss","https://i.imgur.com/rRVy516.jpg")
		.setDescription((kissmsg[Math.floor(Math.random() *kissmsg.length)]))
		.setColor('#FF79F2')
		.setImage((kiss[Math.floor(Math.random() * kiss.length)]))
		.setFooter("©Toby#0621 2019", "https://i.imgur.com/dJb2tIq.png")
		message.channel.send({embed});	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = kiss;
