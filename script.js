const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

const user = new User({name: "John", age: 26})
user.save().then(()=> console.log("USer Saved"))