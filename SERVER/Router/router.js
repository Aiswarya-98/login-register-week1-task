const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const authorizeRoles = require('../Middleware/authRoleMiddleware')
const userMiddleware = require('../Middleware/userMiddleware')
const adminMiddleware = require('../Middleware/adminMiddleware')


// register
router.post('/user/register',userController.registerUser)

// google login
router.post('/user/google-login',userController.googleLoginUser)

// login
router.post('/user/login',userController.loginUser)

// protected
// router.get('/admin',jwtMiddleware,(req,res)=>{
//   if(req.payload.role !== 'admin'){
//     return res.status(403).json({message:'access denied'})
//   }

//   res.json({message:"Welcome to the admin route"})
// })

router.get('/admin',jwtMiddleware,adminMiddleware,userController.getAdminDashboard)


router.get('/user/api',jwtMiddleware,userMiddleware, userController.getUserDashboard)


module.exports=router