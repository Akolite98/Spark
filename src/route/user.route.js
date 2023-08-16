const { Router } = require('express')
const {
    validate_Account_Creation_Inputs,
    validate_Company_Login_Inputs,
} = require('../validation/joi.validations')

const userRouter = Router()

const {
    signUp,
    loginUser,
    findAUser,
    fetchAllUsers,
    updateAUser,
    removeUser,
    fetchAllReviews,
    loggedOut
} = userController = require('../controller/user.controller')

userRouter.post('/user/register', validate_Account_Creation_Inputs, signUp)
userRouter.post('/user/login', validate_Company_Login_Inputs, loginUser)
userRouter.post('/user/logout', loggedOut)
userRouter.get('/user', fetchAllUsers)
userRouter.get('/user/:id', findAUser)
userRouter.get('/user/reviews', fetchAllReviews)
userRouter.patch('/user/:id', updateAUser)
userRouter.delete('/user/:id', removeUser)

module.exports = userRouter