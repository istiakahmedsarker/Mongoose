const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

run()
async function run(){
    const user = await User.create({name: "John", age: 26})
    user.name = "Sally"
    await user.save()
    // const user = new User({name: "John", age: 26})
    console.log(user)
}
