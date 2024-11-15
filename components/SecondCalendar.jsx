"use client"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"

export default function SecondCalendar() {

    const [selected, setSelected] = useState();
    const [currentSelected, setCurrentSelected] = useState([]);

    const handleSelected = (selected) => {
        setSelected(selected)
        setCurrentSelected(selected.reverse()[0])
    }
   

    return (      
        <Calendar 
            mode="multiple" 
            selected={selected} 
            onSelect={handleSelected} 
            className="rounded-md border shadow"
        />
    );
}
