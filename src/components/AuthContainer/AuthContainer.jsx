import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthContainer.module.css';

const AuthContainer = ({
  children,
  frameImage,
  frameAlt = 'Bottle of water',
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.modal}>{children}</div>
      {frameImage && (
        <img className={styles.frame} src={frameImage} alt={frameAlt} />
      )}
    </section>
  );
};

AuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
  frameImage: PropTypes.string.isRequired,
  frameAlt: PropTypes.string,
};

export default AuthContainer;
