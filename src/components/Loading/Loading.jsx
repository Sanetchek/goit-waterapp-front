import css from "./Loading.module.css";
import clsx from "clsx";

export default function Loading() {
  return (
    <div className={clsx(css.loadingContainer)}>
      <div className={clsx(css.spinner)}></div>
    </div>
  );
}
