import { format } from "date-fns";
import { types } from "../types/types";

const initialState = {
  bookings: [],
};

export const myBookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setMyBookings:
      return {
        ...state,
        bookings: action.payload,
      };

    /* case types.cancelBooking:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.bookingId !== action.payload
        ),
      }; */

    case types.cancelBooking:
      return {
        ...state,
        bookings: state.bookings.map((group) =>
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
