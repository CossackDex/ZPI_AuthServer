import React, { Component } from "react";
import {
  Table,
  Button,
  Icon,
  Modal,
  TableCell,
  Confirm,
} from "semantic-ui-react";

export default class ServiceDeleteButton extends Component {
  state = {
    open: false,
  };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  render() {
    const { banned } = this.state;

    return (
      <p>
        <Button
          inverted
          floated="left"
          icon
          labelPosition="left"
          color="red"
          size="small"
          onClick={this.open}
        >
          <Icon name="delete" />
           Delete
        </Button>
        <Confirm
          size="mini"
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.close}
        />
      </p>
    );
  }
}
