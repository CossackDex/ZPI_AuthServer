import React, { Component } from "react";
import EditWindow from "../EditWindow";

import {
  Grid,
  GridRow,
  GridColumn,
  Table,
  Button,
  Icon,
  Input,
  TableFooter,
  Header
} from "semantic-ui-react";

const user = {
  username: "Nutella",
  email: "nutella@gmail.com",
  password: "********",
};

export default class StreamDashBoardUser extends Component {
  state = {};

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  handleDropdownClick = (e, { value }) =>
    this.setState({ usersPerPage: value });
  // handleDropdownClick = (e, d) => this.setState({usersPerPage: d.value});

  render() {
    const { user } = this.state;
    return (
      <Grid>
        <GridRow></GridRow>
        {/* <GridRow>
          <GridColumn width={1}></GridColumn>
          <GridColumn width={14}></GridColumn> 
          <GridColumn width={1}></GridColumn>
        </GridRow> */}
        <GridRow>
          <GridColumn width={4}></GridColumn>
          <GridColumn>
            <EditWindow></EditWindow>
            {/* <Table color="teal">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell> <Header as='h3'>Dexon98</Header></Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width={10}><b>E-mail</b></Table.Cell>
                  <Table.Cell width={5}>E-mail</Table.Cell>
                  <Table.Cell width={5}><Input placeholder="E-mail" /></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell width={10}>
                    <b>Password</b>
                  </Table.Cell>
                  <Table.Cell width={5}>**********</Table.Cell>
                  <Table.Cell width={5}>
                    <Input placeholder="Password" />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
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
            </Table> */}
          </GridColumn>
          {/* <GridColumn width={5}></GridColumn> */}
        </GridRow>
      </Grid>
    );
  }
}
