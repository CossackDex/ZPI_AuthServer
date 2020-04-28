import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {signIn} from "../actions";
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

 class LogForm extends Component {

  renderError = ({error, touched}) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({input, placeholder, className, meta, type}) => {
    return (
      <div className={className + "field" + meta.error && meta.touched ? 'error' :''}> {/*Miejsce na klasy Semantic UI*/}
        <input {...input} placeholder={placeholder} type={type} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.signIn(formValues)
  }

  render() {
    return (
      <Segment placeholder>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)} error>
          <Header as="h3" textAlign="center">
            Let's login!
          </Header>
          <Field
            name="username"
            component={this.renderInput}
            type="text"
            placeholder="Username"
            className="error"
          /> {/*Miejsce na klasy Semantic UI*/}
          <Field
            name="password"
            component={this.renderInput}
            type="password"
            placeholder="Password"
            className=""
          />
           {/*Miejsce na klasy Semantic UI*/}

          <Grid centered>
            <GridColumn width={5}>
                <Button content="Login" type="submit" color="teal" />
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
                  <Button color="blue">
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
        <Route path="/dashboard/login">
          <Link to="/dashboard/register">
            <Button content="Sign up" icon="signup" size="big" color="black" />
          </Link>
        </Route>
      </Segment>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "You must enter a username"
  }

  if (!formValues.password) {
    errors.password = "You must enter a password"
  }
  return errors;
}

const formWrapped = reduxForm({
  form: "signin",
  validate
})(LogForm)

export default connect(null, {signIn})(formWrapped);