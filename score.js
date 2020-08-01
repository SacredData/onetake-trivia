const Participant = require('./participant')

class Scoreboard {
  constructor(opts={}) {
    this.participants = []
    this.opts = opts
  }

  addParticipant(participant) {
    if (participant instanceof Participant) {
      this.participants.push(participant)
    } else {
      console.error('Only accepts participants of the Participant class')
    }
  }
}

module.exports = Scoreboard
