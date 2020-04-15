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
  Modal,
  Icon,
} from "semantic-ui-react";

export default class LogForm extends Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  handleConfirm = () => this.setState({ open: false });
  handleCancel = () => this.setState({ open: false });

  render() {
    return (
      <Segment placeholder>
        <Form>
          <Header as="h3" textAlign="center">
            Let's login!
          </Header>
          <Form.Input
            icon="user"
            iconPosition="left"
            //label="Username"
            placeholder="Username"
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            //label="Password"
            type="password"
            placeholder="Password"
          />

          <Grid centered>
            <GridColumn width={5}>
              <Link to="/logged">
                <Button content="Login" color="teal" />
              </Link>
            </GridColumn>
            <GridColumn width={5}>
              <Modal
                trigger={
                  <Button size="mini" onClick={this.show}>
                    Forget password?
                  </Button>
                }
                closeIcon
              >
                <Header icon="repeat" content="Reset password" />
                <Modal.Content>
                  <Header as="h4">Your e-mail:</Header>
                  <Form.Input
                    icon="at"
                    iconPosition="left"
                    //label="Username"
                    placeholder="E-mail"
                  />
                </Modal.Content>
                <Modal.Actions>
                  <Button color="gray">
                    <Icon name="remove" /> Cancel
                  </Button>
                  <Button color="green">
                    <Icon name="checkmark" /> Send
                  </Button>
                </Modal.Actions>
              </Modal>

              {/* <Confirm
                open={this.state.open}
                icon="repeat"
                header="Reset password"
                onCancel={this.handleCancel}
                onConfirm={this.handleConfirm}
              /> */}
            </GridColumn>
          </Grid>
        </Form>

        <Divider horizontal>Or</Divider>
        <Route path="/login">
          <Link to="/register">
            <Button content="Sign up" icon="signup" size="big" color="black" />
          </Link>
        </Route>
      </Segment>
    );
  }
}
