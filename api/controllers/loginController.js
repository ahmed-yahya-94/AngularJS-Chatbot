const isLogged = (req, res, next) => {
    const { email, password } = req.body;
    User.findOne({ email, password }).then((user, err) => {
      if (err) return res.status(500).send("could not authenticate user")
      if (!user) return res.status(401).send("Wrong Credantials");
      res.cookie("chatbotUser", JSON.stringify(user))
      next()
    })
  }
  
module.exports = {
  isLogged
};