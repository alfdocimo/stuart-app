export const Types = {
  GET_PICK_UP_GEO: "GET_PICK_UP_GEO",
  GET_DROP_OFF_GEO: "GET_DROP_OFF_GEO",
};

const getPickUpGeo = (payload) => ({
  type: Types.GET_PICK_UP_GEO,
  payload,
});

const getDropOffGeo = (payload) => ({
  type: Types.GET_DROP_OFF_GEO,
  payload,
});

export default { getPickUpGeo, getDropOffGeo };
