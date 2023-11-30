import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const MyCalendar = () => {
     
      const [data,setdata]=useState([]);
       const getCalanderData=async()=>{
        try {
            const responce = await axios.get(
              "https://crm-backend-1qcz.onrender.com/api/v1/get_calander_data"
            );
            setdata(responce?.data?.lead);
            } catch (error) {
            console.log(error);
          }

       };

   useEffect(()=>{
      getCalanderData();
   },[])

  const localizer = momentLocalizer(moment);
  const aaaaa=[];
  data.map((leads)=>{
        console.log(leads)
        aaaaa.push({'title':leads.massage_of_calander,'start':leads.followup_date,'end':leads.followup_date})
  })
  console.log(aaaaa)
  const events = aaaaa;

  const handleEventSelect = (event) => {
   
    alert(`${event.title}`);
  };

  return (
    <div>
    <Calendar
      localizer={localizer}
      events={aaaaa}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 400 }}
      onSelectEvent={handleEventSelect} 
    />
  </div>
  );
};

export default MyCalendar;
