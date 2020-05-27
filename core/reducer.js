import { Types } from "./actions";

export default function reducer(state, action) {
  switch (action.type) {
    case Types.GET_PICK_UP_GEO:
      return {
        ...state,
        pickUp: {
          ...state.pickUp,
          value: action.payload,
        },
      };

    case Types.GET_DROP_OFF_GEO:
      return {
        ...state,
        dropOff: {
          ...state.dropOff,
          value: action.payload,
        },
      };

    case Types.SET_PICK_UP_LAT_LON:
      return {
        ...state,
        pickUp: {
          ...state.pickUp,
          latitude: action.lat,
          longitude: action.lon,
        },
      };

    case Types.SET_DROP_OFF_LAT_LON:
      return {
        ...state,
        dropOff: {
          ...state.dropOff,
          latitude: action.lat,
          longitude: action.lon,
        },
      };

    case Types.SET_PICK_UP_IS_VALID:
      return {
        ...state,
        pickUp: {
          ...state.pickUp,
          isValid: action.payload,
        },
      };

    case Types.SET_DROP_OFF_IS_VALID:
      return {
        ...state,
        dropOff: {
          ...state.dropOff,
          isValid: action.payload,
        },
      };
  }
}
