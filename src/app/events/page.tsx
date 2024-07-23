'use client'

import React, { useEffect, useState } from 'react'
import EventCalendar from '../_components/calendar_components/EventCalendar'
import { EventsData, Event } from '../types/EventCalendarType'

export default function EventsPage() {
  const [data, setData] = useState<EventsData>([])

  return (
    <>
      <EventCalendar event_data={data} onDataChange={(e) => {setData(e)}}/>  
      {/* {event.date.format('DD')} */}
    </>
  )
}