var rx = require('rxjs');
var fetch = require('isomorphic-fetch');

export const TOGGLE_CHOICE = 'TOGGLE_CHOICE';

export const toggleChoice = (text, checked) => {
  return {
    type: TOGGLE_CHOICE,
    text,
    checked
  }
};

export const SELECT_GUNDAM = 'SELECT_GUNDAM';

export const selectGundam = (gundam) => {
  return {
    type: SELECT_GUNDAM,
    gundam
  }
};

export const RECEIVE_GUNDAMS = 'RECEIVE_GUNDAMS';

export const receiveGundams = (data) => {
  return {
    type: RECEIVE_GUNDAMS,
    data: data,
    receivedAt: Date.now()
  }
};

export const REQUEST_GUNDAMS = 'REQUEST_GUNDAMS';

export const requestPosts = (gundams) => {
  return {
    type: REQUEST_GUNDAMS,
    gundams
  }
};

export const fetchGundams = () => {

  return function (dispatch) {

    dispatch(requestPosts(subreddit));
    var urls = [
      'http://gundam.wikia.com/api/v1/Navigation/Data'
    ];

    var gundams = rx.Observable
      .from(urls)
      .flatMap(x => fetch(x))
      .flatMap(x => x.json())
      .map(x => x.navigation.wiki);

    gundams.subscribe(
      (n) => dispatch(receiveGundams(n.filter(x => x.text === "Mobile Weapons"))),
      (e) => console.log(e),
      (d) => console.log('done')
    );
  }
};

