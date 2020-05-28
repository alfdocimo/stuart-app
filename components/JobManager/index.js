import React from "react";
import Card from "../Card";
import Button from "../Button";
import InputForm from "../InputForm";
import { FlagIcon, HouseIcon } from "../Icons";
import styles from "./JobManager.module.scss";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext, actions } from "../../core";

import handleGetData from "./handleGetData";

export default function JobManager() {
  const context = useContext(AppContext);
  const [pickUpIconType, setPickUpIconType] = useState("");
  const [dropOffIconType, setDropOffIconType] = useState("");
  const [jobCta, setJobCta] = useState({
    text: "Create job",
    isLoading: false,
  });

  function handlePickUpOnBlur(event) {
    context.dispatch(actions.getPickUpGeo(event.target.value));
    if (event.target.value !== "") {
      handleGetData({
        address: event.target.value,
        setValidIconType: { fn: setPickUpIconType, type: "warning" },
        setInValidIconType: { fn: setPickUpIconType, type: "error" },
        context,
        setLatLonAction: actions.setPickUpLatLon,
        setValidLocationAction: actions.setPickUpIsValid,
      });
    } else {
      setPickUpIconType("");
    }
  }

  function handleDropOffOnBlur(event) {
    context.dispatch(actions.getDropOffGeo(event.target.value));
    if (event.target.value !== "") {
      handleGetData({
        address: event.target.value,
        setValidIconType: { fn: setDropOffIconType, type: "success" },
        setInValidIconType: { fn: setDropOffIconType, type: "error" },
        context,
        setLatLonAction: actions.setDropOffLatLon,
        setValidLocationAction: actions.setDropOffIsValid,
      });
    } else {
      setDropOffIconType("");
    }
  }

  function handleSubmitJob() {
    setJobCta({ text: "Queuing job...", isLoading: true });
    axios
      .post(`${process.env.API_ENDPOINT}/jobs`, {
        pickup: context.state.pickUp.value,
        dropoff: context.state.dropOff.value,
      })
      .then(() => {
        // dispatch toast and display that things went OK
        context.dispatch(actions.setIsValidJobToast(true));
      })
      .catch(() => {
        // On error logic
      })
      .finally(() => {
        setJobCta({ text: "Create job", isLoading: false });
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
          <Button
            text={jobCta.text}
            isDisabled={
              !context.state.pickUp.isValid ||
              !context.state.dropOff.isValid ||
              jobCta.isLoading
            }
            onClick={handleSubmitJob}
          />
        </div>
      </div>
    </Card>
  );
}
