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

class UsersTable extends Component {
  state = {
    banned: false,
    color: "grey",
    name: "Unbaned",
    openban: false,
    opendel: false,
  };

    onDelete = () => {
    const a = {auth: { username: this.props.username, password: this.props.password }};
    this.props.aDeleteUser(a);
    this.setState({ opendel: false })
  };

  handleOnClick = () => {
    this.setState({ banned: !this.state.banned });
    this.setState({ openban: false })
  };
  openban = () => this.setState({ openban: true });
  opendel = () => this.setState({ opendel: true });
  closeban = () => this.setState({ openban: false });
  closedel = () => this.setState({ opendel: false });
  render() {
    const { banned } = this.state;

    return (
      <Button.Group>
        <Button
          content={banned ? "Banned" : "Ban"}
          color={banned ? "red" : "grey"}
          // active={banned}
          // onClick={this.handleOnClick}
          onClick={this.openban}
        ></Button>
        <Confirm
          size="mini"
          open={this.state.openban}
          onCancel={this.closeban}
          onConfirm={this.handleOnClick}
        />
        <Button inverted color="red" onClick={this.opendel}>
          Delete
        </Button>
        <Confirm
          size="mini"
          open={this.state.opendel}
          onCancel={this.closedel}
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

export default connect(mapStateToProps, {aDeleteUser})(UsersTable);