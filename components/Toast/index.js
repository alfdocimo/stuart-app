import React, { useState } from "react";
import styles from "./Toast.module.scss";
import cx from "classnames";

const noOp = () => {};

export default function Toast({
  text,
  closeOnSeconds = 5000,
  onClose = noOp,
  isVisible,
}) {
  const [shown, setIsShown] = useState(isVisible);

  setTimeout(() => {
    setIsShown(false);
    onClose();
  }, closeOnSeconds);

  return (
    shown && (
      <div
        onClick={onClose}
        className={cx(
          {
            [styles["slide-in-top"]]: shown,
          },
          styles.base
        )}
      >
        {text}
      </div>
    )
  );
}
