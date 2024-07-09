'use client'

import React, { useState } from 'react'
import Controls from '../_components/calendar_components/Controls'
import useEventCalendar from '../Hooks/useEventCalendar'
import { clientCallTypeToProcedureType } from '@trpc/client'
import { Grid, Typography } from '@mui/material'
import Day from '../_components/calendar_components/Days'
import ExtraDays from '../_components/calendar_components/ExtraDays'
import { EventsData } from '../types/EventCalendarType'
import {FC} from 'react'
import moment from 'moment'

interface Props {
    data: EventsData
    onDataChange?: (events: EventsData) => void;
}


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

// const Events: FC<Props> = ({data, onDataChange}) =>  {
const EventCalendar = () =>  {
    
    const {date, changeMonth, daysGrid} = useEventCalendar();
    
    const [data_2, setdata] = useState(d)

  return (

    <div className='bg-gradient-to-t from-[#500889] to-[#440674] flex justify-center items-center pb-[5rem]'>
        <div className='bg-[#dfb7ff] bg-opacity-60 h-10/12 w-1/2 flex flex-col justify-center items-center rounded-r-md mt-[8rem]'>
            {/* Controls */}
            <Controls changeMonth={changeMonth} date={date}/>
            {/* Calendar */}
            <Grid container >
                {daysGrid.map((item, i) => (item?.no ? 
                    <Day key={i} daysGridLenght={daysGrid.length} i={i} item={item} events={data_2.filter(d => item.date.isSame(d.date, 'day'))}/> 
                    : <ExtraDays key={i} daysGridLength={daysGrid.length} i={i}/>)
                )}
            </Grid>
        </div>
    </div>
  )
}

export default EventCalendar