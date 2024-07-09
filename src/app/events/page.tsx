'use client'

import React from 'react'
import Controls from '../_components/calendar_components/Controls'
import useEventCalendar from '../Hooks/useEventCalendar'
import { clientCallTypeToProcedureType } from '@trpc/client'
import { Grid, Typography } from '@mui/material'
import Day from '../_components/calendar_components/Days'
import ExtraDays from '../_components/calendar_components/ExtraDays'


const Events = () =>  {
    
    const {date, changeMonth, daysGrid} = useEventCalendar();

  return (

    <div className='bg-gradient-to-t from-[#500889] to-[#440674] flex justify-center items-center pb-[5rem]'>
        <div className='bg-[#dfb7ff] bg-opacity-60 h-10/12 w-1/2 flex flex-col justify-center items-center rounded-r-md mt-[8rem]'>
            {/* Controls */}
            <Controls changeMonth={changeMonth} date={date}/>
            {/* Calendar */}
            <Grid container >
                {daysGrid.map((item, i) => (item?.no ? <Day key={i} daysGridLenght={daysGrid.length} i={i} item={item}/> 
                    : <ExtraDays key={i} daysGridLength={daysGrid.length} i={i}/>)
                )}
            </Grid>
        </div>
    </div>
  )
}

export default Events