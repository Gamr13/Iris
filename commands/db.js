const Discord = require("discord.js");
const Command = require("../base/Command.js");

class db extends Command {
  constructor (client) {
    super(client, {
      name: "db",
      description: "Posts dad jokes.",
      usage: "db",
      aliases: ["db"],
	  category: "Fun commands"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const dadbot = [
  "I'm furryious!",
  "I forgot how to throw a boomerang, then it came back to me.",
  "I got hit with a soda cam, I'm glad it was a soft drink.",
  "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
  "What do you call a fake noodle? An Impasta.",
  "How many apples grow on a tree? All of them.",
  "Want to hear a joke about paper? Nevermind it's tearable.",
  "I just watched a program about beavers. It was the best dam program I've ever seen.",
  "Why did the coffee file a police report? It got mugged.",
  "How does a penguin build it's house? Igloos it together.",
  "Dad, did you get a haircut? No I got them all cut.",
  "What do you call a Mexican who has lost his car? Carlos.",
  "Dad, can you put my shoes on? No, I don't think they'll fit me.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why don't skeletons ever go trick or treating? Because they have no body to go with.",
  "Ill call you later. Don't call me later, call me Iris.",
  "What do you call an elephant that doesn't matter? An irrelephant",
  "Want to hear a joke about construction? I'm still working on it.",
  "What do you call cheese that isn't yours? Nacho Cheese.",
  "Why couldn't the bicycle stand up by itself? It was two tired.",
  "What did the grape do when he got stepped on? He let out a little wine.",
  "I wouldn't buy anything with velcro. It's a total rip-off.",
  "The shovel was a ground-breaking invention.",
  "Dad, can you put the cat out? I didn't know it was on fire.",
  "5/4 of people admit that they’re bad with fractions.",
  "What do you call a man with a rubber toe? Roberto.",
  "What do you call a fat psychic? A four-chin teller.",
  "I would avoid the sushi if I was you. It’s a little fishy.",
  "The rotation of earth really makes my day.",
  "I thought about going on an all-almond diet. But that's just nuts",
  "I’ve never gone to a gun range before. I decided to give it a shot!",
  "Why do you never see elephants hiding in trees? Because they're so good at it.",
  "A furniture store keeps calling me. All I wanted was one night stand.",
  "I used to work in a shoe recycling shop. It was sole destroying.",
  "Why are graveyards noisy? Because of all the coffin!",
  "What's a ghost's favorite pasta? Spookgetti.",
  "What do you call a fat pumpkin? A plumpkin.",
  "What room does a ghost not need? A living room!",
  "What kind of dessert does a ghost like? I scream!",
  "What is a ghost's favorite liquor? Mali-boo.",
  "Do you know how to make a witch itch? You take away the w!",
  "Knock, knock. Who's there? Adore. Adore who? Adore is between us. Open up!",
  "I used to think I was indecisive, but now I'm not too sure.",
  "Doing nothing is hard, you never know when you're done.",
  "If two wrongs don't make a right, try three.",
  "I am not lazy, I am on energy saving mode.",
  "A balanced diet means a cupcake in each hand.",
  "Maybe you should eat some makeup so you can be pretty on the inside too.",
  "Sorry for the mean, awful, accurate things I said.",
  "People say nothing is impossible, but I do nothing every day.",
  "An apple a day keeps anyone away if you throw it hard enough.",
  "The more you weight the harder you are to kidnap. Stay safe, eat cake.",
  "I am on a seafood diet. I see food, and I eat it.",
  "Alcohol! Because no great story started with someone eating a salad.",
  "I don't need a hair stylist, my pillow gives me a new hairstyle every morning.",
  "Don't worry if plan A fails, there are 25 more letters in the alphabet.",
  "If I'm not back in five minutes, just wait longer...",
  "If you’re not supposed to eat at night, why is there a light bulb in the refrigerator?",
  "Don’t drink while driving – you might spill the beer.",
  "I think the worst time to have a heart attack is during a game of charades.",
  "My wallet is like an onion. When I open it, it makes me cry...",
  "I'm not clumsy, The floor just hates me, the table and chairs are bullies and the walls get in my way.",
  "I don’t suffer from insanity, I enjoy every minute of it.",
  "I get enough exercise pushing my luck.",
  "God created the world, everything else is made in China.",
  "When life gives you melons, you might be dyslexic.",
  "Don't you wish they made a clap on clap off device for some peoples mouths?",
  "If your parents never had children, chances are you won't either.",
  "If people are talking behind your back, then just fart.",
  "Can I watch the TV? Dad: Yes, but don’t turn it on.",
  "You know, people say they pick their nose, but I feel like I was just born with mine.",
  "What did the mountain climber name his son? Cliff.",
  "This graveyard looks overcrowded. People must be dying to get in there.",
  "What’s Forrest Gump’s password? 1forrest1",
  "The only thing worse than having diarrhea is having to spell it.",
  "I asked my friend to help me with a math problem. He said: “Don’t worry; this is a piece of cake.” I said: “No, it’s a math problem.”",
  "I keep trying to lose weight, but it keeps finding me.",
  "I don’t play soccer because I enjoy the sport. I’m just doing it for kicks.",
  "What time did the man go to the dentist? Tooth hurt-y",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Want to hear a joke about a piece of paper? Never mind... it's tearable.",
  "I just watched a documentary about beavers. It was the best dam show I ever saw!",
  "If you see a robbery at an Apple Store does that make you an iWitness?",
  "Spring is here! I got so excited I wet my plants!",  
  "A ham sandwich walks into a bar and orders a beer. The bartender says, \"Sorry we don’t serve food here.\"",
  "What’s Forrest Gump’s password? 1forrest1",   
  "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
  "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans!",
  "What do you call a factory that sells passable products? A satisfactory.",
  "A termite walks into a bar and asks, \"Is the bar tender here?\"",
  "When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!",
    "Two peanuts were walking down the street. One was a salted.",
    "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
    "I used to have a job at a calendar factory but I got the sack because I took a couple of days off.",
    "How do you make holy water? You boil the hell out of it.",
    "A three-legged dog walks into a bar and says to the bartender, \"I’m looking for the man who shot my paw.\"",
    "When you ask a dad if he's alright: \"No, I’m half left.\"",
    "I had a dream that I was a muffler last night. I woke up exhausted!",
    "How do you tell the difference between a frog and a horny toad? A frog says, \"Ribbit, ribbit\" and a horny toad says, \"Rub it, rub it.\"",
    "Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.",
    "5/4 of people admit that they’re bad with fractions.",
    "MOM: \"How do I look?\" DAD: \"With your eyes.\"",
    "What is Beethoven’s favorite fruit? A ba-na-na-na.",
    "What did the horse say after it tripped? \"Help! I’ve fallen and I can’t giddyup!\”",
    "Did you hear about the circus fire? It was in tents!",
    "Don't trust atoms. They make up everything!",
    "What do you get when you cross an elephant with a rhino? Elephino.",
    "How many tickles does it take to make an octopus laugh? Ten-tickles.",
    "What's the best part about living in Switzerland? I don't know, but the flag is a big plus.",
    "What do prisoners use to call each other? Cell phones.",
    "Why couldn't the bike standup by itself? It was two tired.",
    "What do you call a dog that can do magic? A Labracadabrador.",
    "Why didn't the vampire attack Taylor Swift? She had bad blood.",
    "NURSE: \"Blood type?\" DAD: \"Red.\"",
    "SERVER: \"Sorry about your wait.\" DAD: \"Are you saying I’m fat?\”",
    "What do you call a fish with two knees? A “two-knee” fish.",
    "I was interrogated over the theft of a cheese toastie. Man, they really grilled me.",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "Can February March? No, but April May!",
    "When you ask a dad if they got a haircut: \"No, I got them all cut!\"",
    "What does a zombie vegetarian eat? “GRRRAAAAAIIIINNNNS!”",
    "What does an angry pepper do? It gets jalapeño your face.",
    "Why wasn't the woman happy with the velcro she bought? It was a total ripoff.",
    "What did the buffalo say to his son when he dropped him off at school? Bison.",
    "What do you call someone with no body and no nose? Nobody knows.",
    "Where did the college-aged vampire like to shop? Forever 21.",
    "You heard of that new band 1023MB? They're good but they haven't got a gig yet.",
    "Why did the crab never share? Because he's shellfish.",
	"The shovel was a ground-breaking invention.",
	"I wouldn’t buy anything with velcro. It’s a total rip-off.",
	"What do you call cheese that isn’t yours? Nacho Cheese.",
	"Why couldn’t the bicycle stand up by itself? It was two tired.",
	"My wife is so negative. I remembered the car seat, the stroller, AND the diaper bag. Yet all she can talk about is how I forgot the baby.",
	"Want to hear a joke about construction? I’m still working on it.",
	"What do you call an elephant that doesn’t matter? An irrelephant",
	"I’ll call you later. Don’t call me later, call me Dad.",
	"Why don’t skeletons ever go trick or treating? Because they have no body to go with.",
	"Why did the scarecrow win an award? Because he was outstanding in his field.",
	"Dad, did you get a haircut? No, I got them all cut.",
	"How does a penguin build its house? Igloos it together.",
	"Why did the coffee file a police report? It got mugged.",
	"I just watched a program about beavers. It was the best dam program I’ve ever seen.",
	"Want to hear a joke about paper? Nevermind it’s tearable.",
	"How many apples grow on a tree?  - All of them.",
	"What do you call a fake noodle? - An Impasta.",
	"Today, my son asked 'Can I have a book mark?' and I burst into tears. 11 years old and he still doesn't know my name is Brian.",
	"My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right.",
	"How do you make holy water? You boil the hell out of it.",
	"I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
	"Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.",
	"If a child refuses to sleep during nap time, are they guilty of resisting a rest?",
	"I'm reading a book about anti-gravity. It's impossible to put down!",
	"What do you call someone with no body and no nose? Nobody knows.",
	"What is the least spoken language in the world? - Sign language",
	"A slice of apple pie is $2.50 in Jamaica and $3.00 in the Bahamas. These are the pie rates of the Caribbean.",
	"When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!",
]
	  
	  
    let embed = new Discord.RichEmbed()
	.setAuthor("Dadbot","https://i.imgur.com/rRVy516.jpg")
	.setThumbnail("https://i.imgur.com/z5aeIbO.jpg")
	.setDescription((dadbot[Math.floor(Math.random() *dadbot.length)]))
	.setColor('#275BF0')
	.setFooter("©Toby#7938 2019", "https://i.imgur.com/dJb2tIq.png")
	message.channel.send({embed});
	  
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = db;
