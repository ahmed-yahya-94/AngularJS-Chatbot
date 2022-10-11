const express = require("express");
const router = express.Router()

const logsController = require("../controllers/logsController")

router.get("/", logsController.getLogs); // rename controller
router.post("/", logsController.addLog); // rename controller



module.exports = router;