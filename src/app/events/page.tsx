

import React from 'react'
import EventCalendar from '../_components/calendar_components/EventCalendar'
import { getServerSession } from 'next-auth'
import { authOptions } from '~/server/auth'

export default async function EventsPage() {
  const session = await getServerSession(authOptions)
  // console.log(session?.user.role)


  return (
    <>
      <EventCalendar >
          <div className={`text-white bg-[#8620b6] rounded-full hover:bg-[#dfb7ff] p-2 ${session?.user.role === 'ADMIN' ? '' : 'hidden'}`}>
            + Evento
          </div> 
      </EventCalendar>  
    </>
  )
}