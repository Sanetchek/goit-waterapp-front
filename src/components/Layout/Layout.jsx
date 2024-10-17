import React from "react";
import AppBar from "../AppBar/AppBar";

import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <main className={css.main}>{children}</main>
    </>
  );
}
