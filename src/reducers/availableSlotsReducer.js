import { format } from "date-fns";
import { types } from "../types/types";

const initialState = {
  slots: [],
};

export const availableSlotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setAvailableSlots:
      return {
        ...state,
        slots: action.payload,
      };
    case types.bookSlot:
      return {
        ...state,
        slots: state.slots.map((group) =>
          format(Date.parse(group.date), "yyyy-MM-dd") ===
          format(Date.parse(action.payload.bookingFrom), "yyyy-MM-dd")
            ? {
                ...group,
                slots: group.slots.filter(
                  (booking) => booking.bookingId !== action.payload.bookingId
                ),
              }
            : group
        ),
      };

    default:
      return state;
  }
};
