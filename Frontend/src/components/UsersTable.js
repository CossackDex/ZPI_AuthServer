import React, { Component } from "react";
import { Table, Button, Icon, Modal, TableCell } from "semantic-ui-react";
import ModalScreen from "./ModalScreen";
import AdminButtons from "./AdminButtons";


export default class UsersTable extends Component {

 
  //  fn zwracjąca Table.row na postawie jednego uzytkoniwak (dicta)
  row = (user) => {
    return (
      <Table.Row>
        <Table.Cell width={1}>{user.id}</Table.Cell>
        <Table.Cell width={2}>{user.username}</Table.Cell>
        <Table.Cell width={2}>{user.email}</Table.Cell>
        <Table.Cell width={2}>{user.role}</Table.Cell>
        <Table.Cell width={2}>
          <ModalScreen
          username={user.username}
          useremail={user.email}
          role={user.role}></ModalScreen>
        </Table.Cell>
        <Table.Cell width={1}>
          <AdminButtons></AdminButtons>
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
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Create Time</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users_list[0] &&
            this.rows(users_list, countPages, activePage, usersPerPage)}
        </Table.Body>
      </Table>
    );
  }
}
