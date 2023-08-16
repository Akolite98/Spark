const MESSAGES = {
    DATABASE: {
        CONNECTED: "MongoDB is connected :)",
        ERROR: "An error occured while connecting to database "
    },

    USER: {
        CREATED: "User account created successfully",
        N_CREATED: "User account creation unsuccessfully",
        USER_FOUND: "Users found successfully",
        USER_NOT_FOUND: "User not found",
        ERROR: "An Error Occured ",
        DUPLICATE_EMAIL: "Email already exists",
        DUPLICATE_USERNAME: "Username already exists",
        REGISTERED: "Registration successful",
        EMAIL_NOTFOUND: 'Email not found',
        LOGGEDIN: 'Logged in successfully',
        W_PASSWORD: 'Wrong password',
        INCORRECT_DETAILS: 'Invalid credentials',
        ACCOUNT_NOT_REGISTERED: 'Account not registered',
        LOGGEDOUT: 'successfully loggedout',
        ACCOUNT_DELETED: 'Account deleted successfully',
        NOT_ACCOUNT_DELETED: 'Unable to delete user account',
        ACCOUNT_UPDATED: 'Account updated successfully',
        NOT_UPDATED: 'Account updated unsuccessful',
        UNAUTHORIZED: 'Unauthorized access ',
        SERVER_ERROR: 'Internal Server Error'
    },

    REVIEW: {
        SUCCESSFULLY_ADDED: 'Review added Successfully!',
        FAILED_TO_ADD: "Failed To Add Review!",
        FOUND_REVIEWS: "Reviews Successfully fetched",
        FAILED_FETCH: "Unable to Fetch Review",
        ERROR: "An Error Occured ",
        INVALID_ID: "Invalid ID",
        NO_REVIEW: "No reviews found for the specified company.",
        FETCHED: "Review successfully fetched",
        EMPTY: "No Review available"

    }
}

module.exports = { MESSAGES }