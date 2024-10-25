import React from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import SignInForm from '../../components/AuthForm/SigninPage/SigninForm';
import css from './SigninPage.module.css';

export default function SigninPage() {
  return (
    <AuthContainer>
      <div className={css.container}>
        <SignInForm />
      </div>
    </AuthContainer>
  );
}
