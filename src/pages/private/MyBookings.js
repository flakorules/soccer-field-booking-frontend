import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSetMyBookings } from "../../actions/myBookings.action";
import { BookedSlotsByDateCard } from "../../components/myBookings/BookedSlotsByDateCard";

export const MyBookings = () => {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.myBookings);

  useEffect(() => {
    dispatch(startSetMyBookings());
  }, [dispatch]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="row">
        <div className="col"><h1>My bookings</h1></div>
        
      </div>

      <div className="row">
        {bookings.map((group) => (
          <div className="col-4">
            <BookedSlotsByDateCard group={group} key={group.date} />
          </div>
        ))}
      </div>
    </div>
  );
};
