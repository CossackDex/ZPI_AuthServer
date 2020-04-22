import React, { Component } from "react";
import {
  Table,
  Button,
  Icon,
  Modal,
  TableCell,
  Confirm,
} from "semantic-ui-react";

export default class UsersTable extends Component {
  state = {
    banned: false,
    color: "grey",
    name: "Unbaned",
    open: false,
  };

  handleOnClick = () => {
    this.setState({ banned: !this.state.banned });
  };
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  render() {
    const { banned } = this.state;

    return (
      <Button.Group>
        <Button
          content={banned ? "Banned" : "Ban"}
          color={banned ? "red" : "grey"}
          // active={banned}
          onClick={this.handleOnClick}
        ></Button>

        <Button inverted color="red" onClick={this.open}>
          Delete
        </Button>
        <Confirm
          size="mini"
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.close}
        />
      </Button.Group>
    );
  }
}
