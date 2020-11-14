const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
  {
    foodQuality: {
      score: {
        type: Number,
        min: 1,
        max: 5
      }
    },
    placeCleanliness: {
      score: {
        type: Number,
        min: 1,
        max: 5
      }
    },
    serviceSpeed: {
      score: {
        type: Number,
        min: 1,
        max: 5
      }
    },
    appExperience: {
      score: {
        type: Number,
        min: 1,
        max: 5
      }
    },
    overallExperience: {
      score: {
        type: Number,
        min: 1,
        max: 5
      }
    },
    comment: {
      type: String
    },
    name: {
      type: String
    },
    phone: {
      type: String
    }
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = {
  Feedback
};
