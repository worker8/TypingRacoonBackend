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
    new Race("Spongebob Squarepants Theme Song", "Who lives in a pinneapple under the sea? Spongebob Squarepants! Absorbent and yellow and porous is he? Spongebob Squarepants", "https://genius.com/Spongebob-squarepants-spongebob-squarepants-theme-song-lyrics"),
    new Race("Super Paper Mario", "You're looking for someone named Luvbi? Hey, sounds good to me! I'm loaded with free time! After all, my game's over!", "https://www.mariowiki.com/Super_Paper_Mario"),
    new Race("Dota2 - Tinker's Laser", "Fires an intense energy beam, dealing damage and blinding the target, causing it to miss all physical attacks.", "https://dota2.gamepedia.com/Tinker"),
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
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
