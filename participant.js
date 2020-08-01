const { v4: uuidv4  } = require('uuid')

class Participant {
  constructor(opts) {
    if (!opts.name || !opts.email) {
      return new Error('opts must include name and email')
    }

    this.name = opts.name
    this.email = opts.email

    this.id = uuidv4()
  }
}

module.exports = Participant
