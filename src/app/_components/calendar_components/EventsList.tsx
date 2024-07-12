import React, { FC, useState } from 'react'
import { Event } from '~/app/types/EventCalendarType'

interface Props {
  event: Event
}

const EventsList: FC<Props>= ({event}) => {

  return (
    <div className='flex flex-col mb-2 hover:bg-slate-400 rounded-xl'>
      <div className={`flex items-center`}>
        <div className="w-1/2 h-[10rem] bg-slate-700 flex items-center justify-center mr-3 rounded-l-lg">
          IMG
        </div>
        {event.title}
      </div>
    </div>
  )
}

export default EventsList