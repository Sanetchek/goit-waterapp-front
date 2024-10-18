import { useEffect, useState } from "react";
import css from "./DailyNormaModal.module.css"
import GenderRadioGroup from "./GenderRadioGroup/GenderRadioGroup";
import InputField from "./InputField/InputField";
import WaterResult from "./WaterResult/WaterResult";
import InputResult from "./InputResult/InputResult";

const DailyNormaModal = ({ onClose }) => {
    const [gender, setGender] = useState("woman");
    const [weight, setWeight] = useState("");
    const [activityTime, setActivityTime] = useState("");
    const [waterResult, setWaterResult] = useState(0);
    const [waterToDrink, setWaterToDrink] = useState('');

    const calculateWaterNorma = () => {
        const M = parseFloat(weight) || 0;
        const T = parseFloat(activityTime) || 0;
        const V = gender === "woman" ? (M * 0.03) + (T * 0.4) : (M * 0.04) + (T * 0.6)
        return setWaterResult(V);
}

    useEffect(() => {
        calculateWaterNorma();
    }, [gender, weight, activityTime]);

    const handleSubmit = (e) => {
        e.preventDefault();
    console.log(calculateWaterNorma);
    onClose();
    }
    
    return <div>
    <p>For girl: <span className={css.textBlue}>V=(M*0,03) + (T*0,4)</span></p>
    <p>For man: <span className={css.textBlue}>V=(M*0,04) + (T*0,6)</span></p>
        <h2>Calculate your rate:</h2>

        <GenderRadioGroup gender={gender} setGender={setGender} />
        <InputField label="Your weight in kilograms:" value={weight} setValue={setWeight} />
        <InputField label="The time of active participation in hours:" value={activityTime} setValue={setActivityTime} />
        <WaterResult result={waterResult} />
        <InputResult value={waterToDrink} setValue={setWaterToDrink} />
            <button className={css.btnSave} onClick={handleSubmit}>Save</button>
    </div>
}



export default DailyNormaModal;
