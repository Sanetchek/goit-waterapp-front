import React, { useEffect } from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import ResetPasswordForm from '../../components/AuthForm/ResetPasswordPage/ResetPasswordForm';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { selectPasswordReset } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const passwordReset = useSelector(selectPasswordReset);

  useEffect(() => {
    if (passwordReset === true) {
      navigate('/');
    }
  }, [passwordReset, navigate]);

  return (
    <AuthContainer>
      <ResetPasswordForm token={token} />
    </AuthContainer>
  );
}
