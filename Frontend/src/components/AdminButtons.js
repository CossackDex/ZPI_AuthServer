import React, { Component } from "react";
import { Table, Button, Icon, Modal, TableCell } from "semantic-ui-react";


export default class UsersTable extends Component {

  state = {
    banned: false,
    color: "grey",
    name: "Unbaned"
  }

//   active false
//   as "button"
//   children "Banned"
//   color "grey"
//   content "Unbanned"
//   onClick ƒ () {}
//   new prop : ""

//   active true
//     as "button"
//     children "Banned"
//     color "red"
//     content "Banned"
//     onClick  ƒ () {}
//     new prop : 


//   handleOnClick = () => {
//     if (active === true) {
//     this.setState({ activeItem: banned })
//     }else{
//       this.setState({ activeItem: banned })
//     }
//   }

  handleOnClick = () => {
    // const { banned } = this.state
    this.setState({ banned: !this.state.banned})
  }
//   handleBanned = () => {
//     this.setState({ banned: true })
//   }

//   handleUnBanned = () => {
//     this.setState({ banned: false })
//   }

  render() {
    const { activeItem, color, banned} = this.state;

    return (
  <Button.Group>
    <Button
    content={banned ? 'Banned' : 'Ban'}
    color={banned ? 'red' : 'grey'}
    // active={banned}
    onClick={this.handleOnClick}
    ></Button>
    
    <Button
    inverted
    color="red">Delete</Button>
  </Button.Group>
    );
  }
}