import React, { Component } from "react";
import UsersTable from "../UsersTable";
import ChangeSiteBar from "../ChangeSiteBar";
import { Grid, GridRow, GridColumn, Dropdown } from "semantic-ui-react";
import {aGetUsers} from "../../actions";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";


const numberOptions = [
  {
    key: 10,
    text: 10,
    value: 10,
  },
  {
    key: 20,
    text: 20,
    value: 20,
  },
  {
    key: 50,
    text: 50,
    value: 50,
  },
  {
    key: 10000000,
    text: "All",
    value: 10000000,
  },
];

class DashBoard extends React.Component {

  state = {
    activePage: 1,
    usersPerPage: numberOptions[0].value,
    users_list: {},
    numberOptions: numberOptions,
  };

  componentDidMount() {
    if (this.props.username && this.props.password) {
    const a = {auth: { username: this.props.username, password: this.props.password }};
    this.props.aGetUsers(a);
  }
    if (this.props.users) {
    const ul = Object.values(this.props.users)
    console.log(ul)
    this.setState({ users_list: ul });
    }
  }

  countPages = (users_list) => {
    return Math.ceil(users_list.length / this.state.usersPerPage);
  };

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  handleDropdownClick = (e, { value }) =>
    this.setState({ usersPerPage: value, activePage: 1 });
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


const mapStateToProps = state => {
  return {
    users: state.admin.users_list,
    username: state.sign.username,
    password: state.sign.password,
  };
}

export default connect(mapStateToProps, {aGetUsers})(DashBoard);