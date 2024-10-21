import { useEffect, useState } from "react";
import css from "./DailyNormaModal.module.css"
import GenderRadioGroup from "./GenderRadioGroup/GenderRadioGroup";
import InputField from "./InputField/InputField";
import WaterResult from "./WaterResult/WaterResult";
import InputResult from "./InputResult/InputResult";

// Move the function outside the component
const calculateWaterNorma = (gender, weight, activityTime) => {
  const M = parseFloat(weight) || 0;
  const T = parseFloat(activityTime) || 0;
  return gender === 'woman' ? M * 0.03 + T * 0.4 : M * 0.04 + T * 0.6;
};

export default function DailyNormaModal ({ onClose, onSave }) {
  const [gender, setGender] = useState('woman');
  const [weight, setWeight] = useState('');
  const [activityTime, setActivityTime] = useState('');
  const [waterResult, setWaterResult] = useState(0);
  const [waterToDrink, setWaterToDrink] = useState('');

    useEffect(() => {
        setWaterResult(calculateWaterNorma(gender, weight, activityTime));
    }, [gender, weight, activityTime]);

  const handleSubmit = e => {
    e.preventDefault();
    if (waterToDrink.trim() === "") {
      onSave(waterResult)
    } else {
      onSave(waterToDrink)
    }
  };

  return (<div className={css.modalBackdrop} onClick={onClose}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <p>
          For girl: <span className={css.textBlue}>V=(M*0,03) + (T*0,4)</span>
        </p>
        <p>
          For man: <span className={css.textBlue}>V=(M*0,04) + (T*0,6)</span>
        </p>
        <div className={css.descriptionContainer}>
          <p className={css.descriptionText}><span className={css.textBlue}>*</span> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</p>
        </div>
        <h2>Calculate your rate:</h2>

        <GenderRadioGroup gender={gender} setGender={setGender} />
        <InputField label="Your weight in kilograms:" value={weight} setValue={setWeight} />
        <InputField label="The time of active participation in hours:" value={activityTime} setValue={setActivityTime} />
        <WaterResult result={waterResult} />
      <InputResult value={waterToDrink} setValue={setWaterToDrink} />
            <button className={css.btnSave} onClick={handleSubmit}>Save</button>
    </div>
    </div>)}