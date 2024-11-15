"use client";

import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  

import { useState } from "react"

const MyCalendar = () => {

  // 350w 282h

    // Example list of dates with pending bookings
    const [pendingBookings, setPendingBookings] = useState([]);
  
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false)

    const handleSelect = (selected) => {
        setDate(selected)   
        setOpen(true)
        console.log(selected)
    }

  
    const isBookingPending = (date) => {
      return pendingBookings.some(
        (bookingDate) =>
          bookingDate.getDate() === date.getDate() &&
          bookingDate.getMonth() === date.getMonth() &&
          bookingDate.getFullYear() === date.getFullYear()
      );
    };
  
    return (
      <>
        <Calendar
          onChange={handleSelect}
          value={date}
          tileClassName={({ date, view }) => {
            if (isBookingPending(date)) {
              return 'pending-booking';
            }
            return null;
          }}
        />

        <Dialog open={open}  onOpenChange={setOpen}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>You have just selected this date: {date.toString()}</DialogTitle>
            <DialogDescription>
                These are the pending bookings you have for this specific date: 
                <button onClick={() => setOpen(false)} className=' mt-6 w-[200px] h-[35px] border border-black rounded-xl flex items-center justify-center'>Entendido</button>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>

      </>
    );
  };
  

export default MyCalendar