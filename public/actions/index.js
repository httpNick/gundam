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

export const FETCH_GUNDAMS = 'FETCH_FUNDAMS';

export function fetchGundams() {

  return function (dispatch) {

    dispatch(requestPosts('gundams'));
    var gundams = rx.Observable
      .fromPromise(fetch('/fetch/gundams'))
      .flatMap(x => x.json());

    gundams.subscribe(
      (n) => {
        console.log(n);
        return dispatch(receiveGundams(n))
      },
      (e) => console.log(e),
    );

  }
}

