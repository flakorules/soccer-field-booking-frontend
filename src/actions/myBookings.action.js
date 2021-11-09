import { fetchWithToken } from "../helpers/fetchHelper";
import { types } from "../types/types";

export const startSetMyBookings = () => {
  return async (dispatch) => {
    const { errorCode, message, data } = await fetchWithToken(
      "Booking/user",
      {},
      "GET"
    );

    if (errorCode === "000") {
      dispatch(setMyBookings(data));
    }
  };
};

export const startCancelBooking = (booking) => {
  return async (dispatch) => {
    const { errorCode, message, data } = await fetchWithToken(
      `Booking/cancel/${booking.bookingId}`,
      {},
      "PUT"
    );

    if (errorCode === "000") {
      dispatch(cancelBooking(data));
    }
  };
};

const setMyBookings = (bookings) => ({
  type: types.setMyBookings,
  payload: bookings,
});

const cancelBooking = (booking) => ({
  type: types.cancelBooking,
  payload: booking,
});
