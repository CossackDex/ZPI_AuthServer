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
  //   banned: false,
  //   color: "grey",
  //   name: "Unbaned",
  //   open: false,
  // };

  // handleOnClick = () => {
  //   this.setState({ banned: !this.state.banned });
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
