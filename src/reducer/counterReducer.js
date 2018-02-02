// counterReducer.js

import * as actionType from './../container/actions/actionType';

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionType.ADD_COUNTER:
      return newState = state + action.payload;
    case actionType.REMOVE_COUNTER:
      return newState = state - action.payload;
    default:
      return state
  }
}

export default counterReducer;