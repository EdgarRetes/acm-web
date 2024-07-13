'use client'

import React, { useState } from 'react'
import { clientCallTypeToProcedureType } from '@trpc/client'
import { Button, DialogContent, DialogContentText, Grid, Typography } from '@mui/material'
import {FC} from 'react'
import moment, { Moment } from 'moment'
import { EventsData } from '~/app/types/EventCalendarType'
import useEventCalendar from '~/app/Hooks/useEventCalendar'
import Controls from './Controls'
import Day from './Days'
import ExtraDays from './ExtraDays'
import useDiaState from '~/app/Hooks/useDiaState'
import EventsList from './EventsList'
import DetallesEvento from './DetallesEvento'
import NewEventDialog from './NewEventDialog'

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
          id: 1,
          title, 
          content: content,
          date,
          color: '#fff'
        })
        onDataChange?.(newDataArray)
      }
    }
// unused

    const { dia, setDia } = useDiaState();

    const [showNewEventDialog, setShowNewEventDialog] = useState(false)


    const handleDayChange = (newDay: Moment) => {
      setDia(newDay)
    }

  return (
    <div className='bg-gradient-to-t from-[#500889] to-[#440674] flex flex-col items-center'>
      <div className='flex justify-center items-center pb-5 h-full'>
            {/* Display día seleccionado */}
            <div className={`w-1/3 h-[100vh] mt-[8rem] bg-[#8620b6] rounded-l-2xl flex justify-end items-center flex-col`}>
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
                    {data.map((e) => (dia ? ((e.date.format('DD') === dia.format('DD')) ? e.content : null) : (((e.date.format('DD') === moment().format('DD')) ? e.content : null))))}
                  </Typography>
                  
                </div>
            </div>

          {/* Calendario pt: derecha */}
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

        {/* Añade eventos */}
        <div className='w-10/12 flex justify-end'>
          <Button className='text-white bg-[#8620b6] rounded-full hover:bg-[#dfb7ff]' onClick={() => setShowNewEventDialog(true)}>
            + Evento
          </Button>
        </div>
        <NewEventDialog 
            open={showNewEventDialog} 
            onClose={() => setShowNewEventDialog(false)} 
            addNewEvent={addNewEventHandler} 
            />

        {/* Lista de eventos */}
        <Grid className='mb-5 w-10/12 flex'>
          <div className='w-1/3'>
            {data.map((e) => (
              <EventsList event={e}/>
            ))}
          </div>
        </Grid>
          
    </div>
  )
}

export default EventCalendar