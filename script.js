const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

async function run(){
    const user = new User({name: "John", age: 26})
    await user.save()
}