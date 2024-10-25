import React from 'react';
import css from './GenderRadioGroup.module.css';

const GenderRadioGroup = ({ gender, setGender }) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        <input
          className={css.input}
          type="radio"
          name="gender"
          value="women"
          checked={gender === 'woman'}
          onChange={() => setGender('woman')}
        />
        For women
      </label>
      <label className={css.label}>
        <input
          className={css.input}
          type="radio"
          name="gender"
          value="man"
          checked={gender === 'man'}
          onChange={() => setGender('man')}
        />
        For man
      </label>
    </div>
  );
};
export default GenderRadioGroup;
