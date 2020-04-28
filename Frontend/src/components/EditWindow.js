import React, { Component } from "react";
import { deleteMe, changeMail, changePass } from "../actions";
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

class EditWindow extends Component {
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

  onDelete = () => {
    this.props.deleteMe(this.props.username, this.props.password);
  };

  onSubmit = (formValues) => {
    const a = {auth: { username: this.props.username, password: this.props.password }};
    if (formValues.newmail && !formValues.oldpass) {
      this.props.changeMail(formValues.newmail, a);
    }
    else if (!formValues.newmail && formValues.oldpass && formValues.newpass && formValues.confirmpass && formValues.oldpass === this.props.password && formValues.newpass === formValues.confirmpass) {
      this.props.changePass(formValues.newpass, a);
    }
    else if (formValues.newmail && formValues.oldpass && formValues.newpass && formValues.confirmpass && formValues.oldpass === this.props.password && formValues.newpass === formValues.confirmpass && !(formValues.oldpass === this.props.newpass)) {
      this.props.changeMail(formValues.newmail, a);
      this.props.changePass(formValues.newpass, a);
    }
    else {
      return console.log("Nothing to do")
    }

    };

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
                  <Header as="h4">E-mail: {useremail}</Header>
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
            <Route exact path="/dashboard/user">
              <Table.Row>
                <Table.Cell width={7}>
                  <b>Old Password</b>
                </Table.Cell>
                <Table.Cell collapsing>
                  <Field
                    name="oldpass"
                    component={this.renderInput}
                    type="text"
                    placeholder="Old Password"
                    className=""
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={7}>
                  <b>New Password</b>
                </Table.Cell>
                <Table.Cell collapsing>
                  <Field
                    name="newpass"
                    component={this.renderInput}
                    type="text"
                    placeholder="New Password"
                    className=""
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={7}>
                  <b>Confirm password</b>
                </Table.Cell>
                <Table.Cell collapsing>
                  <Field
                    name="confirmpass"
                    component={this.renderInput}
                    type="text"
                    placeholder="Confirm password"
                    className=""
                  />
                </Table.Cell>
              </Table.Row>
            </Route>
          </Table.Body>
          <Route exact path="/dashboard/user">
            <TableFooter>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Button
                    inverted
                    floated="left"
                    icon
                    labelPosition="left"
                    color="red"
                    size="small"
                    onClick={this.open}
                  >
                    <Icon name="user delete" />
                     Delete
                  </Button>
                  <Confirm
                    size="mini"
                    open={this.state.open}
                    onCancel={this.close}
                    onConfirm={this.onDelete}
                  />
                  <Button
                    floated="right"
                    icon
                    labelPosition="left"
                    color="teal"
                    size="small"
                  >
                    <Icon name="edit" />
                     Save changes
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </TableFooter>
          </Route>
        </Table>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.sign.username,
    password: state.sign.password,
    useremail: state.sign.email,
    role: state.sign.role
  };
};

const formWrapped = reduxForm({
  form: "signin",
})(EditWindow);

export default connect(mapStateToProps, { deleteMe, changeMail, changePass })(
  formWrapped
);
