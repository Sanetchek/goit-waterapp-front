import React from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import AuthForm from './AuthForm';
import frameImage from '../../assets/images/Frame.svg';

const SignupPage = () => {
  return (
    <AuthContainer frameImage={frameImage}>
      <AuthForm />
    </AuthContainer>
  );
};

export default SignupPage;
