import axios from "axios";

import { actions } from "../../core";

const getDropOffData = (address, setDropOffIconType, context) =>
  axios
    .post(`${process.env.API_ENDPOINT}/geocode`, { address })
    .then(({ data }) => {
      setDropOffIconType("success");
      context.dispatch(actions.setDropOffLatLon(data.latitude, data.longitude));
      context.dispatch(actions.setDropOffIsValid(true));
    })
    .catch(() => {
      context.dispatch(actions.setDropOffIsValid(false));
      actions.setDropOffLatLon(undefined, undefined);
      setDropOffIconType("error");
    });

export default getDropOffData;
