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
    console.log(`Отримане ім'я користувача: ${username}`);
    return username;
  };

  const handleSubmit = async values => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Щось пішло не так');
      }

      const username = getUsernameFromEmail(values.email);
      onSuccess(username);

      navigate('/signin');
    } catch (error) {
      setError(error.message || 'Проблеми з підключенням до сервера');
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Неправильний формат електронної пошти')
      .required("Обов'язкове поле"),
    password: Yup.string().required("Обов'язкове поле"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Паролі мають співпадати')
      .required("Обов'язкове поле"),
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
            <Field type="email" name="email" placeholder="E-mail" required />
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
          <button type="submit">Sign Up</button>
          <Link to="/signin">Sign in</Link>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
