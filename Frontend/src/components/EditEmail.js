import React, { Component } from "react";
import { aChangeMail } from "../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  Form,
  Grid,
  GridRow,
  GridColumn,
  Table,
  Button,
  Icon,
  Input,
  TableFooter,
  Header,
  Confirm,
} from "semantic-ui-react";
import { Route } from "react-router-dom";



class EditEmail extends Component {
  state = {
    open: false,
  };

  open = () => this.setState({ open: true });
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

  onSubmit = (formValues) => {
    const a = {auth: { username: this.props.myusername, password: this.props.mypassword }};
    const username = this.props.username
    this.props.aChangeMail(formValues.newmail, a, username);
  }
  render() {
    const { username, useremail, role } = this.props;
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Table color="teal">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">
                <p></p>
                <p></p>
                <p>
                  <Header as="h4">Username: {username}</Header>
                </p>
                {/* </Table.HeaderCell>
            <Table.HeaderCell> */}
                <p>
                  <Header as="h4">Current e-mail: {useremail}</Header>
                </p>
                <p></p>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={7}>
                <b>New e-mail</b>
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
              <Table.Cell collapsing>
              <Button color="teal" type="submit">Confirm</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>

        </Table>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myusername: state.sign.username,
    mypassword: state.sign.password,
    username: state.this.username,
    password: state.sign.password,
    useremail: state.this.email,
    role: state.sign.role
  };
};

const formWrapped = reduxForm({
  form: "editemail",
})(EditEmail);

export default connect(mapStateToProps, { aChangeMail })(
  formWrapped
);
