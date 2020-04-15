import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Route, Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleLoggingClick = (e, { path }) => this.setState({ path: path });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="help"
          active={activeItem === "help"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Route exact path="/logged">
            <Link to="/login">
              <Menu.Item
                name="logout"
                onClick={this.handleItemClick}
              />
            </Link>
          </Route>
        </Menu.Menu>
      </Menu>
    );
  }
}
