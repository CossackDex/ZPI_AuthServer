import React, { Component } from "react";
import { Table, Button, Icon, Tab } from "semantic-ui-react";
export default class UsersTable extends Component {
  //  fn zwracjąca Table.row na postawie jednego uzytkoniwak (dicta)
  row = (user) => {
    return (
      <Table.Row>
        <Table.Cell width={1}>{user.id}</Table.Cell>
        <Table.Cell width={2}>{user.username}</Table.Cell>
        <Table.Cell width={3}>{user.email}</Table.Cell>
        <Table.Cell width={2}>{user.role}</Table.Cell>
        <Table.Cell width={1}>
          <Button
            floated="left"
            icon
            labelPosition="left"
            color="teal"
            size="small"
          >
            <Icon name="edit" />
             Edit
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  };
  rows = (users_list, countPages, activePage, usersPerPage) => {
    const activeList = []; //lista wyswietlana na aktywnej stronie
    // users_count = Jeśli nie jest ostania strona ? ilość na stronę : ilosć uży.% ilosć uż na str.
    const users_count =
      countPages !== activePage
        ? usersPerPage
        : users_list.length % usersPerPage || usersPerPage;

    for (let i = 0; i < users_count; i++) {
      activeList.push(
        this.row(users_list[(activePage - 1) * usersPerPage + i])
      );
    }

    console.log(activeList);
    return activeList;
  };

  render() {
    const { users_list, activePage, usersPerPage, countPages } = this.props;
    return (
      // <Table celled compact definition color="teal" key="teal">
      <Table color="teal">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>mail</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users_list[0] &&
            this.rows(users_list, countPages, activePage, usersPerPage)}
        </Table.Body>
      </Table>

      // <Table color="teal">
      //   {/* <Table.Header fullWidth> */}
      //   <Table.Header>
      //     <Table.Row>
      //                 <Table.HeaderCell>Id</Table.HeaderCell>
      //                 <Table.HeaderCell>Username</Table.HeaderCell>
      //                 <Table.HeaderCell>E-mail</Table.HeaderCell>
      //                 <Table.HeaderCell>Role</Table.HeaderCell>
      //       <Table.HeaderCell>Edit</Table.HeaderCell>
      //     </Table.Row>
      //   </Table.Header>
      //   <Table.Body>
      //     {/* tu wyświtlam wiersze które odpowiadają numerowi strony activePage */}
      //     {users_list[0] && this.rows(users_list, countPages, activePage, usersPerPage)}
      //   </Table.Body>
      //   <Table.Footer fullWidth>
      //     <Table.Row>
      //         <Table.HeaderCell colSpan="5"></Table.HeaderCell>
      //     </Table.Row>
      //   </Table.Footer>
      // </Table>
    );
  }
}
