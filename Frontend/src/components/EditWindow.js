import React, { Component } from "react";
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
} from "semantic-ui-react";
import { Route } from "react-router-dom";

export default class EditWindow extends Component {
  render() {
    const { username, useremail, role } = this.props;
    return (
      <Table color="teal">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              {" "}
              <Header as="h4">{username}</Header>
            </Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={10}>
              <b>E-mail</b>
            </Table.Cell>
            <Table.Cell width={5}>{useremail}</Table.Cell>
            <Table.Cell width={5}>
              <Input placeholder="New E-mail" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={10}>
              <b>Old Password</b>
            </Table.Cell>
            <Table.Cell width={5}>**********</Table.Cell>
            <Table.Cell width={5}>
              <Input placeholder="Old Password" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={10}>
              <b>New Password</b>
            </Table.Cell>
            <Table.Cell width={5}>**********</Table.Cell>
            <Table.Cell width={5}>
              <Input placeholder=" New Password" />
            </Table.Cell>
          </Table.Row>
          <Route exact path="/dashboard/user">
            <Table.Row>
              <Table.Cell width={10}>
                <b>Confirm password</b>
              </Table.Cell>
              <Table.Cell width={5}></Table.Cell>
              {/* <Table.Cell width={5}>**********</Table.Cell> */}
              <Table.Cell width={5}>
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
