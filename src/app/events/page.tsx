'use client'

import React, { useState } from 'react'
import EventCalendar from '../_components/calendar_components/EventCalendar'
import { EventsData } from '../types/EventCalendarType'

const d: EventsData = [ 
  // {
  //   id: 0,
  //   date: moment(),
  //   content: <>Este es el contenido del evento 1</>,
  //   title: "Titulo Evento 1",
  //   color: '#003'
  // },
  // {
  //   id: 1,
  //   date: moment().subtract(2, 'days'),
  //   content: <>Este es el contenido del evento 2</>,
  //   title: "Titulo Evento 2",
  //   color: '#342'
  // },
]
function EventsPage() {
  const [data, setData] = useState(d)
  
  return (
    <EventCalendar data = {data} onDataChange={(events) => setData(events)}/>
  )
}

export default EventsPage