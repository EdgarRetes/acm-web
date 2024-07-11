'use client'

import React, { useEffect, useState } from 'react'
import { clientCallTypeToProcedureType } from '@trpc/client'
import { DialogContent, DialogContentText, Grid, Typography } from '@mui/material'
import {FC} from 'react'
import moment, { Moment } from 'moment'
import { EventsData } from '~/app/types/EventCalendarType'
import useEventCalendar from '~/app/Hooks/useEventCalendar'
import Controls from './Controls'
import Day from './Days'
import ExtraDays from './ExtraDays'
import useDiaState from '~/app/Hooks/useDiaState'

interface Props {
    data: EventsData
    onDataChange?: (events: EventsData) => void;
}

const EventCalendar: FC<Props> = ({data, onDataChange}) =>  {
    const {date, changeMonth, daysGrid} = useEventCalendar();

// New event
    const addNewEventHandler = (title: string, content: string, date: Moment) => {
      if(title !== '' && content !== '') {
        const newDataArray = [...data]
        newDataArray.push({
          title, 
          popupContent: <DialogContent>
            <DialogContentText>{content}</DialogContentText>
          </DialogContent>,
          date,
          color: '#fff'
        })
        onDataChange?.(newDataArray)
      }
    }
// unused

    const { dia, setDia } = useDiaState();

    const handleDayChange = (newDay: Moment) => {
      setDia(newDay)
    }

  return (

    <div className='bg-gradient-to-t from-[#500889] to-[#440674] flex justify-center items-center pb-[5rem] h-full'>
        
          <div className='w-1/3 h-[100vh] mt-[8rem] bg-[#8620b6] rounded-l-2xl flex justify-end items-center flex-col'>
              <div className='felx h-1/2 items-end mb-5'>
                <Typography className='text-[10rem] text-white typo-calendario flex justify-center'>
                  {dia ? dia.format('DD') : moment().format('DD')}
                </Typography>
                <Typography className='text-5xl text-white typo-calendario -mt-5 '>
                  {dia ? dia.format('dddd').toUpperCase() : moment().format('dddd').toUpperCase()}
                </Typography>
              </div>
              
              <div className='h-1/3 flex pb-10 w-11/12 flex-col'>
                <Typography className=' text-white typo-calendario text-2xl'>
                  {data.map((e) => (dia ? ((e.date.format('DD') === dia.format('DD')) ? e.title : null) : (((e.date.format('DD') === moment().format('DD')) ? e.title : null))))}
                </Typography>
                <Typography className=' text-white typo-calendario text-xl'>
                  {data.map((e) => (dia ? ((e.date.format('DD') === dia.format('DD')) ? e.popupContent : null) : (((e.date.format('DD') === moment().format('DD')) ? e.popupContent : null))))}
                </Typography>
                
              </div>
            

          </div>
        
          <div className='bg-[#dfb7ff] bg-opacity-60 w-1/2 flex flex-col justify-center items-center rounded-r-2xl mt-[8rem] h-[100vh]'>
              {/* Controls */}
              <Controls changeMonth={changeMonth} date={date}/>
              {/* Calendar */}
              <Grid container >
                  {daysGrid.map((item, i) => (item?.no ? 
                      <Day 
                        key={i} 
                        daysGridLenght={daysGrid.length} 
                        i={i} 
                        item={item} 
                        events={data.filter(d => item.date.isSame(d.date, 'day'))}
                        addNewEventHandler={addNewEventHandler}
                        onDayChange={handleDayChange}/> 
                      : <ExtraDays key={i} daysGridLength={daysGrid.length} i={i}/>)
                  )}
              </Grid>
          </div>

    </div>
  )
}

export default EventCalendar