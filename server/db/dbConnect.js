const mongoose = require('mongoose')
mongoose.connect(process.env.DBKEY)
.then(()=>{
    console.log("Database is connected");
})
.catch((error)=>{
    console.log(error)
})