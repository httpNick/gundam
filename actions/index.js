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

export const receiveGundams = (gundam, data) => {
  return {
    type: RECEIVE_GUNDAMS,
    gundam,
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

