import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSetAvailableSlots } from "../../actions/availableSlots.action";
import { SlotsByDateCard } from "../../components/availableBookings/SlotsByDateCard";

export const AvailableSlots = () => {
  const dispatch = useDispatch();
  const { slots } = useSelector((state) => state.availableSlots);

  useEffect(() => {
    dispatch(startSetAvailableSlots());
  }, [dispatch]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="row">
        <div className="col">
          <h1>Available Slots</h1>
        </div>
      </div>

      <div className="row">
        {slots.map((group) => (
          <div className="col-4">
            <SlotsByDateCard group={group} />
          </div>
        ))}
      </div>
    </div>
  );
};
