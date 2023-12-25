const express = require("express")

const Pokemon = require("./models/pokemon.js")
const app = express()


//MIDDLEWARE
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

//INDEX
app.get("/", (req, res) => {
    res.render('index.ejs', { data: Pokemon })
})

//NEW
app.get("/new", (req, res) => {
    res.render("new.ejs")
})

//DELETE


//UPDATE


//CREATE
app.post("/", (req, res)=>{
    const body =req.body
    Pokemon.push(body)
    res.redirect("/")
})

//EDIT


//SHOW
app.get("/:id", (req, res) => {
    res.render("show.ejs", { data: Pokemon[req.params.id] })
})

// app.get("/Pokemon/:id", (req, res) => {
//     const id = req.params.id
//     const poke=Pokemon[id]
//     res.render("show.ejs", {pokemon})
// })

//*********************** */
// SERVER LISTENER
//*********************** */
app.listen(3000, () => { console.log(('listening on port 3000')) })