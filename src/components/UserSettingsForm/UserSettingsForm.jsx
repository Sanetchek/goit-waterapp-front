import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { userSettingsFormSchema } from "./UserSettingsFormSchema";
import {toast} from 'react-hot-toast';

import { selectUser, selectUserAvatar } from "redux/auth/selectors";

import svg from '../../assets/images/sippets.svg';
import css from './UserSettingsForm.module.css';
import {icons} from '../../assets/images/sippets.svg';


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
    watch,
    trigger,
    setValue,
    setValues,
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

  const handleBlur = (field, defaultValue) => {
    if (getValues(field) === '') {
      setValue(field, defaultValue);
    }
  };

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

  return (
    
  )
}
