import React from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import ForgotPasswordForm from 'components/AuthForm/ForgotPasswordPage/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <AuthContainer>
      <ForgotPasswordForm />
    </AuthContainer>
  );
}
