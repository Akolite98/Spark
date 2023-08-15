const { Router } = require("express");
const reviewRouter = Router();

const { createReview, getCompanyReviews, getAllReviews } =
  (reviewController = require("../controller/review.controller"));

reviewRouter.post("/reviews/create/:companyId", createReview);
reviewRouter.get("/reviews/:id", getCompanyReviews);
reviewRouter.get("/reviews/reviews", getAllReviews);

module.exports = reviewRouter;
