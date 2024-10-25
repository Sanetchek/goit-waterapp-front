import clsx from "clsx";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const containerClass = clsx('mainContainer', css.errorContainer);

  return (
    <div className={containerClass}>
      <h1>404 Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
