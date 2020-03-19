import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Showname from '../components/Showname';
import * as actions from '../actions';
import { person } from '../types';

export function mapStateToProps({ name, age }: person) {
  return {
    name, age
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.actionChangeInfo>) {
  return {
    actionChangeName: (name:string) => dispatch(actions.changeNameFn(name)),
    actionChangeAge: (age: number) => dispatch(actions.changeAgeFn(age)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Showname);