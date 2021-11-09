import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startBookSlot } from "../../actions/availableSlots.action";

export const AvailableSlotItem = ({ slot }) => {
  const dispatch = useDispatch();

  const onHandleBookSlotClick = () => {
    Swal.fire({
      title: `¿Desea agendar esta reserva para el ${format(
        Date.parse(slot.bookingFrom),
        "yyyy-MM-dd"
      )} desde las ${format(
        Date.parse(slot.bookingFrom),
        "kk:mm"
      )} hasta las ${format(Date.parse(slot.bookingTo), "kk:mm")}?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, agendar`,
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startBookSlot(slot));
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
            className="btn btn-primary ml-3"
            onClick={onHandleBookSlotClick}
          >
            Agendar
          </button>
        </div>
      </div>
    </li>
  );
};
