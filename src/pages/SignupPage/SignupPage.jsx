import React from 'react';
import AuthForm from './AuthForm';
import styles from './SignupPage.module.css';

const SignupPage = () => {
  const handleSuccess = () => {
    console.log('Реєстрація успішна');
  };

  return (
    <div className={styles.signupPage}>
      <AuthForm onSuccess={handleSuccess} />
      <img
        src={`${process.env.PUBLIC_URL}/assets/src/assets/images/water-bottle.png`}
        alt="Water bottle"
        className={styles.waterBottle}
      />
    </div>
  );
};

export default SignupPage;
