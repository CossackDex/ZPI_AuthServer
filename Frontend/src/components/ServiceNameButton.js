import React, { Component } from "react";
import {
  Table,
  Button,
  Icon,
  Input,
  Modal,
  TableCell,
  Confirm,
} from "semantic-ui-react";

export default class ServiceNameButton extends Component {
  // state = {
  //   name: {name}
  // };

  // handleOnClick = () => {
  //   this.setState({ name: "new name"}); // do przerobienia
  // };
 
  render() {

    const { name } = this.props;

    return ( 
    <p>
      <Input type='text' placeholder='Search...' action defaultValue={name}>
    <input />
    <Button size='mini' type='submit'><Icon name='delete'/></Button>
    <Button size='mini' type='submit'><Icon name='check'/></Button>
  </Input>
         </p>
    )
  }
}
