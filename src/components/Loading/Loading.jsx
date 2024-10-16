import css from "./Loading.module.css";
import clsx from "clsx";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box className={clsx(css.loadingContainer)}>
      <div className={clsx(css.spinner)}></div>
    </Box>
  );
}
