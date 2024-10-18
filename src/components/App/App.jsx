import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import css from './App.module.css';
import snippets from '../../assets/images/sippets.svg';

import Loading from '../Loading/Loading';
import Layout from '../Layout/Layout';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { refreshUser } from '../../redux/auth/operations';
import {
  selectIsRefreshing,
  selectIsAuthenticated,
} from '../../redux/auth/selectors'; // Import the selector

import Modal from '../Modal/Modal'; // Move this import here
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

const WellcomePage = lazy(() =>
  import('../../pages/WellcomePage/WellcomePage')
);
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsAuthenticated); // Get logged-in status

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return isRefreshing ? (
    <Loading />
  ) : (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? ( // If logged in, show HomePage, otherwise show WellcomePage
                <PrivateRoute component={<HomePage />} redirectTo="/login" />
              ) : (
                <WellcomePage />
              )
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/"
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Toaster position="top-right" reverseOrder={false} />

      <div className="mainContainer">
        <h2>
          Ці елементи демонструють загальні стилі та іконки на сайті, під час
          роботи, видалити
        </h2>
        <div className={css.appContainer}>
          <button className="btn btn-blue" onClick={openModal}>
            Open Modal
          </button>

          {isModalOpen && (
            <Modal title="My Modal" onClose={closeModal}>
              <p>This is the modal content!</p>
            </Modal>
          )}
          </div>

        <div>
          <button className="btn">Cancel</button>
          <button className="btn btn-red">Delete</button>
          <button className="btn-text1">Sign in</button>
          <button className="btn-text2">Add water</button>
        </div>

        <div className={css.appContainer}>
          <button className={css.editBtn} onClick={openModal}>
            Edit
          </button>

          {isModalOpen && (
            <Modal title="My daily norma" onClose={closeModal}>
                <DailyNormaModal onClose={closeModal} />
            </Modal>
          )}
        </div>

        <div>
          <svg className="icon-arrow-left" width="24" height="24">
            <use href={`${snippets}#icon-arrow-left`}></use>
          </svg>
          <svg className="icon-logout" width="24" height="24">
            <use href={`${snippets}#icon-logout`}></use>
          </svg>
          <svg className="icon-upload" width="24" height="24">
            <use href={`${snippets}#icon-upload`}></use>
          </svg>
          <svg className="icon-calendar" width="24" height="24">
            <use href={`${snippets}#icon-calendar`}></use>
          </svg>
          <svg className="icon-chevron-down" width="24" height="24">
            <use href={`${snippets}#icon-chevron-down`}></use>
          </svg>
          <svg className="icon-settings" width="24" height="24">
            <use href={`${snippets}#icon-settings`}></use>
          </svg>
          <svg className="icon-eye" width="24" height="24">
            <use href={`${snippets}#icon-eye`}></use>
          </svg>
          <svg className="icon-eye-slash" width="24" height="24">
            <use href={`${snippets}#icon-eye-slash`}></use>
          </svg>
          <svg className="icon-minus" width="24" height="24">
            <use href={`${snippets}#icon-minus`}></use>
          </svg>
          <svg className="icon-pencil" width="24" height="24">
            <use href={`${snippets}#icon-pencil`}></use>
          </svg>
          <svg className="icon-plus-circle" width="24" height="24">
            <use href={`${snippets}#icon-plus-circle`}></use>
          </svg>
          <svg className="icon-plus" width="24" height="24">
            <use href={`${snippets}#icon-plus`}></use>
          </svg>
          <svg className="icon-presentation" width="24" height="24">
            <use href={`${snippets}#icon-presentation`}></use>
          </svg>
          <svg className="icon-trash" width="24" height="24">
            <use href={`${snippets}#icon-trash`}></use>
          </svg>
          <svg className="icon-user" width="24" height="24">
            <use href={`${snippets}#icon-user`}></use>
          </svg>
          <svg className="icon-wrench" width="24" height="24">
            <use href={`${snippets}#icon-wrench`}></use>
          </svg>
          <svg className="icon-x" width="24" height="24">
            <use href={`${snippets}#icon-x`}></use>
          </svg>
        </div>

        <div>
          <form>
            {/* Text Input */}
            <label htmlFor="textInput">Text:</label>
            <input
              type="text"
              id="textInput"
              name="textInput"
              placeholder="Enter text here"
            />
            <br />
            <br />

            {/* Password Input */}
            <label htmlFor="passwordInput">Password:</label>
            <div className="passwordWrap">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="passwordInput"
                name="passwordInput"
                placeholder="Enter password"
                className="error"
              />
              <span onClick={togglePasswordVisibility} className="passwordEye">
                {passwordVisible ? (
                  <svg className="icon-eye-slash" width="24" height="24">
                    <use href={`${snippets}#icon-eye-slash`}></use>
                  </svg>
                ) : (
                  <svg className="icon-eye" width="24" height="24">
                    <use href={`${snippets}#icon-eye`}></use>
                  </svg>
                )}
              </span>
            </div>
            <br />
            <br />

            {/* Telephone Input */}
            <label htmlFor="telInput">Telephone:</label>
            <input
              type="tel"
              id="telInput"
              name="telInput"
              placeholder="Enter phone number"
            />
            <br />
            <br />

            {/* Number Input */}
            <label htmlFor="numberInput">Number:</label>
            <input
              type="number"
              id="numberInput"
              name="numberInput"
              placeholder="Enter a number"
            />
            <br />
            <br />

            {/* Date Input */}
            <label htmlFor="dateInput">Date:</label>
            <input type="date" id="dateInput" name="dateInput" />
            <br />
            <br />

            {/* Time Input */}
            <label htmlFor="timeInput">Time:</label>
            <input type="time" id="timeInput" name="timeInput" />
            <br />
            <br />

            {/* DateTime Local Input */}
            <label htmlFor="datetimeLocalInput">Date & Time:</label>
            <input
              type="datetime-local"
              id="datetimeLocalInput"
              name="datetimeLocalInput"
            />
            <br />
            <br />

            {/* Month Input */}
            <label htmlFor="monthInput">Month:</label>
            <input type="month" id="monthInput" name="monthInput" />
            <br />
            <br />

            {/* Week Input */}
            <label htmlFor="weekInput">Week:</label>
            <input type="week" id="weekInput" name="weekInput" />
            <br />
            <br />

            {/* Email Input */}
            <label htmlFor="emailInput">Email:</label>
            <input
              type="email"
              id="emailInput"
              name="emailInput"
              placeholder="Enter your email"
            />
            <br />
            <br />

            {/* Textarea */}
            <label htmlFor="textareaInput">Textarea:</label>
            <textarea
              id="textareaInput"
              name="textareaInput"
              placeholder="Write your message here"
            ></textarea>
            <br />
            <br />

            {/* Select Input */}
            <label htmlFor="selectInput">Select:</label>
            <select id="selectInput" name="selectInput">
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <br />
            <br />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Layout>
  );
};
