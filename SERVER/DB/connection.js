const mongoose = require('mongoose')
const connection = process.env.DATABASE

mongoose.connect(connection).then(()=>{
  console.log('mongoDB atlas connected successfully');

}).catch((err)=>{
  console.log(`mongoDB connection failed !!error:${err}`);
})