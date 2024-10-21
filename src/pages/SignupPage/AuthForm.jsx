import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './AuthForm.module.css';
import EyeIcon from '../../assets/images/eye-icon.svg';

const AuthForm = ({ onSuccess }) => {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const navigate = useNavigate();

  const getUsernameFromEmail = email => {
    const [username] = email.split('@');
    console.log(`Extracted username: ${username}`);
    return username;
  };

  const handleSubmit = async values => {
    try {
      const response = await fetch(
        'https://waterapp-hfy2.onrender.com/api-docs/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const username = getUsernameFromEmail(values.email);
      onSuccess(username);

      navigate('/signin');
    } catch (error) {
      setError(error.message || 'Connection issues with the server');
    }
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
          {error && <div className={styles.errorMessage}>{error}</div>}
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
