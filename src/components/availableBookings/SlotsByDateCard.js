import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React from "react";
import { AvailableSlotItem } from "./AvailableSlotItem";

export const SlotsByDateCard = ({ group }) => {
  return (
    <div className="card m-3">
      <div className="card-header bg-dark text-white">
        <h5>
          <FontAwesomeIcon icon={faCalendar} className="mr-3" />
          {format(Date.parse(group.date), "yyyy-MM-dd")}
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        {group.slots.map((slot) => (
          <AvailableSlotItem slot={slot} key={slot.date} />
        ))}
      </ul>
    </div>
  );
};
