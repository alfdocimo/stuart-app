import axios from "axios";

const handleGetData = ({
  address,
  setValidIconType,
  setInValidIconType,
  context,
  setLatLonAction,
  setValidLocationAction,
}) =>
  axios
    .post(`${process.env.API_ENDPOINT}/geocode`, { address })
    .then(({ data }) => {
      setValidIconType.fn(setValidIconType.type);
      context.dispatch(setLatLonAction(data.latitude, data.longitude));
      context.dispatch(setValidLocationAction(true));
    })
    .catch(() => {
      context.dispatch(setValidLocationAction(false));
      setLatLonAction(undefined, undefined);
      setInValidIconType.fn(setInValidIconType.type);
    });

export default handleGetData;
