import React, { Component } from "react";
import { Route, Router, Switch, Link } from "react-router-dom";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Header,
} from "semantic-ui-react";

export default () => {
  return (
    <Segment placeholder>
      <Form size="small">
        <Header as="h3" textAlign="center">
          Let's sign up!
        </Header>
        <Form.Input
          icon="user"
          iconPosition="left"
          //label="Username"
          placeholder="Username"
        />
        <Form.Input
          icon="at"
          iconPosition="left"
          //label="Username"
          placeholder="E-mail"
        />

        <Form.Input
          icon="lock"
          iconPosition="left"
          //label="Password"
          type="password"
          placeholder="Password"
        />

        

        <Button content="Sign up" color="teal" />
      </Form>

      <Divider horizontal>Or</Divider>
      <Route path="/register">
        <Link to="/login">
          <Button content="Login" icon="user" size="big" color="black" />
        </Link>
      </Route>
    </Segment>
  );
};
