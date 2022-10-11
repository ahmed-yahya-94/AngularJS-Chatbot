//STEP 1 create a new folder in the root directory /api/routes
// STEP 2 create a new file called watsonRoutes.js in the /api/routes/watsonRoute.js
const express = require("express")
const router = express.Router();
const watson = require("../controllers/watsonController")

router.get("/createSession", watson.retrieveSession)
router.post("/ask", watson.message)
router.get("/", watson.init)

module.exports = router
// STEP 3 copy the /createSession route in index
// and copy the /ask route in index