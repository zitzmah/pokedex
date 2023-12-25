const express = require("express")

const pokemonRouter = require("./controllers/pokemon.js")
const Pokemon = require("./models/pokemon.js")
const app = express()


//MIDDLEWARE
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use("/", pokemonRouter)

//*********************** */
// SERVER LISTENER
//*********************** */
app.listen(3000, () => { console.log(('listening on port 3000')) })