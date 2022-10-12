
//STEP 9 Run command and get dotEnv
// npm i dotenv
require("dotenv").config();

//STEP 10 create new file
// named ".env" in /code/
// Copy from URL in WhatsApp



// STEP 2 Run Command
// npm i express
const express = require("express")
const app = express()

/*     START    */
// RUN npm i cors
const cors = require("cors")
app.use(cors())
/*     END    */

//STEP 3 Run Command
// npm i body-parser
const bodyParser = require("body-parser")

//STEP 4 initilize body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


//STEP 5 initilize the express application
const port = process.env.PORT || 5001
app.listen(port, () => 
  console.log(`Server running on port ${port}`)
)

// STEP 6 get route default
app.get("/", (req, res) => 
  res.send("Ready to use Watson!")
)

//STEP 7 Run Command 
//npm install ibm-watson

// STEP 8 Configure Watson
// Go to Watson Docs URL in WhatsApp 
// Copy assitant Authentication Initialization

const watsonRouter = require("./api/routes/watsonRoutes");
app.use("/", watsonRouter);

// index.js
// STEP 5 Rename mongoRouter to logsRouter
const logsRouter = require("./api/routes/logsRoute")
app.use("/mongo/logs", logsRouter) // add the .../logs

//STEP 6 Create a user router
const userRouter = require("./api/routes/userRoute")
app.use("/mongo/user", userRouter) 

const loginCheck = require("./api/routes/loginRoute");

// add loginCheck after the "/"
app.use("/", loginCheck , watsonRouter);
