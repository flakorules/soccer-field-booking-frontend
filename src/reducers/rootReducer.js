import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { availableSlotsReducer } from "./availableSlotsReducer";
import { myBookingsReducer } from "./myBookingsReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  myBookings: myBookingsReducer,
  availableSlots: availableSlotsReducer,
  ui: uiReducer,
});
