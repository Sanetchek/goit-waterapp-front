import * as yup from 'yup';

export const userSettingsFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your name!')
    .min(2, 'Name must be at least 2 characters long.')
    .max(20, 'Name must be less than 20 characters long.'),
  email: yup
    .string()
    .required('Please enter your email address.')
    .matches(/^[^@]+@[^@]+\.[^@]+$/, 'Please enter a valid email address.')
    .email('Invalid email.'),
  gender: yup.string().oneOf(['woman', 'man', ''], 'Gender must be either "woman" or "man".'),
  password: yup
    .string()
    .min(4, 'The passsword must contain at least 4 symbols!')
    .max(8, 'The password must contain no more than 8 characters!'),
  newPassword: yup
    .string()
    .min(4, 'The passsword must contain at least 4 symbols!')
    .max(8, 'The password must contain no more than 8 characters!'),
  newPasswordRepeat: yup
    .string()
    .min(4, 'The passsword must contain at least 4 symbols!')
    .max(8, 'The password must contain no more than 8 characters!'),
});
