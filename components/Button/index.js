import React from "react";
import styles from "./Button.module.scss";
import cx from "classnames";

const noOp = () => {};

export default function Button({ text, isDisabled, onClick = noOp }) {
  const handleOnclick = () => {
    onClick();
  };
  return (
    <button
      onClick={handleOnclick}
      className={cx(
        {
          [styles.disabled]: isDisabled,
        },
        styles.primary
      )}
    >
      {text}
    </button>
  );
}
