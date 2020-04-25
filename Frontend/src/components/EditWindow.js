import React, { Component } from "react";
import { deleteMe } from "../actions"
import { connect } from "react-redux";
import {
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

  onSubmit = () => {
    this.props.deleteMe(this.props.username, this.props.password)
  }

  render() {
    const { username, useremail, role } = this.props;
    return (
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
              <Input placeholder="New E-mail" />
            </Table.Cell>
          </Table.Row>
          <Route exact path="/dashboard/user">
            <Table.Row>
              <Table.Cell width={7}>
                <b>Old Password</b>
              </Table.Cell>
              <Table.Cell collapsing>
                <Input placeholder="Old Password" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={7}>
                <b>New Password</b>
              </Table.Cell>
              <Table.Cell collapsing>
                <Input placeholder=" New Password" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={7}>
                <b>Confirm password</b>
              </Table.Cell>
              <Table.Cell collapsing>
                <Input placeholder="Confirm Password" />
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
                  onConfirm={this.onSubmit}
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
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.sign.username,
    password: state.sign.password
  }
}

export default connect(mapStateToProps, {deleteMe})(EditWindow);