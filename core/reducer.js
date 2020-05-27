import { Types } from "./actions";

export default function reducer(state, action) {
  switch (action.type) {
    case Types.GET_PICK_UP_GEO:
      // Avoid mutation the state if not necessary
      if (action.payload !== state.pickUp)
        return { ...state, pickUp: action.payload };

    case Types.GET_DROP_OFF_GEO:
      // Avoid mutation the state if not necessary
      if (action.payload !== state.dropOff)
        return { ...state, dropOff: action.payload };
  }
}
