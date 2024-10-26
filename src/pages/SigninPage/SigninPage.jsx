import React from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import SignInForm from '../../components/AuthForm/SigninPage/SigninForm';

export default function SigninPage() {
  return (
    <AuthContainer>
      <SignInForm />
    </AuthContainer>
  );
}
