import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './DailyNormaModal.module.css';
import { selectUserGender } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

// Calculation function
const calculateWaterNorma = (gender, weight, activityTime) => {
  const M = parseFloat(weight) || 0;
  const T = parseFloat(activityTime) || 0;
  return gender === 'woman' ? M * 0.03 + T * 0.4 : M * 0.04 + T * 0.6;
};

// Form validation schema
const validationSchema = Yup.object().shape({
  waterToDrink: Yup.number().min(1, 'Weight must be greater than 0').required('Enter how much water you will drink'),
});

export default function DailyNormaModal({ onClose, onSave }) {
  const userGender = useSelector(selectUserGender);
  const [gender, setGender] = useState(userGender || 'woman');
  const [weight, setWeight] = useState(0);
  const [activityTime, setActivityTime] = useState(0);
  const [waterResult, setWaterResult] = useState(0);

  // Recalculate water norm whenever gender, weight, or activityTime changes
  useEffect(() => {
    setWaterResult(calculateWaterNorma(gender, weight, activityTime));
  }, [gender, weight, activityTime]);

  return (
    <div className={css.modalContent}>
      <div className={css.formulaWrap}>
        <p className={css.formulaLabel}>
          For women: <span className={css.textBlue}>V=(M*0.03) + (T*0.4)</span>
        </p>
        <p className={css.formulaLabel}>
          For men: <span className={css.textBlue}>V=(M*0.04) + (T*0.6)</span>
        </p>
      </div>
      <div className={css.descriptionContainer}>
        <p className={css.descriptionText}>
          <span className={css.textBlue}>*</span> V is the volume of water
          required in liters per day, M is your weight, and T is the duration of
          intense activity in hours (set to 0 if none).
        </p>
      </div>

      <h2 className={css.calcutatorTitle}>Calculate your rate:</h2>

      <Formik
        initialValues={{ waterToDrink: 0, weight: 0, activityTime: 0 }}
        validationSchema={validationSchema}
        onSubmit={values => {
          onSave(parseFloat(values.waterToDrink));
          onClose(); // Close modal after saving
        }}
      >
        {() => (
          <Form>
            <div className={css.genderWrapper}>
              <label className={css.genderLabel}>
                <input
                  className={css.genderInput}
                  type="radio"
                  name="gender"
                  value="woman"
                  checked={gender === 'woman'}
                  onChange={() => setGender('woman')}
                />
                For women
              </label>
              <label className={css.genderLabel}>
                <input
                  className={css.genderInput}
                  type="radio"
                  name="gender"
                  value="man"
                  checked={gender === 'man'}
                  onChange={() => setGender('man')}
                />
                For men
              </label>
            </div>

            <div className={css.fieldWrapper}>
              <label className={css.fieldLabel}>
                Your weight in kilograms:
                <input
                  className={css.fieldInput}
                  type="number"
                  name="weight"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  step="0.01"
                />
                <ErrorMessage
                  name="weight"
                  component="p"
                  className={css.errorMessage}
                />
              </label>
            </div>

            <div className={css.fieldWrapper}>
              <label className={css.fieldLabel}>
                The time of active participation in hours:
                <input
                  className={css.fieldInput}
                  type="number"
                  name="activityTime"
                  value={activityTime}
                  onChange={e => setActivityTime(e.target.value)}
                  step="0.01"
                />
                <ErrorMessage
                  name="activityTime"
                  component="p"
                  className={css.errorMessage}
                />
              </label>
            </div>

            <p>
              The required amount of water per day:{' '}
              <span className={css.textBlue}>{waterResult.toFixed(1)} L</span>
            </p>

            <div className={css.resultWrapper}>
              <label className={css.resultLabel}>
                <h2 className={css.calcutatorTitle}>
                  Write down how much water you will drink:
                </h2>
                <Field
                  className={css.resultInput}
                  type="number"
                  name="waterToDrink"
                  step="0.01"
                />
                <ErrorMessage
                  name="waterToDrink"
                  component="p"
                  className={css.errorMessage}
                />
              </label>
            </div>

            <button className={css.btnSave} type="submit">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
