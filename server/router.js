var express = require('express')
  , router = express.Router()
  , rx = require('rxjs')
  , fetch = require('isomorphic-fetch');

router.get('/fetch/hierarchy', (req, res) => {

   var hierarchy = rx.Observable
    .fromPromise(fetch('http://gundam.wikia.com/api/v1/Navigation/Data'))
    .flatMap(x => x.json())
    .flatMap(x => x.navigation.wiki)
    .filter(x => x.text === "Mobile Weapons");

   hierarchy.subscribe(

     (n) => res.json(n),
     (e) => res.err(e)

   );
});

router.post('/fetch/gundam', (req, res) => {
  res.err("No gundam found in body of post.");
  /*var gundam = req.body.gundam;
  if (gundam != null) {
    var gundamObs = rx.Observable
      .fromPromise(fetch(''))
      .flatMap(x => x.json())
  } else {
    res.err("No gundam found in body of post.");
  }*/
});

module.exports = router;