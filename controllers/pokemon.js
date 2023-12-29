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
    console.log("Received PUT request:", req.params.id, req.body);
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
router.get('/:id/edit', (req, res) => {
    res.render("edit.ejs", { data: Pokemon[req.params.id] })
});

//SHOW
router.get("/:id", (req, res) => {
    res.render("show.ejs", { data: Pokemon[req.params.id] })
})

//EXPORT THE ROUTER
module.exports = router

