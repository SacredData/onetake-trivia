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
    if (scoreboard instanceof Scoreboard) {
      this.scoreboard = scoreboard
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
