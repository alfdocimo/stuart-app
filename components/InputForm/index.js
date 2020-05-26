import React from "react";
import { useInput } from "../../hooks";
import styles from "./InputForm.module.scss";

export default function InputForm({ text, placeholder }) {
  const { bind } = useInput("");
  return (
    <input
      type="text"
      className={styles.form}
      placeholder={placeholder}
      {...bind}
    />
  );
}
