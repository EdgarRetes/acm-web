import { Moment } from 'moment';
import React, { FC, useState } from 'react'
import { Event } from '~/app/types/EventCalendarType'
import useDiaState from '../hooks/useDiaState';

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
          <img src={'images/backgrounds/random_tech.avif'} className='object-cover h-full rounded-l-lg' />
        </div>
        <div className='hover:bg-[#a371cb] w-full rounded-r-lg pl-3 h-[10rem] flex items-center'>
          {event.title}
        </div>
      </div>
    </div>
  )
}

export default EventsList