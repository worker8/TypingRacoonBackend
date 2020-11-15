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

import express from "express";
import path from "path";

const app = express();
// app.set("views", path.join(__dirname, "views"));

const port = 8080;

// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    res.json({"asdf": "hello world!"});
});

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
