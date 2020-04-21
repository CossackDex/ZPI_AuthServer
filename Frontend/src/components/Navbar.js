import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Route, Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeItem: "Admin Dashboard" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        <Route exact path="/dashboard/admin">
          {/* <Link to="/login"> */}
          <Menu.Item
            name="Admin Dashboard"
            active="true"
            // active={activeItem === "Admin Dashboard"}
            // onClick={this.handleItemClick}
          />
          {/* </Link> */}
          </Route>
          <Route exact path="/dashboard/user">
            {/* <Link to="/dashboard/user"> */}
            <Menu.Item name="My account" active="true" />
            {/* </Link> */}
          </Route>
        
        <Menu.Menu position="right">
          <Route path="/dashboard/admin">
            <Link to="/dashboard/login">
              <Menu.Item name="logout" onClick={this.handleItemClick} />
            </Link>
          </Route>
          <Route path="/dashboard/user">
            <Link to="/dashboard/login">
              <Menu.Item name="logout" onClick={this.handleItemClick} />
            </Link>
          </Route>
        </Menu.Menu>
      </Menu>
    );
  }
}
