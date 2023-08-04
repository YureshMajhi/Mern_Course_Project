import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Register = () => {
  return (
    <>
      <Formik>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 shadow p-3">
              <Form>
                <h1 className="text-center text-muted">Register Form</h1>

                <div className="mb-2">
                  <label htmlFor="firstname">First Name</label>
                  <Field
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form-control"
                  />
                  <ErrorMessage name="firstname">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-2">
                  <label htmlFor="lastname">Last Name</label>
                  <Field
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="form-control"
                  />
                  <ErrorMessage name="lastname">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-2">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                  <ErrorMessage name="email">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-2">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="text"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                  <ErrorMessage name="password">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-2">
                  <label htmlFor="confirm password">Password</label>
                  <Field
                    type="text"
                    name="confirm password"
                    id="confirm password"
                    className="form-control"
                  />
                  <ErrorMessage name="confirm password">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-2">
                  <button className="btn btn-primary">Register</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default Register;
