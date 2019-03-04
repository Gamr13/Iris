const Discord = require("discord.js");
const Command = require("../base/Command.js");

class fight extends Command {
  constructor (client) {
    super(client, {
      name: "fight",
      description: "Fight someone.",
      usage: "fight @user",
      aliases: ["fight"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const fight = [
'http://24.media.tumblr.com/9821bab5ab8a95a24517c6fc228470ff/tumblr_n0k06kso3a1sidcjgo1_400.gif',
'https://i.imgur.com/UkFc25O.gif',
'http://25.media.tumblr.com/tumblr_m397i22zhi1qbtlzqo1_500.gif',
'https://pa1.narvii.com/6547/a533a8bbb3629bb3f5f5f9dabad4e01f67d7b5e7_hq.gif',
'https://78.media.tumblr.com/6a307225bd77902f6eddda4f826397a8/tumblr_ovx9w2vWRR1v1hotuo1_500.gif',
'https://thumbs.gfycat.com/FakeUnrulyJavalina-small.gif',
'https://78.media.tumblr.com/e52837285c2eeb3c81e3d8fe331275d2/tumblr_nt5ah8u6DN1t89rpeo2_500.gif',
'https://thumbs.gfycat.com/OnlyColossalEmperorshrimp-size_restricted.gif',
'https://thumbs.gfycat.com/LimpHealthyBeagle-size_restricted.gif',
'https://steemitimages.com/0x0/https://i.imgur.com/Fi6JyhL.gif',
'https://i.imgur.com/oOvKuV0.gif',
'https://78.media.tumblr.com/e30ab84080c5f9c76f13870e02682e5e/tumblr_n50ts0iDnW1r72ht7o1_r1_500.gif',
'https://78.media.tumblr.com/352cce80a8eec8fbb1dae289f877290e/tumblr_oxqqdmptgk1wsag5bo1_500.gif',
'https://78.media.tumblr.com/b6b79303c78a46f0720513c14f36bdef/tumblr_owd5rb2wv41u16zhzo1_500.gif',
'https://i.imgur.com/XPEfEZL.gif',
'https://media1.tenor.com/images/de289d8f02fc810eb1389aca8df6a417/tenor.gif',
'https://media1.tenor.com/images/c2c0bfb2b48e1dd32dae803ec4e5f17c/tenor.gif',
'https://pa1.narvii.com/6352/07855762fdc66abdd5ba1525a0e42f7eb3cd4e5a_hq.gif',
'https://i.imgur.com/O5n2iWK.gif',
'https://i.imgur.com/s7AMU2W.gif',
'https://i.imgur.com/or7WXXu.gif',
'https://78.media.tumblr.com/93e7a84cf719942996b5b61fb0a088d6/tumblr_oydvbwAlEg1vk041eo1_500.gif',
'https://78.media.tumblr.com/e7342896545dce3fe67137d35a1a1505/tumblr_npk0vvnC3R1qla6lro1_500.gif',
'https://media1.tenor.com/images/a79aa16c28e2c1f7abf80b1fcd01c141/tenor.gif?itemid=5607569',
'https://78.media.tumblr.com/e9bd8cb854546720801fa52e60b46a81/tumblr_n6ludzrhwp1ts6slio2_400.gif',
'https://lh3.googleusercontent.com/-E2-usIAI1ks/VmCKKCKxVWI/AAAAAAAADgk/QZ-u4I5Opwg/w398-h224/14%2B-%2B1.gif',
'https://78.media.tumblr.com/32af69a376db63b303dae707b7658673/tumblr_nv69zdScPG1tqgjq4o2_400.gif',
'https://media.giphy.com/media/ascBQNdvCgUyA/giphy.gif',
'http://66.media.tumblr.com/c666a916a16d9f908cb6abb9ff793e7a/tumblr_n17t57gTJl1s3l5dvo1_500.gif',
'http://66.media.tumblr.com/a538e41c5602be6213ca3bc256120448/tumblr_ncom4945nT1rsgx6xo1_r6_500.gif',
'http://66.media.tumblr.com/fd100e4e22a50aabe0eaa3e77593b2a3/tumblr_n3y7pw5T4K1twogw2o3_500.gif',
]
	  
	  function isSelfTest () {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(member.user === message.author )  return true;
    return false;
  };
  
  
	  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
   if(!member)
   return message.channel.send("You should pick someone you'd like to fight.")
		.then(msg => {
			msg.delete(3000)
		})
   if(isSelfTest()) return message.channel.send("*You tried to clone yourself to fight it...But nothing happened...*")
		const fightmsg =[
		`${message.author} got into a battle stance and fought with ${member}`,
		`${message.author} picked a fight with ${member}`,
		`${member} got in a fight with ${message.author}`,
		]

		let embed = new Discord.RichEmbed()
		.setAuthor("Fight","https://i.imgur.com/rRVy516.jpg")
		.setDescription((fightmsg[Math.floor(Math.random() *fightmsg.length)]))
		.setImage((fight[Math.floor(Math.random() * fight.length)]))
		.setColor('#FF3300')
		.setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png")
		message.channel.send({embed})
		
  } catch (e) {
    console.log(e);
    }
  }
}

module.exports = fight;
