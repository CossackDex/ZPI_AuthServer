import React, { Component } from "react";
import UsersTable from "../UsersTable";
import ChangeSiteBar from "../ChangeSiteBar";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";
const users_list = [
  {
    id: 0,
    username: "Aston",
    email: "mail@mail.com",
    role: "q",
  },
  {
    id: 4,
    username: "Aston2",
    email: "l@mail.coml@mail.com",
    role: "w",
  },
  {
    id: 3,
    username: "Aston3",
    email: "mail",
    role: "e",
  },
  {
    id: 1,
    username: "Aston4",
    email: "l@mail.com",
    role: "r",
  },
  {
    id: 1,
    username: "Aston5",
    email: "l@mail.com",
    role: "r",
  },
];
export default class StreamDashBoard extends Component {
  state = { activePage: 1, usersPerPage: 2, users_list: users_list };

  countPages = (users_list) => {
    return Math.ceil(users_list.length / this.state.usersPerPage);
  };

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });
  render() {
    const { activePage, usersPerPage, users_list } = this.state;
    return (
      <Grid>
        <GridRow></GridRow>
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
// export default () => {
//     return (
//         <Grid >
//       <GridRow>
//       </GridRow>
//       <GridRow>
//         <GridColumn width={1}></GridColumn>
//         <GridColumn width={14}><UsersTable></UsersTable></GridColumn>
//         <GridColumn width={1}></GridColumn>
//       </GridRow>
//       <GridRow>
//       <GridColumn width={6}></GridColumn>
//         <GridColumn><ChangeSiteBar></ChangeSiteBar></GridColumn>
//         {/* <GridColumn width={5}></GridColumn> */}
//       </GridRow>
//     </Grid>
//     );
//   };
