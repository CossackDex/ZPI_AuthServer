import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Confirm
} from "semantic-ui-react";
import { aGetUser, aGetUsers, aBanUser, aDeleteUser, aSanction, aForcePass, aUnbanUser } from "../actions"


class AdminButtons extends Component {
  state = {
    banned: false,
    color: "grey",
    name: "Unbaned",
    open: false,
  };


  onDelete = (user) => {
    const a = {auth: { username: this.props.username, password: this.props.password }};
    this.props.aDeleteUser(a, user);
  };

  onBan = (user) => {
    const a = {auth: { username: this.props.username, password: this.props.password }};
    if (!this.props.is_banned) this.props.aBanUser(a, user);
    else {this.props.aUnbanUser(a, user)}
    this.setState({ banned: !this.state.banned });
  };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  render() {
    const { banned } = this.state;
    const { user } = this.props;

    return (
      <Button.Group>
        <Button
          content={banned ? "Banned" : "Ban"}
          color={banned ? "red" : "grey"}
          // active={banned}
          onClick={() => this.onBan(user.username)}
        ></Button>

        <Button inverted color="red" onClick={this.open}>
          Delete
        </Button>
        <Confirm
          size="mini"
          open={this.state.open}
          onCancel={this.close}
          onConfirm={()=>{this.onDelete(user.username)}}
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

export default connect(mapStateToProps, {aGetUser, aGetUsers, aBanUser, aDeleteUser, aSanction, aForcePass, aUnbanUser})(AdminButtons);