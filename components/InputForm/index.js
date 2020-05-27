import React from "react";
import { useInput } from "../../hooks";
import styles from "./InputForm.module.scss";

const noOp = () => {};

export default function InputForm({ text, placeholder, onBlur = noOp }) {
  const { bind } = useInput(text);

  function handleOnBlur(event) {
    onBlur(event);
  }

  return (
    <input
      type="text"
      className={styles.form}
      placeholder={placeholder}
      onBlur={handleOnBlur}
      {...bind}
    />
  );
}
