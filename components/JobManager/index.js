import React from "react";
import Card from "../Card";
import Button from "../Button";
import InputForm from "../InputForm";
import { FlagIcon, HouseIcon } from "../Icons";
import styles from "./JobManager.module.scss";
import axios from "axios";
import { useContext } from "react";
import { AppContext, actions } from "../../core";

export default function JobManager() {
  const context = useContext(AppContext);
  console.log("JobManager -> context", context);

  const getData = (address) =>
    axios
      .post("https://stuart-frontend-challenge.now.sh/geocode", { address })
      .then(function ({ data }) {
        context.dispatch(
          actions.setPickUpLatLon(data.latitude, data.longitude)
        );
        context.dispatch(actions.setPickUpIsValid(true));
      })
      .catch(function (error) {
        // set the icon to warning
        context.dispatch(actions.setPickUpIsValid(false));
      });

  function handleOnBlur(event) {
    context.dispatch(actions.getPickUpGeo(event.target.value));
    getData(event.target.value);
  }

  return (
    <Card>
      <div className={styles.content}>
        <HouseIcon />
        <InputForm
          text={context.state.pickUp.value}
          placeholder="Pick up address"
          onBlur={(event) => handleOnBlur(event)}
        />

        <FlagIcon />
        <InputForm
          text={context.state.dropOff.value}
          onBlur={(event) =>
            context.dispatch(actions.getDropOffGeo(event.target.value))
          }
          placeholder="Drop off address"
        />

        <div className={styles.gridCta}>
          <Button text="Create Job" />
        </div>
      </div>
    </Card>
  );
}
