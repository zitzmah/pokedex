const express = require("express")
const router = express.Router()
const Pokemon = require("../models/pokemon.js")

//INDEX
router.get("/", (req, res) => {
    res.render('index.ejs', { data: Pokemon })
})

//NEW
router.get("/new", (req, res) => {
    res.render("new.ejs")
})

//DELETE
router.delete("/:id", (req, res) => {
    const id = req.params.id
    Pokemon.splice(id, 1)
    res.redirect("/")
})

//UPDATE
router.put("/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    Pokemon[id] = body
    res.redirect("/")
})

//CREATE
router.post("/", (req, res) => {
    const body = req.body
    Pokemon.push(body)
    res.redirect("/")
})

//EDIT
// router.get("/:id/edit", (req, res)=>{
//     const id = req.params.id
//     const pokemon = Pokemon[id]
//     res.render("edit.ejs", {data: pokemon})
// })

router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    // Find the Pokemon in your data based on the ID
    const selectedPokemon = Pokemon[id];

    // Render the edit form and pass the selected Pokemon data
    res.render("edit.ejs", { data: selectedPokemon })
});

router.get('/:id/edit', (req, res) => {
const id = req.params.id
const pokemon = pokemon[id]
console.log("this is the pokemon" + pokemon)
  });

//SHOW
router.get("/:id", (req, res) => {
    res.render("show.ejs", { data: Pokemon[req.params.id] })
})

//EXPORT THE ROUTER
module.exports = router

