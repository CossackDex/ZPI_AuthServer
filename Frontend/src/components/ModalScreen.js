import React, { Component } from "react";
import {
    Button,
    Icon,
    Modal
  } from "semantic-ui-react";
import { Route } from "react-router-dom";
import EditWindow from "./EditWindow";


export default class ModalScreen extends Component {

    state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
render(){
const { open, dimmer } = this.state
const { username, useremail, role} = this.props;
  return (
<div><Button
            onClick={this.show('blurring')}
            floated="left"
            icon
            labelPosition="left"
            color="teal"
            size="small"
          >
            <Icon name="edit" />
             Edit
          </Button>
    {/* <Button >Blurring</Button> */}
        <Modal size="mini" dimmer={dimmer} open={open} onClose={this.close}>
          {/* <Modal.Header>Select a Photo</Modal.Header> */}
          <EditWindow
          username={username}
          useremail={useremail}
          role={role}></EditWindow>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Cancel
            </Button>
            <Button
              color="teal"
              icon='edit'
              labelPosition='right'
              content="Save changes"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal></div>
  );
};
}