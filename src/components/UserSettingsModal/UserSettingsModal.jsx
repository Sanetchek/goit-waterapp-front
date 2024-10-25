<<<<<<< Updated upstream
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import {icons} from '../../assets/images/sippets.svg'
=======
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm.jsx';
import svg from '../../assets/images/snippets.svg'
>>>>>>> Stashed changes
import css from './UserSettingsModal.module.css';

const UserSettingsModal = ({onClose}) => {
  return (
    <div className={css.modalWrapper}>
      <h2 className={css.modalTitle}>Settings</h2>
      <button className={css.modalCloseButton}>
        <svg className={css.closeIcon} width="24" height="24">
          <use xlinkHref={`${svg}#icon-x`}></use>
        </svg>
      </button>
      <UserSettingsForm onClose={onClose}/>
    </div>
  );
}

export default UserSettingsModal;
