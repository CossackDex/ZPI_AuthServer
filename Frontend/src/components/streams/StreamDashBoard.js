import React, { Component } from "react";
import UsersTable from "../UsersTable";
import ChangeSiteBar from "../ChangeSiteBar";
import { Grid, GridRow, GridColumn, Dropdown } from "semantic-ui-react";

const users_list = [1,2,3,4,5,6,7,8,9,10,11,12,15,17].map(x => 
  ({
    id: x,
    username: "Aston" + x,
    email: "mail" + x + "@mail.com",
    role: "role" + x
  })
)


// const users_list = [
//   {
//     id: 1,
//     username: "Aston",
//     email: "mail@mail.com",
//     role: "q",
//   },
//   {
//     id: 2,
//     username: "Aston2",
//     email: "l@mail.coml@mail.com",
//     role: "w",
//   },
//   {
//     id: 3,
//     username: "Aston3",
//     email: "mail",
//     role: "e",
//   },
//   {
//     id: 4,
//     username: "Aston4",
//     email: "l@mail.com",
//     role: "r",
//   },
//   {
//     id: 5,
//     username: "Aston5",
//     email: "l@mail.com",
//     role: "r",
//   },
//   {
//     id: 6,
//     username: "Aston",
//     email: "mail@mail.com",
//     role: "q",
//   },
//   {
//     id: 7,
//     username: "Aston2",
//     email: "l@mail.coml@mail.com",
//     role: "w",
//   },
//   {
//     id: 8,
//     username: "Aston3",
//     email: "mail",
//     role: "e",
//   },
//   {
//     id: 9,
//     username: "Aston4",
//     email: "l@mail.com",
//     role: "r",
//   },
//   {
//     id: 10,
//     username: "Aston5",
//     email: "l@mail.com",
//     role: "r",
//   },
//   {
//     id: 11,
//     username: "Aston5",
//     email: "l@mail.com",
//     role: "r",
//   },
//   {
//     id: 12,
//     username: "Aston5",
//     email: "l@mail.com",
//     role: "r",
//   }
// ];

const numberOptions = [
  {
    key: 3,
    text: 3,
    value: 3,
  },
  {
    key: 5,
    text: 5,
    value: 5,
  },
  {
    key: 10,
    text: 10,
    value: 10,
  },
  {
    key: 15,
    text: 15,
    value: 15,
  },
];

export default class StreamDashBoard extends Component {
  state = {
    activePage: 1,
    usersPerPage: numberOptions[0].value,
    users_list: users_list,
    numberOptions: numberOptions,
  };

  countPages = (users_list) => {
    return Math.ceil(users_list.length / this.state.usersPerPage);
  };

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  handleDropdownClick = (e, { value }) =>
    this.setState({ usersPerPage: value });
  // handleDropdownClick = (e, d) => this.setState({usersPerPage: d.value});

  render() {
    const { activePage, usersPerPage, users_list, numberOptions } = this.state;
    return (
      <Grid>
        <GridRow>
          <Dropdown
            inline
            options={numberOptions}
            defaultValue={numberOptions[0].value}
            onChange={this.handleDropdownClick}
          />
        </GridRow>
        <GridRow>
          <GridColumn width={1}></GridColumn>
          <GridColumn width={14}>
            <UsersTable
              users_list={users_list}
              activePage={activePage}
              usersPerPage={usersPerPage}
              countPages={this.countPages(users_list)}
            ></UsersTable>
          </GridColumn>
           <GridColumn width={1}></GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width={6}></GridColumn>
          <GridColumn>
            <ChangeSiteBar
              activePage={activePage}
              pages={this.countPages(users_list)} //podmienic na dane z serwera
              handlePaginationChange={this.handlePaginationChange}
            ></ChangeSiteBar>
          </GridColumn>
          {/* <GridColumn width={5}></GridColumn> */}
        </GridRow>
      </Grid>
    );
  }
}
