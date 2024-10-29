import { Form, Formik, Field, ErrorMessage } from 'formik';
import { toast } from 'react-hot-toast';
import css from '../SigninPage/SigninForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../../redux/auth/operations';
const UserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function ForgotPasswordForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(forgotPassword(values));
    actions.resetForm();
    toast.success('The reset password link was sent to your email!');
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.form} style={{ paddingTop: '113px' }}>
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
          <button className={css.button} type="submit">
            Reset password
          </button>
        </Form>
      )}
    </Formik>
  );
}
