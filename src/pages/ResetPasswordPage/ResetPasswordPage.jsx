import React from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import ResetPasswordForm from '../../components/AuthForm/ResetPasswordPage/ResetPasswordForm';
import { useSearchParams } from 'react-router-dom';

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  return (
    <AuthContainer>
      <ResetPasswordForm token={token} />
    </AuthContainer>
  );
}
