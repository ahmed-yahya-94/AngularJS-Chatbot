const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI)
        .then(result => {
          console.log("Connected to MongoDB!")
          console.log("result", result)
        })
        .catch(err => console.error("Error in connected to MongoDB", err))

const Schema = mongoose.Schema

const logsSchema = new Schema({
  sender: {type: String},
  message: {type: String},
  sessionId: {
    type:String, 
    // requried: true,  /DELETE
    unique: true
  }
} ,{timestamps:true, versionKey: false})

const Log = mongoose.model("log", logsSchema);

module.exports = Log

//Type in CLI for mongodb

//use chatbot_db
//db.createCollection("logs")