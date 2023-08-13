const Review = require("../model/reviews.model");
const mongoose = require("mongoose");

class ReviewService {
  // Create a new review
  static async createReview(
    email,
    company_name,
    userName,
    Rating,
    product,
    feedBack
  ) {
    const review = new Review({
      email,
      company_name,
      userName,
      Rating,
      product,
      feedBack,
    });

    return review.save();
  }

  // Get all reviews
  static async getAllReviews() {
    return Review.find();
  }

  // Get a review by its ID
  static async getReviewById(reviewId) {
    return Review.findById(reviewId);
  }
}

module.exports = ReviewService;
