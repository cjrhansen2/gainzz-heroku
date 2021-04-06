const mongoose = require('mongoose');
require('mongoose-type-email');


const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
      username: {
        type: String,
        trim: true,
        
      },

      email: {
        type: mongoose.SchemaTypes.Email,
        trim: true,
      },

      password: {
        type: String,
        trim: true,
        required: true
      },

      date: {
        type: Date,
        default: Date.now(),
      },

      exercises: [
        {
          type: Schema.Types.ObjectId,
          ref: "Exercise"
        }
      ]
    });


const Gainzz = mongoose.model("User", userSchema);

module.exports = Gainzz;