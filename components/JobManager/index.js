import React from "react";
import Card from "../Card";
import Button from "../Button";
import InputForm from "../InputForm";
import { FlagIcon, HouseIcon } from "../Icons";
import styles from "./JobManager.module.scss";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext, actions } from "../../core";
import getPickUpData from "./getPickUpData";
import getDropOffData from "./getDropOffData";

export default function JobManager() {
  const context = useContext(AppContext);
  const [pickUpIconType, setPickUpIconType] = useState("");
  const [dropOffIconType, setDropOffIconType] = useState("");

  function handlePickUpOnBlur(event) {
    context.dispatch(actions.getPickUpGeo(event.target.value));
    if (event.target.value !== "") {
      getPickUpData(event.target.value, setPickUpIconType, context);
    } else {
      setPickUpIconType("");
    }
  }

  function handleDropOffOnBlur(event) {
    context.dispatch(actions.getDropOffGeo(event.target.value));
    if (event.target.value !== "") {
      getDropOffData(event.target.value, setDropOffIconType, context);
    } else {
      setDropOffIconType("");
    }
  }

  function handleSubmitJob() {
    axios
      .post(`${process.env.API_ENDPOINT}/jobs`, {
        pickup: context.state.pickUp.value,
        dropoff: context.state.dropOff.value,
      })
      .then(() => {
        // dispatch toast and display that things went OK
      })
      .catch(() => {
        // dispatch toast and display that things went K.O
      });
  }

  return (
    <Card>
      <div className={styles.content}>
        <HouseIcon type={pickUpIconType} />
        <InputForm
          text={context.state.pickUp.value}
          placeholder="Pick up address"
          onBlur={(event) => handlePickUpOnBlur(event)}
        />

        <FlagIcon type={dropOffIconType} />
        <InputForm
          text={context.state.dropOff.value}
          onBlur={(event) => handleDropOffOnBlur(event)}
          placeholder="Drop off address"
        />

        <div className={styles.gridCta}>
          <Button text="Create Job" onClick={handleSubmitJob} />
        </div>
      </div>
    </Card>
  );
}
