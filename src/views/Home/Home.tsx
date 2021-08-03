import React, { memo } from 'react';
import {Alert, Button, Container, Form} from "react-bootstrap";
import { Field, Formik, Form as FormWrapper } from "formik";
import validateEmail from "../../utils/helpers/validateEmail";
import validatePassword from "../../utils/helpers/validatePassword";

interface IFormikValues {
  email: string
  password: string
}

export const Home = memo((props: any) => {
  const initialValues: IFormikValues = { email: "", password: "" };
  const onUserLogin = (values: IFormikValues) => {
    //dispatch(authActions.loginUser({...values}));
    console.log(values);
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={onUserLogin}>
        {({ errors, touched }) => {
          return (
            <FormWrapper className="row">
              <Form.Group className="col-xs-12 col-md-6 mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  component={Form.Control}
                  validate={validateEmail}
                />
                {errors.email && touched.email && (
                  <div className="invalid-field">
                    {errors.email}
                  </div>
                )}
              </Form.Group>

              <Form.Group className="col-xs-12 col-md-6 mb-3 " controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Field
                  type="password"
                  name="password"
                  component={Form.Control}
                  validate={validatePassword}
                />
                {errors.password && touched.password && (
                  <div className="invalid-field">
                    {errors.password}
                  </div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Button variant="primary" type="submit" style={{maxWidth: 200}}>
                  Submit
                </Button>
              </Form.Group>
            </FormWrapper>
          )
        }}
      </Formik>
    </Container>
  );
});
