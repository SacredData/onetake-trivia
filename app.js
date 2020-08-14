const Game = require('./game')
const Participant = require('./participant')
const { Choice, Question, Round } = require('./round')
const Scoreboard = require('./score')
const express = require('express')
const app = express()
const port = 3000

const player1 = new Participant({
  name: "Andrew Alexander Grathwohl",
  email: "andrew@grathwohl.me"
})
const player2 = new Participant({
  name: "Gil Jonathan Shur",
  email: "gilshur@gmail.com"
})

app.get('/', (req, res) => res.send(`${player1.name} and ${player2.name}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

