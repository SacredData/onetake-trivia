class Round {
  constructor(opts={}) {
    this.opts = opts
  }
}

class Question extends Round {
  constructor(opts={}) {
    super(opts)
    this.type = 'question'
  }
}

module.exports = { Question, Round }
