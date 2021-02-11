// const express = require('express')
// const app = express()
// const port = 3000
//
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
//
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

import express from "express"
import path from "path"
import cors from "cors"

class Race {
    author: string;
    quote: string;
    link: string;
    constructor(author: string, quote: string, link: string) {
        this.author = author
        this.quote = quote
        this.link = link
    }
}

let raceList = [
    new Race("Metal Gear Solid", "You mustn't allow yourself to be chained to fate, to be ruled by your genes. Human beings can choose the kind of life that they want to live. What's important is that you choose life... and then live.", "https://en.wikipedia.org/wiki/Metal_Gear"),
    new Race("Kevin Hart", "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it'll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.", "https://en.wikipedia.org/wiki/Kevin_Hart"),
    new Race("Always Remember Us This Way - Lady Gaga", "That Arizona sky, burning in your eyes. You look at me and babe, I wanna catch on fire. It's buried in my soul like California gold. You found the light in me that I couldn't find.", "https://www.youtube.com/watch?v=5vheNbQlsyU"),
    new Race("Caste: The Origins of Our Discontents", "Caste is the infrastructure of our divisions. It is the architecture of human hierarchy, the subconscious code of instructions for maintaining, in our case, a four hundred year old social order. Looking at caste is like holding the country's X-ray up to the light.", "https://www.goodreads.com/quotes/10404871-caste-is-the-infrastructure-of-our-divisions-it-is-the"),
    new Race("Spongebob Squarepants Theme Song", "Who lives in a pineapple under the sea? Spongebob Squarepants! Absorbent and yellow and porous is he? Spongebob Squarepants", "https://genius.com/Spongebob-squarepants-spongebob-squarepants-theme-song-lyrics"),
    new Race("Super Paper Mario", "You're looking for someone named Luvbi? Hey, sounds good to me! I'm loaded with free time! After all, my game's over!", "https://www.mariowiki.com/Super_Paper_Mario"),
    new Race("Dota2 - Tinker's Laser", "Fires an intense energy beam, dealing damage and blinding the target, causing it to miss all physical attacks.", "https://dota2.gamepedia.com/Tinker"),
    new Race("The Office", "I'll be the number two guy here in about six weeks. How? Name repetition, personality mirroring, and never breaking off a handshake. I am always thinking one step ahead, like a carpenter that makes stairs.", "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)"),
    new Race("The Office", "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.", "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)"),
    new Race("Norsemen", "Chief Olav and the viking warriors returns from their raid in the south and have found a map to a new world of wealth. They have brought with them treasures and slaves, one of which is a decadent and self-important actor with the name of Rufus.", "https://www.imdb.com/title/tt6101136/?ref_=ttep_ep1"),
    new Race("Norsemen", "All we can do is just follow the sun. Since the sun always points south, we just have to trust it.", "https://www.imdb.com/title/tt6101136/?ref_=ttep_ep1"),
    new Race("Norsemen", "Where's that miserable slave who's responsible for my fireplace? It's freezing in here. I like it more temperate.", "https://www.imdb.com/title/tt6101136/?ref_=ttep_ep1"),
    new Race("Norsemen", "You know, I dig you. I always have and always will and I admire you for what you have accomplished. So I thought I'd challenge you to holmgang.", "https://www.imdb.com/title/tt6101136/?ref_=ttep_ep1"),
    new Race("Norsemen", "We've come so far technologically that we no longer know how anything works. Everyone sends ravens, but no one knows how it really works. If all the technology suddenly disappeared, we'd be pretty much left high and dry.", "https://www.imdb.com/title/tt6101136/?ref_=ttep_ep1"),
    new Race("Paper Mario", "Mario and Luigi, I would be honored if you both could attend. Many guests from distant towns are hoping to meet you. There will be tasty sweets and all kinds of entertainment!", "https://en.wikipedia.org/wiki/Paper_Mario"),
    new Race("Paper Mario", "Good old Mario, always fighting. You're a thorn in my side. But today, your pathetic little attacks won't beat me!", "https://en.wikipedia.org/wiki/Paper_Mario"),
    new Race("Paper Mario", "This red shirt, this hat, and this mustache... You know, this really looks like the one and only Mario! It couldn't be. Could it? The real Mario?", "https://en.wikipedia.org/wiki/Paper_Mario"),
    new Race("Paper Mario", "People say that there's a big, dangerous creature living deep inside that pipe over there. But when people tell you not to go in, it kind of makes you want to even more!", "https://en.wikipedia.org/wiki/Paper_Mario"),
    new Race("Good Will Hunting", "You'll never have that kind of relationship in a world where you're afraid to take the first step because all you see is every negative thing ten miles down the road.", "https://en.wikipedia.org/wiki/Good_Will_Hunting"),
    new Race("Teach the Short Words First", "Your bed is with you in the void. But not for long - it goes away from you. You don't have any way to get it back, so you just let it go. But so now we have a body in the void with you. So does the bed move, or do you move? Or both?", "https://www.amazon.com/s?k=097617300X&camp=1789&creative=9325&linkCode=ur2&tag=typeracer-20"),
    new Race("Clockwork Angel", "Whatever you are physically, male or female, strong or weak, ill or healthy, all those things matter less than what your heart contains. If you have the soul of a warrior, you are a warrior. Whatever the color, the shape, the design of the shade that conceals it, the flame inside the lamp remains the same. You are that flame.", "https://www.amazon.com/gp/search?ie=UTF8&keywords=1481456024&tag=typeracer-20&index=blended&linkCode=ur2&camp=1789&creative=9325"),
    new Race("In Search of Lost Time", "My mother had to abandon her quest, but managed to extract from the restriction itself a further delicate thought, like good poets whom the tyranny of rhyme forces into the discovery of their finest lines.", "https://www.amazon.com/gp/search?ie=UTF8&keywords=0375751548&tag=typeracer-20&index=blended&linkCode=ur2&camp=1789&creative=9325"),
    new Race("Serial Lain Experiments", "History is not merely a linear collection of points that we pass through on a timeline. They are connected by a line. No, perhaps it is more accurate to say that they are made to connect.", "https://www.amazon.com/gp/search?ie=UTF8&keywords=B00005NX1N&tag=typeracer-20&index=blended&linkCode=ur2&camp=1789&creative=9325"),
    new Race("A Random Walk Down Wall Street", "In another experiment involving students, respondents were asked about likely future outcomes for themselves and their roommates. They typically had very rosy views about their own futures, which they imagined to include successful careers, happy marriages, and good health. When asked to speculate about their roommates' futures, however, their responses were far more realistic.", "https://www.goodreads.com/book/show/40242274-a-random-walk-down-wall-street"),
    new Race("Game of Thrones", "Alright, how about the fact that this is actually happening? You have your armies, you have your ships, you have your dragons... Everything you ever wanted, since you were old enough to want anything. It's all yours for the taking. Are you afraid? Good. You're in the Great Game now, and the Great Game is terrifying. The only people who aren't afraid of failure are madmen like your father.", "https://en.wikipedia.org/wiki/Game_of_Thrones"),
    new Race("Dr Seuss", "You’re off to great places, today is your day. Your mountain is waiting, so get on your way.", "https://en.wikipedia.org/wiki/Dr._Seuss")
    // new Race("", "", ""),
]
const app = express();


app.use(cors())
// app.set("views", path.join(__dirname, "views"));

const port = 4500;

// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    console.log(req)
    let race = raceList[Math.floor(Math.random() * raceList.length)]
    res.json({ "author": race.author, "quote": race.quote, "link": race.link });
});

// start the express server
app.listen(process.env.PORT || port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});


