const express = require("express");
const ReviewService = require("../services/review.service");

class ReviewController {
  // Create a new review
  static async createReview(req, res) {
    const { email, company_name, userName, Rating, product, feedBack } =
      req.body;

    try {
      await ReviewService.createReview(
        email,
        company_name,
        userName,
        Rating,
        product,
        feedBack
      );

      res.status(201).json({ message: "Review created successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get all reviews
  static async getAllReviews(req, res) {
    try {
      const reviews = await ReviewService.getAllReviews();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get a review by its ID
  static async getReviewById(req, res) {
    const reviewId = req.params.id;

    try {
      const review = await ReviewService.getReviewById(reviewId);

      if (!review) {
        res.status(404).json({ message: "Review not found." });
      } else {
        res.status(200).json(review);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ReviewController;
