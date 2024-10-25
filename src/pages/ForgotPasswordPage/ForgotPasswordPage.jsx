import React from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import frameImage from '../../assets/images/Frame.svg';
import css from '../SigninPage/SigninPage.module.css';
import ForgotPasswordForm from 'components/AuthForm/ForgotPasswordPage/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <AuthContainer frameImage={frameImage}>
      <div className={css.container}>
        <ForgotPasswordForm />
      </div>
    </AuthContainer>
  );
}
