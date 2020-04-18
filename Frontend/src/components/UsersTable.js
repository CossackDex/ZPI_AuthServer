import React, { Component } from "react";
import { Table, Button, Icon } from "semantic-ui-react";

export default () => {
  return (
    <Table celled compact definition color="teal" key="teal">
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell>Nr</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Registration Date</Table.HeaderCell>
          <Table.HeaderCell>E-mail address</Table.HeaderCell>
          <Table.HeaderCell>Edit</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>number</Table.Cell>
          <Table.Cell>name</Table.Cell>
          <Table.Cell>registration date</Table.Cell>
          <Table.Cell>e-mail</Table.Cell>
          <Table.Cell>
            <Button
              floated="right"
              icon
              labelPosition="left"
              color="teal"
              size="small"
            >
              <Icon name="edit" /> Edit
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell colSpan="5"></Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
