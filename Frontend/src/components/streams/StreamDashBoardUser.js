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
  useremail: "nutella@gmail.com",
  password: "********",
};

export default class StreamDashBoardUser extends Component {
  state = {};

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  handleDropdownClick = (e, { value }) =>
    this.setState({ usersPerPage: value });
  // handleDropdownClick = (e, d) => this.setState({usersPerPage: d.value});

  render() {
    // const { user } = this.state;
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
          <GridColumn width={8}>
          <EditWindow
          username={user.username}
          useremail={user.useremail}
          ></EditWindow>
            {/* <EditWindow></EditWindow> */}
          </GridColumn>
          {/* <GridColumn width={5}></GridColumn> */}
        </GridRow>
      </Grid>
    );
  }
}
