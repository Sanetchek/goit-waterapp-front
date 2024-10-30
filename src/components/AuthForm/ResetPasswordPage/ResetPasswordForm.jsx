import { Form, Formik, Field, ErrorMessage } from 'formik';
import css from '../SigninPage/SigninForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../../redux/auth/operations';
import { useEffect, useState } from 'react';
import snippets from '../../../assets/images/snippets.svg';
import { useSelector } from 'react-redux';
import { selectPasswordReset } from '../../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';

const UserSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    .min(8, 'Too Short!')
    .max(64, 'Too long!'),
});

export default function ResetPasswordForm({ token }) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    await dispatch(resetPassword({ password: values.password, token }));
    actions.resetForm();
  };
  const navigate = useNavigate();

  const passwordReset = useSelector(selectPasswordReset);

  useEffect(() => {
    if (passwordReset) {
      navigate('/signin');
    }
  }, [passwordReset, navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Formik
      initialValues={{ password: '' }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.form} style={{ paddingTop: '113px' }}>
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
            Reset password
          </button>
        </Form>
      )}
    </Formik>
  );
}
