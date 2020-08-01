const { v4: uuidv4   } = require('uuid')

class Round {
  constructor(opts={}) {
    this.questions = []

    if (opts.order) {
      this.order = opts.order
    }
  }

  addQuestion(question) {
    if (question instanceof Array) {
      if (question.every(q => q instanceof Question)) {
        this.questions.push(...question)
      }
    } else if (question instanceof Question) {
      this.questions.push(question)
    }
  }
}

class Question {
  constructor(opts={}) {
    if (!opts.text || !opts.seconds) {
      throw new Error('opts.text and opts.seconds must be provided')
    }
    this.id = uuidv4()
    this.text = opts.text
    this.seconds = opts.seconds

    this.points = opts.points ? Number(opts.points) : 1

    if (opts.order) {
      this.order = Number(opts.order)
    }

  }
}

module.exports = { Question, Round }
