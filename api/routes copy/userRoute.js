//=======================10 Oct=========================
// STEP 1 Rename /api/routes/mongoDBRoutes.js file to logsRoute.js
// STEP 2 Rename /api/controller/mongoDBController.js file to logsController.js
// STEP 3 Create a new file in /api/routes/userRoute.js
// STEP 4 Create a new file in /api/controller/userController.js

// userRoute.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

router.get("/", userController.all)
router.get("/:networkId", userController.getUser)
router.patch("/:networkId", userController.update)
router.post("/", userController.create)

// STEP Update this line
router.delete("/:networkId", userController.remove) 

module.exports  =  router;