import { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userSettingsFormSchema } from './UserSettingsFormSchema';
import { toast } from 'react-hot-toast';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserSettingsForm.module.css';
import svg from '../../assets/images/snippets.svg';
import { updateUser, updateAvatar } from '../../redux/user/operations';

const UserSettingsForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser) || {};
  const { _id, name, email, gender, avatar } = currentUser;

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(avatar || null); // Start with null to trigger the placeholder
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  useEffect(() => {
    if (avatar) {
      setPreview(avatar);
    } else {
      setPreview(null); // Set to null if no avatar
    }
  }, [avatar]);

  const onFileChange = useCallback(
    async event => {
      const selectedAvatar = event.target.files[0];
      if (selectedAvatar) {
        const objectURL = URL.createObjectURL(selectedAvatar);
        setPreview(objectURL);
        // Dispatch the updateAvatar action with userId and avatarFile
        try {
          await dispatch(
            updateAvatar({ userId: _id, avatarFile: selectedAvatar })
          );
          toast.success('Avatar updated successfully!');
        } catch (error) {
          toast.error('Error updating avatar. Please try again.');
          console.error(error);
        }
      }
    },
    [dispatch, _id] // Added _id to dependencies
  );

  const handleSubmit = async values => {
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(
        ([key, value]) => value !== '' && key !== 'avatar' // Exclude specified fields - поки прибрав !['avatar', 'repeatPassword'].includes(key)
      )
    );

    console.log(filteredValues);

    // Dispatch the updateUser action with userId and filtered values
    try {
      await dispatch(updateUser({ userId: _id, userData: filteredValues }));
      toast.success('User updated successfully!');
    } catch (error) {
      toast.error('Error updating user. Please try again.');
      console.error(error);
    }
  };

  const togglePasswordVisibility = setter => () => {
    setter(prev => !prev);
  };

  // Get the first letter of the username
  const firstLetter = name ? name.charAt(0).toUpperCase() : '';

  const initialValues = {
    name,
    email,
    gender: gender || 'woman',
    oldPassword: '',
    password: '',
    repeatPassword: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSettingsFormSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <div className={css.settingsWrapper}>
            <div className={css.userWrapper}>
              <p className={css.imageTitle}>Your Photo</p>
              <div className={css.imageWrapper}>
                <div className={css.imageContainer}>
                  {preview ? (
                    <img
                      className={css.image}
                      src={preview}
                      loading="lazy"
                      alt="User avatar"
                      width="75"
                      height="75"
                    />
                  ) : (
                    <div className={css.placeholder}>{firstLetter}</div> // Placeholder block
                  )}
                </div>
                <label className={css.upload}>
                  <input
                    className={css.imageInput}
                    type="file"
                    accept="image/*"
                    onChange={event => {
                      onFileChange(event);
                      setFieldValue('avatar', event.currentTarget.files[0]); // Set avatar in Formik values
                    }}
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
                      <Field
                        type="radio"
                        name="gender"
                        value="woman"
                        className={css.genderInput}
                      />
                      Woman
                    </label>

                    <label className={`${css.genderButton} ${css.text}`}>
                      <Field
                        type="radio"
                        name="gender"
                        value="man"
                        className={css.genderInput}
                      />
                      Man
                    </label>
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="p"
                    className={css.error}
                  />
                </div>

                <div className={css.formFlexWrapper}>
                  <div className={css.formFlexItem}>
                    <div className={css.userInfoWrapper}>
                      <div className={css.userInputWrap}>
                        <label className={css.userInputTitle} htmlFor="name">
                          Your name
                        </label>
                        <Field
                          type="text"
                          name="name"
                          id="name"
                          className={`${css.userInput} ${css.userSettings} ${css.text}`}
                        />
                        <ErrorMessage
                          name="name"
                          component="p"
                          className={css.error}
                        />
                      </div>

                      <div className={css.userInputWrap}>
                        <label className={css.userInputTitle} htmlFor="email">
                          Email
                        </label>
                        <Field
                          type="text"
                          name="email"
                          id="email"
                          className={`${css.userInput} ${css.userSettings} ${css.text}`}
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className={css.error}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={css.passwordWrapper}>
              <h2 className={css.passwordTitle}>Password</h2>

              <div className={css.formGroupPassword}>
                <label className={css.label}>Outdated password:</label>
                <div className={css.inputWrapper}>
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    name="oldPassword"
                    className={`${css.input}`}
                    placeholder="Password"
                  />
                  <svg
                    className={css.passwordToggleIcon}
                    onClick={togglePasswordVisibility(setShowPassword)}
                    width="20px"
                    height="20px"
                  >
                    <use
                      xlinkHref={`${svg}#${
                        showPassword ? 'icon-eye' : 'icon-eye-slash'
                      }`}
                    />
                  </svg>
                  <ErrorMessage
                    name="oldPassword"
                    component="p"
                    className={css.errorMessage}
                  />
                </div>
              </div>

              <div className={css.formGroupPassword}>
                <label className={css.label}>New Password:</label>
                <div className={css.inputWrapper}>
                  <Field
                    type={showNewPassword ? 'text' : 'password'}
                    name="password"
                    className={`${css.input}`}
                    placeholder="Password"
                  />
                  <svg
                    className={css.passwordToggleIcon}
                    onClick={togglePasswordVisibility(setShowNewPassword)}
                    width="20px"
                    height="20px"
                  >
                    <use
                      xlinkHref={`${svg}#${
                        showNewPassword ? 'icon-eye' : 'icon-eye-slash'
                      }`}
                    />
                  </svg>
                  <ErrorMessage
                    name="password"
                    component="p"
                    className={css.errorMessage}
                  />
                </div>
              </div>

              <div className={css.formGroupPassword}>
                <label className={css.label}>Repeat new password:</label>
                <div className={css.inputWrapper}>
                  <Field
                    type={showRepeatPassword ? 'text' : 'password'}
                    name="repeatPassword"
                    className={`${css.input}`}
                    placeholder="Password"
                  />
                  <svg
                    className={css.passwordToggleIcon}
                    onClick={togglePasswordVisibility(setShowRepeatPassword)}
                    width="20px"
                    height="20px"
                  >
                    <use
                      xlinkHref={`${svg}#${
                        showRepeatPassword ? 'icon-eye' : 'icon-eye-slash'
                      }`}
                    />
                  </svg>
                  <ErrorMessage
                    name="repeatPassword"
                    component="p"
                    className={css.errorMessage}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={css.buttonWrapper}>
            <button
              type="submit"
              className={`btn btn-blue ${css.button}`}
              disabled={isSubmitting}
            >
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserSettingsForm;
