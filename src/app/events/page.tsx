'use client'

import React, { useState } from 'react'
import EventCalendar from '../_components/calendar_components/EventCalendar'
import moment from 'moment'
import { EventsData } from '../types/EventCalendarType'

const d: EventsData = [ 
  {
    id: 0,
    date: new Date(),
    popupContent: <>This will show in popup</>,
    title: "Test 0",
    color: '#003'
  },
  {
    id: 1,
    date: moment().subtract(2, 'days'),
    popupContent: <>This will show in popup</>,
    title: "Test 1",
    color: '#342'
  },
]

function EventsPage() {
  const [data, setData] = useState(d)
  return (
    <EventCalendar data = {data} onDataChange={(events) => setData(events)}/>
  )
}

export default EventsPage