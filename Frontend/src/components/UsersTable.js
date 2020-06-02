import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { Table, Button, Icon, Modal, TableCell } from "semantic-ui-react";
import ModalScreen from "./ModalScreen";
import AdminButtons from "./AdminButtons";
import { aGetUser, aGetUsers, aBanUser, aDeleteUser, aSanction, aForcePass, aUnbanUser } from "../actions"

// export default
 class UsersTable extends Component {

    onSanction = (user) => {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        this.props.aSanction(a, user);
      }
      
    renderSanction(user) {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        if (!user.role && this.props.superuser) {return <button className="ui button secondary" onClick={()=>{this.onSanction(user.username)}}>Sanction</button>}
        else {return null}}

  //  fn zwracjąca Table.row na postawie jednego uzytkoniwak (dicta)
  row = (user) => {
    return (
      <Table.Row>
        <Table.Cell width={1}>{user.id}</Table.Cell>
        <Table.Cell width={2}>{user.username}</Table.Cell>
        <Table.Cell width={2}>{user.email}</Table.Cell>
        <Table.Cell width={2}>{user.created_date}</Table.Cell>
        <Table.Cell width={1}>
          <ModalScreen
          username_edit={user.username}
          useremail_edit={user.email}
          role_edit={user.role}></ModalScreen>
        </Table.Cell>
        <Table.Cell width={1}>{this.renderSanction(user)}</Table.Cell>
        <Table.Cell width={1}>
          <AdminButtons user={user}></AdminButtons>
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

const mapStateToProps = state => {
    return {
        users: state.admin.user,
        username: state.sign.username,
        password: state.sign.password,
        superuser: state.sign.superuser
      };
}

export default connect(mapStateToProps, {aGetUser, aGetUsers, aBanUser, aDeleteUser, aSanction, aForcePass, aUnbanUser})(UsersTable);
