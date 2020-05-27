import axios from "axios";

import { actions } from "../../core";

const getPickUpData = (address, setPickUpIconType, context) =>
  axios
    .post(`${process.env.API_ENDPOINT}/geocode`, { address })
    .then(({ data }) => {
      setPickUpIconType("warning");
      context.dispatch(actions.setPickUpLatLon(data.latitude, data.longitude));
      context.dispatch(actions.setPickUpIsValid(true));
    })
    .catch(() => {
      context.dispatch(actions.setPickUpIsValid(false));
      actions.setPickUpLatLon(undefined, undefined);
      setPickUpIconType("error");
    });

export default getPickUpData;
