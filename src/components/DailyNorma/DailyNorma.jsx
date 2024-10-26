import React, { useState, useEffect} from 'react';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal.jsx';
import css from './DailyNorma.module.css';
import Modal from 'components/Modal/Modal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../../redux/user/operations.js';
import { selectUserDailyNormWater, selectUserId } from '../../redux/auth/selectors.js';

export default function DailyNorma() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localDailyNormWater, setLocalDailyNormWater] = useState(null);
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const dailyNormWater = useSelector(selectUserDailyNormWater);

useEffect(() => { 
    if (userId) {
      dispatch(getUser(userId)).then((action) => {
        if (action.payload && action.payload.dailyNormWater) {
          setLocalDailyNormWater(action.payload.dailyNormWater);
        }
      });
    }
  }, [dispatch, userId]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (newNorm) => {
    const ml = newNorm * 1000;
    dispatch(updateUser({
      userId,
      userData: { dailyNormWater: ml }
    })).then(() => {
      setLocalDailyNormWater(ml);
      setIsModalOpen(false);
    });
  };

  return (
    <div className={css.normaContainer}>
      <h2 className={css.title}>My daily norma</h2>
      <div className={css.normWater}>
        {(localDailyNormWater ? localDailyNormWater : dailyNormWater) / 1000 || 2.0}L
        <button className={css.editBtn} onClick={openModal}>
          Edit
        </button>
      </div>

      {isModalOpen && (
        <Modal title="My daily norma" onClose={closeModal}>
          <DailyNormaModal onClose={closeModal} onSave={handleSave} />
        </Modal>
      )}
    </div>
  );
}
