import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/operations';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import styles from './AuthForm.module.css';
import snippets from '../../assets/images/snippets.svg';

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  const dispatch = useDispatch();

  const getUsernameFromEmail = email => {
    const [username] = email.split('@');
    return username;
  };

  const handleSubmit = async (values, actions) => {
    setIsSubmitting(true); // Set loading state when submitting
    const { repeatPassword, ...restValues } = values;
    const username = getUsernameFromEmail(restValues.email);

    const updatedValues = {
      ...restValues,
      name: username,
    };

    try {
      await dispatch(signup(updatedValues));
      actions.resetForm();
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    } finally {
      setIsSubmitting(false); // Reset loading state after submission
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

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
      {({ errors, touched }) => (
        <Form className={styles.authForm}>
          <h1 className={styles.signUpTitle}>Sign Up</h1>
          <div className={styles.field}>
            <label className={styles.fieldLabel}>Enter your email</label>
            <Field
              type="email"
              name="email"
              placeholder="E-mail"
              className={`${styles.customInput} ${
                errors.email && touched.email ? styles.errorInput : ''
              }`}
              required
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.errorMessage}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Enter your password</label>
            <div className={styles.passwordContainer}>
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className={`${styles.customInput} ${
                  errors.password && touched.password ? styles.errorInput : ''
                }`}
                required
              />
              <span onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <svg className={styles.eyeIcon} width="16" height="16">
                    <use href={`${snippets}#icon-eye`}></use>
                  </svg>
                ) : (
                  <svg className={styles.eyeIcon} width="16" height="16">
                    <use href={`${snippets}#icon-eye-slash`}></use>
                  </svg>
                )}
              </span>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className={styles.errorMessage}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Repeat password</label>
            <div className={styles.passwordContainer}>
              <Field
                type={showRepeatPassword ? 'text' : 'password'}
                name="repeatPassword"
                placeholder="Repeat password"
                className={`${styles.customInput} ${
                  errors.repeatPassword && touched.repeatPassword
                    ? styles.errorInput
                    : ''
                }`}
                required
              />
              <span onClick={toggleRepeatPasswordVisibility}>
                {showRepeatPassword ? (
                  <svg className={styles.eyeIcon} width="16" height="16">
                    <use href={`${snippets}#icon-eye`}></use>
                  </svg>
                ) : (
                  <svg className={styles.eyeIcon} width="16" height="16">
                    <use href={`${snippets}#icon-eye-slash`}></use>
                  </svg>
                )}
              </span>
            </div>
            <ErrorMessage
              name="repeatPassword"
              component="div"
              className={styles.errorMessage}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting} // Disable button when submitting
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
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
