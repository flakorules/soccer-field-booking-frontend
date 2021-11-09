import { fetchWithToken } from "../helpers/fetchHelper";
import { types } from "../types/types";

export const startSetAvailableSlots = () => {
  return async (dispatch) => {
    const { errorCode, message, data } = await fetchWithToken(
      "Booking/available",
      {},
      "GET"
    );

    if (errorCode === "000") {
      dispatch(setAvailableSlots(data));
    }
  };
};

export const startBookSlot = (booking) => {
  return async (dispatch)=>{

    const { errorCode, message, data } = await fetchWithToken(
      `Booking/book/${booking.bookingId}`,
      {},
      "PUT"
    );

    if (errorCode === "000") {
      dispatch(bookSlot(booking));
    }
  }
};

const setAvailableSlots = (slots) => ({
  type: types.setAvailableSlots,
  payload: slots,
});

const bookSlot = (booking) => ({
  type: types.bookSlot,
  payload: booking,
});
