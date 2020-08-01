const { Question, Round } = require('./round')
const Participant = require('./participant')
const Scoreboard = require('./score')

class Game {
  constructor(opts={}) {
    this.scoreboard = null
    this.rounds = []

    this.opts = opts
  }

  attachScoreboard(scoreboard) {
    if (this.scoreboard === null && scoreboard instanceof Scoreboard) {
      this.scoreboard = scoreboard
    } else {
      console.error('scoreboard already attached')
    }
  }

  addRound(round) {
    if (round instanceof Array) {
      if (round.every(r => r instanceof Round)) {
        this.rounds.push(...round)
      }
    } else if (round instanceof Round) {
      this.rounds.push(round)
    }
  }
}

module.exports = Game
