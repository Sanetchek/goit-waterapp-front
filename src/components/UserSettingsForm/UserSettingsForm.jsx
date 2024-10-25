import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { userSettingsFormSchema } from "./UserSettingsFormSchema";
import {toast} from 'react-hot-toast';

import { selectUser, selectUserAvatar } from "redux/auth/selectors";

import svg from '../../assets/images/snippets.svg';
import css from './UserSettingsForm.module.css';
import {icons} from '../../assets/images/snippets.svg';

import { selectUser, selectUserAvatar } from "../../redux/auth/selectors";
import css from './UserSettingsForm.module.css';
import svg from '../../assets/images/snippets.svg';
import { updateUser } from "../../redux/user/operations";

const UserSettingsForm = ({onclose}) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);

  const currentAvatar = useSelector(selectUserAvatar);
  const fileInputRef = useRef(null);

  const [preview, setPreview] = useState(currentAvatar);

  useEffect(() => {
    if (currentAvatar) {
      setPreview(currentAvatar);
    }
  }, [currentAvatar]);

  const onFileChange = event => {
    const selectedAvatar = event.target.files[0];
    if (selectedAvatar) {
      const objectURL = URL.createObjectURL(selectedAvatar);
      setPreview(objectURL);
    }
  };

  const {
    register,
    handleSubmit,
    formState: {errors},
    trigger,
    watch,
  } = useForm({
    resolver: yupResolver(userSettingsFormSchema),
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email,
      gender: currentUser?.gender || 'woman',
      password: currentUser?.password,
      newPassword: currentUser?.newPassword,
      newPasswordRepeat: currentUser?.newPasswordRepeat,
    },
  });

  const onSubmit = async formData=>{
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('gender', formData.gender);
      data.append('password', formData.password);
      data.append('newPassword', formData.newPassword);
      data.append('newPasswordRepeat', formData.newPasswordRepeat);

      if (fileInputRef.current.files[0]) {
        data.append('avatar', fileInputRef.current.files[0]);
      }
      onclose();

      await dispatch(updateUser(data)).unwrap();

      toast.success('We successfully updated your data on server', {
        autoClose: 5000,
      });
    } catch (error) {
      console.log(error);

      toast.error(
        `Error: ${error.message}`,
        {duration: 8000}
      );
    }
  };

<<<<<<< Updated upstream
  return (

  )
}
=======
  const gender = watch('gender');

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const toggleRepeatPasswordVisibility = () => {
      setShowRepeatPassword(!showRepeatPassword);
    };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.imageWrapper}>
        <div className={css.imageContainer}>
          <img className={css.image} src={preview} alt="User avatar" width="75" height="75" />
        </div>
        <label className={css.upload}>
          <input
          className={css.imageInput}
          type="file"
          accept="image/*"
          onChange={onFileChange}
          ref={fileInputRef}
          />
          <svg className={css.uploadIcon} width="18" height="18">
            <use xlinkHref={`${svg}#icon-upload`}></use>
          </svg>
          <p className={css.text}>Upload a photo</p>
        </label>
      </div>

      <div className={css.formWrapper}>
        <div>
          <h2 className={css.inputTitle}>Your gender identity</h2>

          <div className={css.genderInputWrapper}>
            <label className={`${css.genderButton} ${css.text}`}>
              <input
              className={css.genderInput}
              type="radio"
              name="gender"
              value="woman"
              {...register('gender')}
              />
              {errors.gender && <p className={css.error}>{errors.gender.message}</p>}
              <span className={css.iconWrapper}>
                <svg className={css.radioIcon} width="18" height="18">
                  <use xlinkHref={`${svg}#icon-checkbox-${
                    gender === 'man' ? 'checked' : 'unchecked'
                  }`}></use>
                </svg>
              </span>
              Man
            </label>
          </div>
        </div>

        <div className={css.formFlexWrapper}>
          <div className={css.formFlexItem}>
            <div className={css.userInfoWrapper}>
              <div className={css.userInputWrap}>
                <label className={css.userInputTitle} htmlFor="name">
                  Your name
                </label>
                <input
                className={`css.userInput css.text errors.name ? css.error : ''`}
                type="text"
                name="name"
                id="name"
                {...register('name')}
                onBlur={() => trigger('name')}
                />
                {errors.name && <p className={css.error}>{errors.name.message}</p>}
              </div>

              <div className={css.userInputWrap}>
                <label className={css.userInputTitle} htmlFor="email">
                  Email
                </label>
                <input
                className={`${css.userInput} ${css.text} ${errors.email ? css.error : ''}`}
                type="text"
                name="email"
                id="email"
                {...register('email')}
                onBlur={() => trigger('email')}
                />
                {errors.email && <p className={css.error}>{errors.email.message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className={css.header}>Password</h2>

      <div className={css.formGroupPassword}>
        <label className={css.label}>Outdated password:</label>
        <div className={css.inputWrapper}>
          <input
          className={`${css.input} ${errors.password ? css.error : ''}`}
          type={showPassword ? 'text' : 'password'}
          nanme="outdatedPassword"
          placeholder="Enter your password"
          {...register('password')}
          />
          <svg className={css.passwordToggleIcon}
          onClick={togglePasswordVisibility}
          width="20px"
          height="20px"
          >
            <use xlinkHref={`${svg}#${showPassword ? 'icon-eye' : 'icon-eye-slash'}`}/>
          </svg>
        </div>
        {errors.password && <p className={css.errorMessage}>{errors.password.message}</p>}
      </div>

      <div className={css.formGroupPassword}>
        <label className={css.label}>New Password:</label>
        <div className={css.inputWrapper}>
          <input
          className={`${css.input} ${errors.password ? css.error : ''}`}
          type={showPassword ? 'text' : 'password'}
          name="newPassword"
          placeholder="Enter new password"
          {...register('password')}
          />
          <svg
          className={css.passwordToggleIcon}
          onClick={togglePasswordVisibility}
          width="20px"
          height="20px"
          >
            <use xlinkHref={`${svg}#${showPassword ? 'icon-eye' : 'icon-eye-slash'}`} />
          </svg>
        </div>
        {errors.password && <p className={css.errorMessage}>{errors.password.message}</p>}
      </div>

      <div className={css.formGroupPassword}>
        <label className={css.label}>Repeat new password:</label>
        <div className={css.inputWrapper}>
          <input
          className={`${css.input} ${errors.repeatPassword ? css.error : ''}`}
          type={showRepeatPassword ? 'text' : 'password'}
          placeholder="Repeat new password"
          name="repeatPassword"
          {...register('repeatPassword')}
          />
          <svg className={css.passwordToggleIcon}
          onClick={toggleRepeatPasswordVisibility}
          width="20px"
          height="20px"
          >
            <use xlinkHref={`${svg}#${showRepeatPassword ? 'icon-eye' : 'icon-eye-slash'}`} />
          </svg>
        </div>
        {errors.repeatPassword && (
          <p className={css.errorMessage}>{errors.repeatPassword.message}</p>
        )}
      </div>

      <button
      className={`css.submitButton css.text`}
      type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default UserSettingsForm;
>>>>>>> Stashed changes
