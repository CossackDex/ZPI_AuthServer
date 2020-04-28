import React, { Component } from "react";
import EditWindow from "../EditWindow";
import { connect } from "react-redux";
import history from "../../history";

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

class StreamDashBoardUser extends Component {
  state = {};

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  handleDropdownClick = (e, { value }) =>
    this.setState({ usersPerPage: value });
  // handleDropdownClick = (e, d) => this.setState({usersPerPage: d.value});

  verify = () => {
    if (this.props.role < 0) {
     // history.push(/dashboard/register);
    }
  };

  render() {
    this.verify();
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
          <GridColumn width={5}></GridColumn>
          <GridColumn width={6}>
            <EditWindow></EditWindow>
            {/* <EditWindow></EditWindow> */}
          </GridColumn>
          {/* <GridColumn width={5}></GridColumn> */}
        </GridRow>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    role: state.sign.role,
  };
};

export default connect(mapStateToProps, {})(StreamDashBoardUser);
