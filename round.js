class Round {
  constructor(opts={}) {
    this.opts = opts
  }
}

class Question extends Round {
  constructor(opts={}) {
    super(opts)
    this.type = 'question'

    if (!opts.text || !opts.seconds) {
      throw new Error('opts.text and opts.seconds must be provided')
    }

    this.text = opts.text
    this.seconds = opts.seconds

    this.points = opts.points ? Number(opts.points) : 1
  }
}

module.exports = { Question, Round }
