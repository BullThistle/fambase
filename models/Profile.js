const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  event: [
    {
      what: {
        type: String,
        required: true
      },
      when: {
        type: Date,
        required: true
      },
      where: {
        type: String,
        required: true
      }
    }
  ],
  ask: {
    type: String
  },
  interests: {
    type: [string]
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
