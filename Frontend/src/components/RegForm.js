import React from "react";
import { Route, Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signUp } from "../actions"
import { Divider, Form, Segment, Header, Button } from "semantic-ui-react";

class RegForm extends React.Component {

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
    if (!formValues.role) {formValues.role = 0}
    if (!formValues.superuser) {formValues.superuser = 0}
    console.log(formValues)
    this.props.signUp(formValues)
  }

  render() {
    return(
    //Prawdopodobnie trzeba będzie zamienić te gotowce od Semantic UI na zwykłe obiekty z klasami od SUI
    <Segment placeholder>
      <Form size="small" onSubmit={this.props.handleSubmit(this.onSubmit)} error>
        <Header as="h3" textAlign="center">
          Let's sign up!
        </Header>
        <Field
          name="username"
          component={this.renderInput}
          type="text"
          placeholder="Username"
          className="error"
        />{/*Miejsce na klasy Semantic UI*/}
          <Field
          name="email"
          component={this.renderInput}
          type="text"
          placeholder="E-mail"
          className=""
        />{/*Miejsce na klasy Semantic UI*/}
        <Field
          name="password"
          component={this.renderInput}
          type="password"
          placeholder="Password"
          className=""
        />{/*Miejsce na klasy Semantic UI*/}
        <Button color="teal" type="submit">Sign up</Button>
      </Form>

      <Divider horizontal>Or</Divider>
      <Route path="/dashboard/register">
        <Link to="/dashboard/login">
          <Button type="submit">Login</Button>
        </Link>
      </Route>
    </Segment>
  );
};
}
const validate = formValues => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "You must enter a username"
  }

  if (!formValues.email) {
    errors.email = "You must enter your email"
  }
  if (!formValues.password) {
    errors.password = "You must enter a password"
  }
  return errors;
}

const formWrapped = reduxForm({
  form: "signup",
  validate
})(RegForm)

export default connect(null, {signUp})(formWrapped);
