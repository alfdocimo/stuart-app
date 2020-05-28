import React, { useState } from "react";
import styles from "./Toast.module.scss";
import cx from "classnames";

export default function Toast({ text, closeOnSeconds, isVisible }) {
  const [shown, setIsShown] = useState(isVisible);

  setTimeout(() => {
    setIsShown(false);
  }, closeOnSeconds);

  return (
    <div
      className={cx(
        {
          [styles["slide-in-top"]]: shown,
          [styles["slide-out-top"]]: !shown,
        },
        styles.base
      )}
    >
      {text}
    </div>
  );
}
