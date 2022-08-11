const express = require("express")
const axios = require("axios")

const PORT = process.env.PORT || 5000
const app = express()
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.set("json spaces", 2)

app.get("/", (req, res) => {
  res.send("Welcome to your App!")
})

app.get("/getData", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
      res.json(response.data)
    }).catch(function(error) {
      res.json("Error occured!")
    })
})

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})