import React from 'react';
import styles from './AuthContainer.module.css';
import bottle from "../../assets/images/tablet/bottle_tablet.png";
import bottlex2 from "../../assets/images/tablet/bottle_tablet@2x.png";

const AuthContainer = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.modal}>{children}</div>
      <picture>
        <source srcSet={`${bottlex2} 2x, ${bottle} 1x`} />
        <img
          className={styles.frame}
          src={bottle}
          loading="lazy"
          alt="signin"
        />
      </picture>
    </section>
  );
};

export default AuthContainer;
