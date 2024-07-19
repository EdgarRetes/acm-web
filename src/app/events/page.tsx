

import React from 'react'
import EventCalendar from '../_components/calendar_components/EventCalendar'
import { getServerSession, Session } from 'next-auth'
import { authOptions } from '~/server/auth'

export default async function EventsPage() {
  const session: Session | null = await getServerSession(authOptions)
  // console.log(session?.user.role)


  return (
    <>
      <EventCalendar session={session} />
    </>
  )
}