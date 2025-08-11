import React, { useState } from "react";
import available from "../../assets/images/available.png";
import selected from "../../assets/images/selected.png";
import booked from "../../assets/images/booked.png";

const SeatSelecting = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const bookedSeats = [3, 5, 7]; // Example: seats that are already booked (you can change this to your actual data)

  const handleSeatSelect = (seat) => {
    // Set the selected seat if it's available
    if (!bookedSeats.includes(parseInt(seat.split("-")[1]))) {
      setSelectedSeat(seat);
    }
  };

  return (
    <div className="mb-4">
      <div className="grid grid-cols-10 gap-2">
        {Array.from({ length: 20 }).map((_, index) => {
          const seatNumber = index + 1;
          const seatID = `R-${seatNumber}`;

          // Determine the status of the seat
          const isBooked = bookedSeats.includes(seatNumber);
          const isSelected = selectedSeat === seatID;

          return (
            <div
              key={index}
              className={`p-2 cursor-pointer`}
              onClick={() => handleSeatSelect(seatID)}
            >
              <img
                src={
                  isBooked
                    ? booked
                    : isSelected
                    ? selected
                    : available
                }
                alt={`Seat ${seatID}`}
                className="w-full h-auto"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeatSelecting;
