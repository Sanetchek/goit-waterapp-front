import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signin } from '../../../redux/auth/operations';
import { Link, useLocation } from 'react-router-dom';
import css from './SigninForm.module.css';
import snippets from '../../../assets/images/snippets.svg';
import * as Yup from 'yup';
import { useState } from 'react';
const UserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Too Short!')
    .max(64, 'Too long!'),
});

export default function SignInForm() {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSubmit = (values, actions) => {
    dispatch(signin(values));
    actions.resetForm();
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <h1 className={css.title}>Sign In</h1>
          <div className={css.field}>
            <label className={css.label}>Enter your email</label>
            <Field
              className={
                errors.email && touched.email ? css.inputInvalid : css.input
              }
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={css.errorMessage}
            />
          </div>

          <div className={css.field}>
            <label className={css.label}>Enter your password </label>
            <div className={css.modulInput}>
              <Field
                className={
                  errors.password && touched.password
                    ? css.inputInvalid
                    : css.input
                }
                name="password"
                placeholder="Password"
                type={passwordVisible ? 'password' : 'text'}
              />
              <span onClick={togglePasswordVisibility} className={css.password}>
                {passwordVisible ? (
                  <svg className="icon-eye-slash" width="16" height="16">
                    <use href={`${snippets}#icon-eye-slash`}></use>
                  </svg>
                ) : (
                  <svg className="icon-eye" width="16" height="16">
                    <use href={`${snippets}#icon-eye`}></use>
                  </svg>
                )}
              </span>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className={css.errorMessage}
            />
          </div>

          <button className={css.button} type="submit">
            Sign In
          </button>
          <div className={css.linkConteiner}>
            <Link className={css.link} to={'/forgot-password'} state={location}>
              Forgot password?
            </Link>
            <Link className={css.link} to={'/signup'} state={location}>
              Sign up
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
