import clsx from 'clsx';
import Main from '../../components/Main/Main.jsx';
import css from './WellcomePage.module.css';

export default function WellcomePage() {
  const containerClass = clsx('mainContainer', css.mainWrapperBg);
  return (
    <section className={css.wellcomeContainer}>
      <div className={containerClass}>
        <Main />
      </div>
    </section>
  );
}
