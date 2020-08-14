const { v4: uuidv4 } = require('uuid')

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

    this.choices = {
      correct: null,
      incorrect: []
    }
    this.id = uuidv4()
    this.text = opts.text
    this.seconds = opts.seconds

    this.points = opts.points ? Number(opts.points) : 1

    if (opts.order) {
      this.order = Number(opts.order)
    }

    if (opts.choices.correct) {
      this.choices.correct = opts.choices.correct
    }

    if (opts.choices.incorrect) {
      if (opts.choices.incorrect instanceof Array) {
        this.choices.incorrect.push(...opts.choices.incorrect)
      } else {
        this.choices.incorrect.push(opts.choices.incorrect)
      }
    }
  }
  addChoice(choice) {
    if (choice.usable) {
      if (choice.correct) {
        this.choices.correct = choice
      } else if (choice.incorrect) {
          this.choices.incorrect.push(choice)
      } else {
        throw new Error('choice.correct or choice.incorrect must be true')
      }
    } else {
      throw new Error('Choice must be usable before it can be added')
    }
  }
}

class Choice {
  constructor(opts={}) {
    this.correct = null
    this.incorrect = null
    this.text = null

    if (opts.text) {
      this.text = opts.text
    }

    if (opts.correct) {
      this.correct = true
      this.incorrect = false
    } else if (opts.incorrect) {
      this.correct = false
      this.incorrect = true
    }
  }
  get usable() {
    return (
      (this.text !== null && typeof(this.text) === 'string') && (
        (this.correct && this.incorrect == false) ||
        (this.incorrect && this.correct == false)
      )
    )
  }
}

module.exports = { Choice, Question, Round }
