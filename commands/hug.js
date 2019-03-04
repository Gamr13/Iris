const Discord = require("discord.js");
const Command = require("../base/Command.js");

class hug extends Command {
  constructor (client) {
    super(client, {
      name: "hug",
      description: "Give someone a hug.",
      usage: "hug @user",
      aliases: ["hug"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const hug = [
'https://media.giphy.com/media/CZpro4AZHs436/giphy.gif',
'https://media.giphy.com/media/16bJmyPvRbCDu/giphy.gif',
'https://media.giphy.com/media/VGACXbkf0AeGs/giphy.gif',
'https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif',
'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
'https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif',
'https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif',
'https://i.imgur.com/r9aU2xv.gif',
'https://i.imgur.com/wOmoeF8.gif',
'https://i.imgur.com/ntqYLGl.gif',
'https://i.imgur.com/6qYOUQF.gif',
'http://33.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif',
'http://37.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif',
'https://i.pinimg.com/originals/87/b5/50/87b55088247f99d5766ef6179ecdcceb.gif',
'https://i.imgur.com/7kfRAdG.gif',
'https://i.imgur.com/EKSOHCc.gif',
'https://media.giphy.com/media/ruasoCYeyKm2Y/giphy.gif',
'https://i.imgur.com/hV8Zybf.gif',
'https://i.imgur.com/hFeV5bJ.gif',
'https://2.bp.blogspot.com/-XPqck-C979s/V-QbRIOoqbI/AAAAAAAADzM/seUBJKyKCiQ5W2kScB627WjcKU5Pq1VKwCLcB/s1600/chuunibyou.gif',
'https://img.fireden.net/a/image/1472/47/1472477350963.gif',
'https://pa1.narvii.com/5579/8e2897f0253d23898ca688c48d1fd219ba0c19d1_hq.gif',
'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif',
'http://animuverse.com/wp-content/uploads/2016/11/4.gif',
'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460988091-6e86cd666a30fcc1128c585c82a20cdd.gif',
'https://data.whicdn.com/images/203117037/original.gif',
'https://media.tenor.com/images/2e1d34d002d73459b6119d57e6a795d6/tenor.gif',
'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif',
'https://78.media.tumblr.com/5dfb67d0a674fe5f81950478f5b2d4ed/tumblr_ofd4e2h8O81ub9qlao1_500.gif',
'https://thumbs.gfycat.com/RevolvingWigglyDikkops-size_restricted.gif',
'http://4.bp.blogspot.com/-Fdg19FrVxdk/Uq8PBBQunoI/AAAAAAAAATc/Mp2s3hGOHmo/s320/Nyan+koi+3.gif',
'https://i.gifer.com/8VnY.gif',
'https://gifer.com/i/WDf.gif',
'https://78.media.tumblr.com/897828f4e3dc62bc36ce0a75b4139c86/tumblr_oznlywQgzu1uidpplo1_500.gif',
'http://images6.fanpop.com/image/photos/35200000/hugs-mushy-and-deni-35240276-300-157.gif',
'https://78.media.tumblr.com/a26fdd97b6e83efd650ef6f95df570d5/tumblr_otesasJwMg1vk9ywzo1_500.gif',
'http://31.media.tumblr.com/be2c6b41147f4ba420decd5997b0d298/tumblr_ngqxlfCivi1te3h29o2_250.gif',
'https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif',
'https://media.tenor.com/images/708276a6666cbe55f9583b8c1dcdc67b/tenor.gif',
'https://media.tenor.com/images/cb9bffb9b0e88808fa156f2432233aa7/tenor.gif',
'https://i.pinimg.com/originals/4a/69/a6/4a69a63537f2d722297a6d7e878e54ef.gif',
'https://media.giphy.com/media/2GnS81AihShS8/giphy.gif',
'https://media.giphy.com/media/3oEhmDMA4r9GxhwEqA/giphy.gif',
'https://media.giphy.com/media/8KKRIP5ZHUo2k/giphy.gif',
'https://thumbs.gfycat.com/AlienatedUnawareArcherfish-size_restricted.gif',
'https://media0.giphy.com/media/llmZp6fCVb4ju/giphy.gif',
'https://media.giphy.com/media/xUA7b9DsGUES94yInK/giphy.gif',
'https://media.giphy.com/media/aHOY4460FDyvu/giphy.gif',
'https://media1.tenor.com/images/3835b45b4bdc78d83f8881c5d1edd453/tenor.gif',
'https://media0.giphy.com/media/nFL0SBciehEw8/giphy.gif',
'https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif',
'https://media1.tenor.com/images/5adbdbf9f635a18af29373bd6b7ff797/tenor.gif',
'https://media.tenor.com/images/708276a6666cbe55f9583b8c1dcdc67b/tenor.gif',
'https://media1.tenor.com/images/4517af9acc82e9ac33e616953093321e/tenor.gif',
]

function isSelfTest () {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(member.user === message.author )  return true;
    return false;
  };
  
  
const selfhug = [
'*You wrapped your arms around yourself and felt warm.*',
'*A rush of warmth spread around your body as you wrapped your arms around yourself.*',
"*You hug yourself in public, everyone looks at you like you're an oddball, but you don't care.*",
]


let member = message.mentions.members.first() || message.guild.members.get(args[0]);
   if(!member)
   return message.channel.send("You should pick someone you'd like to hug.")
		.then(msg => {
			msg.delete(3000)
		});
   if(isSelfTest()) return message.channel.send(
	selfhug[Math.floor(Math.random() * selfhug.length)]
   )

const hugmsg = [
`${message.author} gave ${member} a soft warm hug.`,
`${member} got a warm hug from ${message.author}.`,
`${message.author} wrapped their arms around ${member} and hugged them softly.`,
]

		let embed = new Discord.RichEmbed()
		.setAuthor("Hug","https://i.imgur.com/rRVy516.jpg")
		.setDescription((hugmsg[Math.floor(Math.random() *hugmsg.length)]))
		.setImage((hug[Math.floor(Math.random() * hug.length)]))
		.setColor('#DA30C3')
		.setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png")
		message.channel.send({embed});
  } catch (e) {
      console.log(e);
    }
  }
}

module.exports = hug;
