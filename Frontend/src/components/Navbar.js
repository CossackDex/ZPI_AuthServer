import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Route, Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeItem: "Admin Dashboard" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleLoggingClick = (e, { path }) => this.setState({ path: path });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        {/* <Route path="/dashboard">
          <Link to="/dashboard/admin">
            <Menu.Item
              name="My account"
              active={activeItem === "My account"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Route> */}
        <Route exact path="/dashboard/admin">
          {/* <Link to="/login"> */}
            <Menu.Item
              name="Admin Dashboard"
              active='true' 
              // active={activeItem === "Admin Dashboard"}
              // onClick={this.handleItemClick}
            />
          {/* </Link> */}
        </Route>
        <Menu.Menu position="right">
          <Route path="/dashboard">
            <Link to="/login">
              <Menu.Item name="logout" onClick={this.handleItemClick} />
            </Link>
          </Route>

          <Route exact path="/dashboard">
            <Link to="/login">
              <Menu.Item name="logout" onClick={this.handleItemClick} />
            </Link>
          </Route>
        </Menu.Menu>
      </Menu>
    );
  }
}
