//DEPENDENCIES
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const pokemonRouter = require("./controllers/pokemon.js")
const Pokemon = require("./models/pokemon.js")
const app = express()


//MIDDLEWARE
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use("/", pokemonRouter)

//*********************** */
// SERVER LISTENER
//*********************** */
app.listen(3000, () => { console.log(('listening on port 3000')) })