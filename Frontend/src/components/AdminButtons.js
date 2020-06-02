import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Confirm,
  Icon
} from "semantic-ui-react";
import { aGetUser, aGetUsers, aBanUser, aDeleteUser, aSanction, aForcePass, aUnbanUser } from "../actions"

import history from "../history";
import ModalScreen from "./ModalScreen";

class AdminButtons extends Component {
  state = {
    banned: false,
    color: "red",
    name: "Unban",
    open: false,
  };

  onEdit = (user) => {
    const a = {auth: { username: this.props.username, password: this.props.password }};
    this.props.aGetUser(a, user)
    history.push("/dashboard/admin/users/"+user.id+"/email")
  };

  onSanction = (user) => {
    const a = {auth: { username: this.props.username, password: this.props.password }};
    this.props.aSanction(a, user);
  };

  onDelete = (user) => {
    const a = {auth: { username: this.props.username, password: this.props.password }};
    this.props.aDeleteUser(a, user);
  };

  // onBan = (user) => {
  //   const a = {auth: { username: this.props.username, password: this.props.password }};
  //   if (!this.props.is_banned) this.props.aBanUser(a, user);
  //   else {this.props.aUnbanUser(a, user)}
  //   this.setState({ banned: !this.state.banned });
  // };
  onBan = (user) => {
    const a = {auth: { username: this.props.username, password: this.props.password }};
    // if (!this.props.is_banned) this.props.aBanUser(a, user);
    // else {this.props.aUnbanUser(a, user)}
    if (!user.is_banned) this.props.aBanUser(a, user.username);
    else if (user.is_banned) {this.props.aUnbanUser(a, user.username)}
  };
  // onBan = (user) => {
  //   const a = {auth: { username: this.props.username, password: this.props.password }};
  //   if (!this.props.is_banned) this.props.aBanUser(a, user);
  //   else {this.props.aUnbanUser(a, user)}
  // };

  

  renderBan(user) {
    if (user.is_banned) {return "Unban"}
    else {return "Ban"}
}
//   renderBan() {
//     if (this.props.is_banned) {return "Unban"}
//     else {return "Ban"}
// }


  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });


  render() {
    const { user } = this.props;

    return (
      <Button.Group>
        {/* <Button color="teal" onClick={()=>{this.onEdit(user)}}
        content={"Edit"}>
        {/* <Icon name="edit" /> */}
          {/* Edit */}
        {/* </Button> */} 
        <Button
          // content={banned ? "Banned" : "Ban"}
          content={this.renderBan(user)}

          color={this.renderBan(user)=='Ban' ? "grey" : "red"}
          // active={banned}
          onClick={() => this.onBan(user)}
        ></Button>
        {/* <button className="ui button secondary" onClick={()=>{this.onBan(user.username)}}>{this.renderBan()}</button> */}

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