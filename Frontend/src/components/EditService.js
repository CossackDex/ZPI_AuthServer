import React, { Component } from "react";
import { aEditService } from "../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import history from "../history"
import {
  Form,
  Table,
  Button,
  Header,
} from "semantic-ui-react";


class EditService extends Component {


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
    if (!formValues.newsname) {formValues.newsname = this.props.serviceName}
    if (!formValues.newip) {formValues.newip = this.props.serviceIp}
    this.props.aEditService(a, formValues, this.props.serviceName);
    history.push("/dashboard/admin/services")
  }
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Table color="teal">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">
                <p></p>
                <p></p>
                <p>
                  <Header as="h4">Service Name: {this.props.serviceName}</Header>
                </p>
                {/* </Table.HeaderCell>
            <Table.HeaderCell> */}
                <p>
                  <Header as="h4">Current IP: {this.props.serviceIp}</Header>
                </p>
                <p></p>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={7}>
                <b>New Service Name</b>
              </Table.Cell>
              <Table.Cell collapsing>
                <Field
                  name="newsname"
                  component={this.renderInput}
                  type="text"
                  placeholder="New Service Name"
                  className=""
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={7}>
                <b>New IP</b>
              </Table.Cell>
              <Table.Cell collapsing>
                <Field
                  name="newip"
                  component={this.renderInput}
                  type="text"
                  placeholder="New IP"
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
    username: state.sign.username,
    password: state.sign.password,
    serviceName: state.thisService.service.service_name,
    serviceIp: state.thisService.service.connection_ip
  };
};

const formWrapped = reduxForm({
  form: "editservice",
})(EditService);

export default connect(mapStateToProps, { aEditService })(
  formWrapped
);
