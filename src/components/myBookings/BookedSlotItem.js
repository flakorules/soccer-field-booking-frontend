import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startCancelBooking } from "../../actions/myBookings.action";

export const BookedSlotItem = ({ slot }) => {
  const dispatch = useDispatch();

  const onHandleCancelBookingClick = () => {
    Swal.fire({
      title: `¿Desea cancelar esta reserva?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, cancelar`,
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startCancelBooking(slot));
      }
    });
  };

  return (
    <li className="list-group-item  ">
      <div className="row">
        <div className="col">
          <FontAwesomeIcon icon={faClock} className="mr-3" size="lg" />{" "}
          {format(Date.parse(slot.bookingFrom), "kk:mm")} -{" "}
          {format(Date.parse(slot.bookingTo), "kk:mm")}
        </div>
        <div className="col justify-content-end">
          <button
            type="button"
            className="btn btn-danger ml-3"
            onClick={onHandleCancelBookingClick}
          >
            Cancelar
          </button>
        </div>
      </div>
    </li>
  );
};
