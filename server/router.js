var express = require('express')
  , router = express.Router()
  , rx = require('rxjs')
  , fetch = require('isomorphic-fetch');

router.get('/fetch/gundams', (req, res) => {

   var gundams = rx.Observable
    .fromPromise(fetch('http://gundam.wikia.com/api/v1/Navigation/Data'))
    .flatMap(x => x.json())
    .flatMap(x => x.navigation.wiki)
    .filter(x => x.text === "Mobile Weapons");

   gundams.subscribe(

     (n) => res.json(n),
     (e) => res.err(e)

   );
});

module.exports = router;