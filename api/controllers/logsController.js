const Logs = require('../models/log')

const addLog = (req, res)=> {
  Logs.create(req.body, (err, log) => {
    if(err) return res.status(500).send("Can't create log in database something happened, enjoy :)");
    res.status(200).send(log)
  })
}

const getLogs = (req, res) => {
  Logs.find({}, (err,logs) => {
    if(err) return res.status(500).send("Wallah I can't get logs");
    if(logs.length === 0) return res.status(204)
    res.status(200).send(logs)
  })
}

module.exports = {
  addLog,
  getLogs
}