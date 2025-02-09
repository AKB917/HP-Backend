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

module.exports = router
