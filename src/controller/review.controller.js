const express = require("express");
const ReviewService = require("../service/reviews.services.js");
const userService = require("../service/user.services");

class ReviewController {
  // Fetch all reviews
  static async getAllReviews(req, res) {
    try {
      const reviews = await ReviewService.getAllReviews();
      res.json({ success: true, reviews });
    } catch (error) {
      console.error("Error fetching all reviews:", error);
      res
        .status(500)
        .json({ success: false, error: "Error fetching all reviews." });
    }
  }

  /// Create a review by company ID
  static async createReview(req, res) {
    try {
      const { email, company_name, userName, Rating, product, feedBack } =
        req.body;
      const value = req.body;
      const company = await userService.getAUserById(req.params.companyId);

      if (!company) {
        return res.status(404).json({
          success: false,
          message: "no company with such Id",
        });
      }
      // Populate the 'company_name' field with company data
      //const populatedReview = await review.populate(review, {
      // path: "company_name",
      // });

      const review = await ReviewService.createReview(value);
      return review
        ? res.status(201).send({
            message: "REVIEWS.USER.CREATED",
            success: true,
          })
        : res.status(400).send({
            message: "REVIEWS.USER.N_CREATED",
            success: false,
          });
      //await review.populate("user", "company_name");
      
    } catch (error) {
      console.log(error);
      // ...
    }
  }

  // Fetch all company reviews by ID
  static async getCompanyReviews(req, res) {
    const companyId = req.params.companyId;

    try {
      const reviews = await ReviewService.getAllReviews({
        company_name: companyId,
      });

      if (reviews.length === 0) {
        res.status(404).json({
          success: false,
          error: "No reviews found for the specified company.",
        });
      } else {
        res.json({ success: true, reviews });
      }
    } catch (error) {
      //console.error("Error fetching company reviews:", error);
      res.status(500).json({
        success: false,
        error:
          "An error occurred while fetching company reviews. Please try again later.",
      });
    }
  }
}

module.exports = ReviewController;
