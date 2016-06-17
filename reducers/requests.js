import {
  REQUEST_GUNDAMS,
  RECEIVE_GUNDAMS,
  SELECT_GUNDAM
} from '../actions';

export function selectGundam(state = 'Death Scythe', action) {
  switch (action.type) {
    case SELECT_GUNDAM:
      return action.gundam;
    default:
      return state;
  }
}

export function gundamRequests(state = { isFetching: false, items: [] }, action) {

  switch(action.type) {
    case REQUEST_GUNDAMS:

      return Object.assign(
        {},
        state,
        {isFetching : true}
      );

    case RECEIVE_GUNDAMS:

      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          items : action.data,
          lastUpdated: action.receivedAt
        }
      );

    default:
      return state;

  }
}