import Main from '../../components/Main/Main.jsx';
import css from './WellcomePage.module.css';
export default function WellcomePage(params) {
  return (
    <section className={css.mainContainer}>
      <div className={css.mainWrapperBg}>
        <Main />
      </div>
    </section>
  );
}
