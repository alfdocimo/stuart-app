import React from "react";
import Card from "../Card";
import Button from "../Button";
import InputForm from "../InputForm";
import { FlagIcon, HouseIcon } from "../Icons";
import styles from "./JobManager.module.scss";
import { useContext } from "react";
import { AppContext, actions } from "../../core";

export default function JobManager() {
  const context = useContext(AppContext);
  console.log("JobManager -> context", context);

  return (
    <Card>
      <div className={styles.content}>
        <HouseIcon />
        <InputForm
          text={context.pickUp}
          placeholder="other address"
          onBlur={(event) =>
            context.dispatch(actions.getPickUpGeo(event.target.value))
          }
          onChange={(event) =>
            context.dispatch(actions.getPickUpGeo(event.target.value))
          }
        />

        <FlagIcon />
        <InputForm
          text={context.dropOff}
          onBlur={(event) =>
            context.dispatch(actions.getDropOffGeo(event.target.value))
          }
          onChange={(event) =>
            context.dispatch(actions.getDropOffGeo(event.target.value))
          }
          placeholder="other address"
        />

        <div className={styles.gridCta}>
          <Button
            text="Create Job"
            onClick={() =>
              context.dispatch({ type: "CREATE_PRODUCT", payload: "lol" })
            }
          />
        </div>
      </div>
    </Card>
  );
}
