import React, { Component } from "react";
import UsersList from "../UsersList";
import ChangeSiteBar from "../ChangeSiteBar";
import { Grid, GridRow, GridColumn, Dropdown } from "semantic-ui-react";
import {aGetUsers} from "../../actions";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";



export default () => {
  return (
<div>
  <UsersList/>
</div>
  );
};