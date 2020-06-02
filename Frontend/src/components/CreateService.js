import React, { Component } from "react";
import { aPostService } from "../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  Form,
  Table,
  Button,
  Header,
} from "semantic-ui-react";


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
    const a = {auth: { username: this.props.username, password: this.props.password }};
    this.props.aPostService(formValues, a)
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
                  <Header as="h4">Creator: {username}</Header>
                </p>
                {/* </Table.HeaderCell>
            <Table.HeaderCell> */}
                <p></p>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={7}>
                <b>Service name</b>
              </Table.Cell>
              <Table.Cell collapsing>
                <Field
                  name="servicename"
                  component={this.renderInput}
                  type="text"
                  placeholder="Service name"
                  className=""
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={7}>
                <b>Connection IP</b>
              </Table.Cell>
              <Table.Cell collapsing>
                <Field
                  name="ipaddress"
                  component={this.renderInput}
                  type="text"
                  placeholder="IP address"
                  className=""
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing colSpan="2">
              <Button color="teal" floated="right" type="submit">Confirm</Button>
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
    username: state.sign.username,
    password: state.sign.password,
    role: state.sign.role
  };
};

const formWrapped = reduxForm({
  form: "editemail",
})(EditEmail);

export default connect(mapStateToProps, { aPostService })(
  formWrapped
);
