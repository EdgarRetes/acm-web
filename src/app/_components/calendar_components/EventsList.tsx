import { Moment } from 'moment';
import React, { FC, useState } from 'react'
import useDiaState from '~/app/Hooks/useDiaState';
import { Event } from '~/app/types/EventCalendarType'

interface Props {
  event: Event,
  onDayChange: (dia: Moment) => void
}

const EventsList: FC<Props>= ({event, onDayChange}) => {

  const { setDia } = useDiaState();

  const handleClickEvent = (item: Moment) => {
    setDia(item);
    onDayChange(item)
  }

  return (
    <div className='flex flex-col mb-2 rounded-xl' onClick={() => handleClickEvent(event.date)}>
      <div className={`flex items-center`}>
        <div className="w-1/2 h-[10rem] bg-slate-700 flex items-center justify-center rounded-l-lg">
          IMG
        </div>
        <div className='hover:bg-slate-400 w-full rounded-r-lg pl-3 h-[10rem] flex items-center'>
          {event.title}
        </div>
      </div>
    </div>
  )
}

export default EventsList