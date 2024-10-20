import SignInForm from 'components/AuthForm/SigninPage/SigninForm';
import css from './SigninPage.module.css';
import frameImage from '../../assets/images/SigninPage/Frame.svg';

export default function SigninPage() {
  return (
    <section className={css.container}>
      <div className={css.modal}>
        <h1 className={css.titel}>Sign In</h1>
        <SignInForm />
      </div>

      <img className={css.frame} src={frameImage} alt="Bottle of water" />
    </section>
  );
}
