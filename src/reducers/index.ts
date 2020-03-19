// types 
import {
  person
} from '../types';
// constant
import {
  CHANGE_NAME,
  CHANGE_AGE,
  actionChangeInfo,
} from '../actions';

type personType<T> = {
  [K in keyof T]: T[K];
}

type personSharp = personType<person>;

const initialState:personSharp = {
  name: '',
  age: 0,
}

export function personReducer(
  state: personSharp = initialState,
  actions: actionChangeInfo
): personSharp {
  switch(actions.type) {
    case CHANGE_NAME: 
      return { ...state, name: actions.payload.name }
    case CHANGE_AGE:
      return { ...state, age: actions.payload.age }
    default:
      return state;
  }
}