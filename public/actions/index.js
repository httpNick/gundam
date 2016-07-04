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

export const REQUEST_GUNDAM = 'REQUEST_GUNDAM';

export const requestGundam = () => {
  return {
    type: REQUEST_GUNDAM
  }
};

export const RECEIVE_GUNDAM = 'RECEIVE_GUNDAM';

export const receiveGundam = (data) => {
  return {
    type : RECEIVE_GUNDAM,
    data : data,
    receivedAt : Date.now()
  }
};

export const fetchSelectedGundam = (gundam) => {

  return function(dispatch) {

    dispatch(requestGundam());
    let gundamObservable = rx.Observable
      .fromPromise(
        fetch('/fetch/gundam',
          {
            method: 'post',
            body: JSON.stringify({ gundam : gundam })
          }
        )
      )
      .flatMap(x => x.json());

    gundamObservable
      .subscribe(
        n => dispatch(receiveGundam(n)),
        e => console.err(e)
      );
  }

};

export const RECEIVE_HIERARCHY = 'RECEIVE_HIERARCHY';

export const receiveHierarchy = (data) => {
  return {
    type: RECEIVE_HIERARCHY,
    data: data,
    receivedAt: Date.now()
  }
};

export const REQUEST_HIERARCHY = 'REQUEST_HIERARCHY';

export const requestHierarchy = () => {
  return {
    type: REQUEST_HIERARCHY
  }
};

export function fetchHierarchy() {

  return function (dispatch) {

    dispatch(requestHierarchy());
    let hierarchy = rx.Observable
      .fromPromise(fetch('/fetch/hierarchy'))
      .flatMap(x => x.json());

    hierarchy.subscribe(
      n => dispatch(receiveHierarchy(n)),
      e => console.err(e)
    );

  }
}

