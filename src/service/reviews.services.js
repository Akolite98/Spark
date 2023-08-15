const Review = require("../model/reviews.model");
const { User } = require("../model/user.model");
const mongoose = require("mongoose");

class ReviewService {
  async createReview(data) {
    //to create a user
    await Review.create(data);
    const rev = await Review.find(data);
    console.log(rev);
    return rev;
  }

  async getAllReviews() {
    return await Review.find({});
  }

  async getCompanyReviews(companyId) {
    return await Review.find({ company_name: companyId });
  }
}

module.exports = new ReviewService();
