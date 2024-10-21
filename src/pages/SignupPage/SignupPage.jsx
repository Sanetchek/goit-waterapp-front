import React from 'react';
import AuthForm from './AuthForm';
import styles from './SignupPage.module.css';
import waterBottleImage from '../../assets/images/Water bottle.svg';

const SignupPage = () => {
  const handleSuccess = () => {
    console.log('Registration successful');
  };

  return (
    <section className={styles.container}>
      <div className={styles.signupPage}>
        <AuthForm onSuccess={handleSuccess} />
      </div>
      <img
        className={styles.waterBottle}
        src={waterBottleImage}
        alt="Water bottle"
      />
    </section>
  );
};

export default SignupPage;
