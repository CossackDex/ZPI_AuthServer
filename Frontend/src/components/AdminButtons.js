import React, { Component } from "react";
import { connect } from "react-redux";
import {aDeleteUser} from "../actions";
import {
  Table,
  Button,
  Icon,
  Modal,
  TableCell,
  Confirm,
} from "semantic-ui-react";

class AdminButtons extends Component {
  state = {
    banned: false,
    color: "grey",
    name: "Unbaned",
    open: false,
  };

    onDelete = () => {
    const a = {auth: { username: this.props.username, password: this.props.password }};
    this.props.aDeleteUser(a);
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
          onConfirm={this.onDelete}
        />
      </Button.Group>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.admin.users_list,
    username: state.sign.username,
    password: state.sign.password,
  };
}

export default connect(mapStateToProps, {aDeleteUser})(AdminButtons);