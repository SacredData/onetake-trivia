class Round {
  constructor(opts={}) {
    this.points = opts.points ? Number(opts.points) : 1

    if (opts.order) {
      this.order = opts.order
    }
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
  }
}

module.exports = { Question, Round }
