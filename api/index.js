const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcript = require("bcryptjs")
const User = require("./models/schema.js")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

const port = 3000
const secrete = bcript.genSaltSync(10)
const jwtSecrete = "askdjfasdfasdfjkeia"

require("dotenv").config()
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
)

mongoose.connect("mongodb+srv://himal:root@cluster0.dxbaik6.mongodb.net/")

app.get("/test", (req, res) => {
  res.json("Your test is ok")
})

app.post("/register", async (req, res) => {
  const { name, email, pass } = req.body
  try {
    const users = await User.create({
      name,
      email,
      password: bcript.hashSync(pass, secrete),
    })
    res.json(users)
  } catch (error) {
    res.status(422).json(error)
  }
})
// for login
app.post("/login", async (req, res) => {
  const { email, password } = req.body
  const matchedUser = await User.findOne({ email })
  if (matchedUser) {
    const matchPass = bcript.compareSync(password, matchedUser.password)
    if (matchPass) {
      jwt.sign(
        {
          email: matchedUser.email,
          id: matchedUser._id,
        },
        jwtSecrete,
        {},
        (err, token) => {
          if (err) throw err
          res.cookie("token", token).json(matchedUser)
        }
      )
    } else {
      res.status(422).json("password is not match.")
    }
  } else {
    res.json("user not found")
  }
})

app.get("/profile", (req, res) => {
  const { token } = req.cookies
  if (token) {
    jwt.verify(token, jwtSecrete, {}, async (err, userData) => {
      if (err) throw err
      const { email, name, id } = await User.findById(userData.id)
      res.json({ email, name, id })
    })
  } else {
    res.json(null)
  }
})

// logout
app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
