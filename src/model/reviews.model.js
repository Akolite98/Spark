const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const rounds = parseInt(process.env.ROUNDS);
const bcrypt = require("bcrypt");

const reviewSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },

    company_name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    userName: {
      type: String,
      trim: true,
      required: true,
    },

    Rating: {
      type: Integer,
      trim: true,
      default: null,
    },

    product: {
      type: String,
      trim: true,
      required: true,
    },

    feedBack: {
      type: String,
      required: true,
      trim: true,
      default: [],
    },
  },
  { timestamps: true }
);

reviewSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const salt = await bcrypt.genSalt(rounds);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
