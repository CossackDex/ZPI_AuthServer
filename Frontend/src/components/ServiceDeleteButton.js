import React, { Component } from "react";
import {
  Table,
  Button,
  Icon,
  Modal,
  TableCell,
  Confirm,
} from "semantic-ui-react";
import { connect } from "react-redux";

import { aDeleteService } from "../actions"


class ServiceDeleteButton extends Component {
  state = {
    open: false,
  };
  onDelete = (service) => {
    const a = {auth: { username: this.props.username, password: this.props.password }};
    this.props.aDeleteService(a, service)
    this.close()
  };
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  render() {
    const { banned } = this.state;
    const { service } = this.props;
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
          onConfirm={() => this.onDelete(service)}
        />
      </p>
    );
  }
}

const mapStateToProps = state => {
    return {
        services: state.service.services,
        username: state.sign.username,
        password: state.sign.password
      };
}

export default connect(mapStateToProps, { aDeleteService})(ServiceDeleteButton);
