var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/spells', function (req, res, next) {
  fetch("https://hp-api.onrender.com/api/spells")
    .then(response => response.json())
    .then(data => {

      let rand = Math.floor(Math.random() * data.length);
      let tabnum = 0

      const pattern = /[0-9]/g;
      const spellNumbers = data[rand].id.match(pattern)

      for (let i of spellNumbers) {
        tabnum += (parseInt(i))
      }
      let Spell = {
        name: data[rand].name,
        description: data[rand].description,
        spellpoint: tabnum
      }
      res.json(Spell)
    })
});

router.get('/characters', function (req, res, next) {
  fetch("https://hp-api.onrender.com/api/characters/students")
    .then(response => response.json())
    .then(data => {

      let rand = Math.floor(Math.random() * data.length);
      let tabnum = 0

      if (data[rand].house === "") {
        data[rand].house = "NEVER BEEN A HOGWARTS STUDENT"
      }
      if (data[rand].image === "") {
        data[rand].image = "../images/logo.png"
      }

      const pattern = /[0-9]/g;
      const charNumbers = data[rand].id.match(pattern)

      for (let i of charNumbers) {
        tabnum += (parseInt(i))
      }
      let character = {
        name: data[rand].name,
        house: data[rand].house,
        image: data[rand].image,
        points: tabnum
      }
      res.json(character)
    })
});

module.exports = router
