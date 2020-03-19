import * as React from 'react';

interface propsCurrent {
  name: string;
  age: number;
}

interface dispatchProps {
  actionChangeName: (name:string) => void;
  actionChangeAge: (age: number) => void;
}

type Props = propsCurrent & dispatchProps;
type inputName = React.ReactEventHandler<HTMLInputElement>;
type inputEv = React.ChangeEvent<HTMLInputElement>;

export default class extends React.Component<Props, {}> {

  render() {
    const { name, age } = this.props;
    return <>
      <div>Hello { name } | you're { age } years old :D</div>
      <input value={name} onChange={this.handleInput.bind(this)} />
      <input type="number" value={age} onChange={this.handleInputAge.bind(this)} />
    </>
  }

  handleInput: inputName = (ev: inputEv) => {
    const { value } = ev.target;
    this.props.actionChangeName(value);
  }
  
  handleInputAge: inputName = (ev: inputEv) => {
    const value = +ev.target.value;
    this.props.actionChangeAge(value);
  }
}