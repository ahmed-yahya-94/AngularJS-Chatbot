// userController.js

// STEP 8 import the User model
const User = require("../models/user")

//STEP  9 Create the different function logic for the route
const all = (req, res) => {
  // Exercise for you TODO
  User.find(req.params, (err, users) => {
    if (err) return res.status(500).send("Problem occurred when retrieving users data from the database.");
    if(users.length == 0) return res.status(200).send("No users to display");
    res.status(200).send(users);
  })
}

const create = (req, res) => {
  // Exercise for you TODO
  User.create(req.body,
    (err, user) => {
      if (err) return res.status(500).send("Problem occurred when adding the user information to the database.");
      res.status(200).send(user);
    })
}

// STEP 14 remove the user logic
const remove = (req, res) => {
  // Exercise ToDo
  User.findOneAndRemove(req.params, (err, users) => {
    if (err) return res.status(500).send("Problem occurred when retrieving the user data from the database.");
    else if(!users) return res.status(200).send("User not found");
    res.status(200).send(users);
  })
}

// STEP 12
// TO TEST /mongo/user/hakamaq (hakamaq) = :networkId
const getUser = (req, res) => {
  //check if networkId exists
  if(!req.params.networkId){
    return res.status(400).send("Bad request pass in user's networkId");
  }
  // AFTER Break update
  const networkId = req.params.networkId; 
  User.findOne({networkId} , (err, user) =>{ // {networkId: networkId} => {networkId}
    if(err) return res.status(500).send("No user found")
    else if(!user) return res.status(204)
    res.status(200).json(user)
  })
}
// STEP 13 update user
const update = (req, res) => {
    // AFTER Break update
  const networkId = req.params.networkId;
  User.updateOne({networkId}, req.body , (err, result)=>{
    if(err) return res.status(500).send("Problem updating user")
    else if(result.matchedCount != 1) return res.status(404).send("User not found")
    res.status(200).send(result)
  })
}
// STEP 10 update userRoute.js userController.delete to userController.remove

//STEP 11 export the methods
module.exports = {
  all,
  getUser,
  update,
  create,
  remove
}