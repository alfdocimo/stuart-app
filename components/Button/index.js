import React from "react";
import styles from "./Button.module.scss";
import cx from "classnames";

export default function Button({ text, isDisabled, onClick }) {
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
