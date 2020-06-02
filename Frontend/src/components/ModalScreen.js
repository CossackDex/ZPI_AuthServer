import React, { Component } from "react";
import { aChangeMail } from "../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  Form,
  Button,
  Icon,
  Modal,
  Table,
  Header,
  Tab,
} from "semantic-ui-react";
import { Route } from "react-router-dom";
import EditWindow from "./EditWindow";
import history from "../history";

class ModalScreen extends Component {
  state = { open: false };

  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  renderInput = ({ input, placeholder, className, meta, type }) => {
    return (
      <div className={className + "field"}>
        {" "}
        {/*Miejsce na klasy Semantic UI*/}
        <input
          {...input}
          placeholder={placeholder}
          type={type}
          autoComplete="off"
        />
      </div>
    );
  };
  //   onSubmit = () => {
  //     const a = {
  //       auth: { username: this.props.username, password: this.props.password },
  //     };
  //     this.props.aChangeMail();
  //     history.push("dashboard/admin/users");
  //   };
  onSubmit = (formValues) => {
    console.log("os");
    console.log(formValues);
    const a = {
      auth: { username: this.props.username, password: this.props.password },
    };
    const username = this.props.username_edit;
    this.props.aChangeMail(formValues.newmail, a, username);
    this.close();
  };

  render() {
    const { open, dimmer } = this.state;
    const { username, useremail, role } = this.props;
    const { username_edit, useremail_edit, role_edit } = this.props;
    return (
      <div>
        <Button
          onClick={this.show("blurring")}
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
          {/* <EditWindow
            username_edit={username_edit}
            useremail_edit={useremail_edit}
            role_edit={role_edit}
          ></EditWindow> */}
          <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Table color="teal">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="2">
                    <p></p>
                    <p></p>
                    <p>
                      <Header as="h4">Username: {username_edit}</Header>
                    </p>
                    {/* </Table.HeaderCell>
            <Table.HeaderCell> */}
                    <p>
                      <Header as="h4">E-mail: {useremail_edit}</Header>
                    </p>
                    <p></p>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width={7}>
                    <b>E-mail</b>
                  </Table.Cell>
                  <Table.Cell collapsing>
                    <Field
                      name="newmail"
                      component={this.renderInput}
                      type="text"
                      placeholder="New E-mail"
                      className=""
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Button color="black" onClick={this.close}>
                      Cancel
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Modal.Actions>
                      <Button
                        color="teal"
                        icon="edit"
                        labelPosition="right"
                        content="Confirm"
                        type="submit"
                        //   onClick={this.close}
                      />
                    </Modal.Actions>
                  </Table.Cell>
                </Table.Row>
                <Table.Row></Table.Row>
              </Table.Body>
            </Table>
          </Form>
          <div></div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.sign.username,
    password: state.sign.password,
    useremail: state.sign.email,
    role: state.sign.role,
  };
};

const formWrapped = reduxForm({
  form: "editemail",
})(ModalScreen);

export default connect(mapStateToProps, { aChangeMail })(formWrapped);
