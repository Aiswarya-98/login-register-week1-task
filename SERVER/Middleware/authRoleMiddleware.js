// middleware to authorize specific roles

const authorizeRoles = (...roles) => {
  return(req,res,next)=>{
    if(!roles.includes(req.payload.role)){
      return res.status(403).json({message:'You are not authorized to perform this action'})
  }
  next()
}
}

module.exports = authorizeRoles