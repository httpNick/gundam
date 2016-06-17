import { TOGGLE_CHOICE } from '../actions';
function toggles(state = [{checked : false, text : 'hello' }], action) {

  switch(action.type) {

    case 'ADD_CHOICE' :

      return [
        state,
        {checked : false, text: action.text}
      ];

    case TOGGLE_CHOICE :

      return state.map(x => {

        if (x.text == action.text) {
          
          return Object.assign({}, x, {
            checked: !x.checked
          });

        }

      });

    default :
      return state;
  }
}

export default toggles;
