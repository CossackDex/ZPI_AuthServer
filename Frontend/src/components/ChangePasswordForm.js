import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Header,
  GridColumn,
  GridRow,
  Modal,
  Icon,
} from "semantic-ui-react";

export default class ChangePasswordForm extends Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  handleConfirm = () => this.setState({ open: false });
  handleCancel = () => this.setState({ open: false });

  render() {
    return (
      // <Route exact path="/dashboard/login/changepassword">
      <Segment placeholder>
        <Form>
          <Header as="h3" textAlign="center">
            Password change required
          </Header>
          <Form.Input type="password" placeholder="Old password" />
          <Form.Input type="password" placeholder="New password" />
          <Form.Input type="password" placeholder="Confirm password" />
          <Grid centered>
            <GridRow width={5} centered >
              <Link to="/dashboard/admin">
                <Button content="Change password" color="teal" />{" "}
                {/* przenosi na dashboard, dla admina */}
              </Link>
              {/* <Link to="/dashboard/user">
                <Button content="Login" color="teal" /> 
              </Link> */}{" "}
              {/* przenosi na dashboard, dla usera */}
            </GridRow>
            
          </Grid>
        </Form>
      </Segment>
      // </Route>
    );
  }
}
