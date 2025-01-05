console.log("Hello!");

const mongoose = require('mongoose');
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/newdb");

run()
async function run() {
  // firt way
  const user = await User.create({ name: "Andrey", age: 39, status: "admin" });
  user.name = "Stas";
  await user.save();
  // second way
  // const user = new User ({name: "Andrey", age: 38, status: "admin"});
  // await user.save();
  console.log(user);
}



