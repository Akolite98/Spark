const { Router } = require('express')
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

userRouter.post('/user/register', signUp)
userRouter.post('/user/login', loginUser)
userRouter.post('/user/logout', loggedOut)
userRouter.get('/user', fetchAllUsers)
userRouter.get('/user/:id', findAUser)
userRouter.get('/user/reviews', fetchAllReviews)
userRouter.patch('/user/:id', updateAUser)
userRouter.delete('/user/:id', removeUser)

module.exports = userRouter