import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/operations';
import * as Yup from 'yup';
import styles from './AuthForm.module.css';
import EyeIcon from '../../assets/images/eye-icon.svg';

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const dispatch = useDispatch();

  const getUsernameFromEmail = email => {
    const [username] = email.split('@');
    return username;
  };

  const handleSubmit = async (values, actions) => {
    const { repeatPassword, ...restValues } = values;
    const username = getUsernameFromEmail(restValues.email);

    const updatedValues = {
      ...restValues,
      name: username,
    };

    console.log(updatedValues);
    dispatch(signup(updatedValues));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('This field is required'),
    password: Yup.string().required('This field is required'),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('This field is required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        repeatPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.authForm}>
          <h1 className={styles.signUpTitle}>Sign Up</h1>
          <label>
            Enter your email
            <Field
              type="email"
              name="email"
              placeholder="E-mail"
              className={styles.customInput}
              required
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.errorMessage}
            />
          </label>
          <label>
            Enter your password
            <div className={styles.passwordContainer}>
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className={styles.customInput}
                required
              />
              <img
                src={EyeIcon}
                alt="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.eyeIcon}
              />
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className={styles.errorMessage}
            />
          </label>
          <label>
            Repeat password
            <div className={styles.passwordContainer}>
              <Field
                type={showRepeatPassword ? 'text' : 'password'}
                name="repeatPassword"
                placeholder="Repeat password"
                className={styles.customInput}
                required
              />
              <img
                src={EyeIcon}
                alt="Toggle password visibility"
                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                className={styles.eyeIcon}
              />
            </div>
            <ErrorMessage
              name="repeatPassword"
              component="div"
              className={styles.errorMessage}
            />
          </label>
          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>
          <Link to="/signin" className={styles.signInLink}>
            Sign in
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
