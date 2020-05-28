export const Types = {
  GET_PICK_UP_GEO: "GET_PICK_UP_GEO",
  GET_DROP_OFF_GEO: "GET_DROP_OFF_GEO",
  SET_DROP_OFF_LAT_LON: "SET_DROP_OFF_LAT_LON",
  SET_PICK_UP_LAT_LON: "SET_PICK_UP_LAT_LON",
  SET_DROP_OFF_IS_VALID: "SET_DROP_OFF_IS_VALID",
  SET_PICK_UP_IS_VALID: "SET_PICK_UP_IS_VALID",
  SET_IS_VALID_JOB_TOAST: "SET_IS_VALID_JOB_TOAST",
};

const getPickUpGeo = (payload) => ({
  type: Types.GET_PICK_UP_GEO,
  payload,
});

const getDropOffGeo = (payload) => ({
  type: Types.GET_DROP_OFF_GEO,
  payload,
});

const setPickUpLatLon = (lat, lon) => ({
  type: Types.SET_PICK_UP_LAT_LON,
  lat,
  lon,
});

const setDropOffLatLon = (lat, lon) => ({
  type: Types.SET_DROP_OFF_LAT_LON,
  lat,
  lon,
});

const setPickUpIsValid = (payload) => ({
  type: Types.SET_PICK_UP_IS_VALID,
  payload,
});

const setDropOffIsValid = (payload) => ({
  type: Types.SET_DROP_OFF_IS_VALID,
  payload,
});

const setIsValidJobToast = (payload) => ({
  type: Types.SET_IS_VALID_JOB_TOAST,
  payload,
});

export default {
  getPickUpGeo,
  getDropOffGeo,
  setDropOffLatLon,
  setPickUpLatLon,
  setPickUpIsValid,
  setDropOffIsValid,
  setIsValidJobToast,
};
