import React from "react";
import Card from "../Card";
import Button from "../Button";
import InputForm from "../InputForm";
import { FlagIcon, HouseIcon } from "../Icons";
import Marker from "../Marker";
import styles from "./JobManager.module.scss";

export default function JobManager() {
  return (
    <Card>
      <div className={styles.content}>
        <HouseIcon />
        <InputForm text="Some address" placeholder="other address" />

        <FlagIcon />
        <InputForm text="Some address" placeholder="other address" />

        <div className={styles.gridCta}>
          <Button text="Create Job" onClick={() => console.log("Lets gooo")} />
        </div>
      </div>
    </Card>
  );
}
