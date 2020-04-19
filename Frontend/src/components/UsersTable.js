import React, { Component } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
export default class UsersTable extends Component {
  //  fn zwracjąca Table.row na postawie jednego uzytkoniwak (dicta)
  row = (user) => {
    return (
      <Table.Row>
                  <Table.Cell>{user.id}</Table.Cell>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
        <Table.Cell>
          <Button
            floated="right"
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

    // Operator warunkowy
    // warunek ? wyr1 : wyr2 
    // console.log("Opłata wynosi " + (isMember ? "$2.00" : "$10.00"));
    // console.log("Opłata wynosi " + (zarejestrowany == 1) ? "$2.00" : "$10.00");

    // users_count = usersPerPage
    // users_count = warunek ? wyr1 : wyr2 
    // lastPage = users_list.length % usersPerPage
    // users_count = Jeśli nie jest ostania strona ? ilość na stronę : ilosć uży.% ilosć uż na str.
    const users_count = countPages!==activePage ? usersPerPage : (users_list.length % usersPerPage) || usersPerPage
    // ((activePage - 1) * usersPerPage)
    // const nazwa = imie || "anonim"

    for (let i = 0; i < users_count; i++) {
        activeList.push(
          this.row(users_list[(activePage - 1) * usersPerPage + i])
        );
      }
    
    // const start_index = usersPerPage*(activePage - 1)
    // for (let i = start_index; i < start_index+usersPerPage; i++) {
    //   activeList.push(
    //     this.row(users_list[i])
    //   );
    // }

    console.log(activeList);
    return activeList

    const newList = []; // newList = [[], [], [], []]
    // users_list.length = 10
    //  userPP = 2
    // countPages = 5

    if (users_list % countPages === 0) {
      for (let i = 0; i < users_list.length - usersPerPage; i += usersPerPage) {
        const pageList = [];
        for (let j = 0; j < usersPerPage; j++) {
          pageList.push(this.row(users_list[i + j]));
        }
        newList.push(pageList);
      }
    } else {
      for (let i = 0; i < users_list.length - usersPerPage; i += usersPerPage) {
        const pageList = [];
        for (let j in usersPerPage) {
          pageList.push(users_list[i + j]);
        }
        newList.push(pageList);
      }
    } // nowa_lista = cosssss //
    console.log(newList);
    return newList[activePage - 1];
  };

  render() {
    const { users_list, activePage, usersPerPage, countPages } = this.props;
    return (
      <Table celled compact definition color="teal" key="teal">
        <Table.Header fullWidth>
          <Table.Row>
                      <Table.HeaderCell>Id</Table.HeaderCell>
                      <Table.HeaderCell>Username</Table.HeaderCell>
                      <Table.HeaderCell>E-mail</Table.HeaderCell>
                      <Table.HeaderCell>Role</Table.HeaderCell>
             <Table.HeaderCell>Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {/* tu wyświtlam wiersze które odpowiadają numerowi strony activePage */}
          {this.rows(users_list, countPages, activePage, usersPerPage)}
          {/* {this.row(users_list={users_list})} */}
          {/* {users_list.map((x) => this.row(x))} */}
          {/* <Table.Row>
          <Table.Cell>number</Table.Cell>
          <Table.Cell>name</Table.Cell>
          <Table.Cell>registration date</Table.Cell>
          <Table.Cell>e-mail</Table.Cell>
          <Table.Cell>
            <Button
              floated="right"
              icon
              labelPosition="left"
              color="teal"
              size="small"
            >
              <Icon name="edit" /> Edit
            </Button>
          </Table.Cell>
        </Table.Row> */}
              
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
              <Table.HeaderCell colSpan="5"></Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}
