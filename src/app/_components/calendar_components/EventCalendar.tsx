'use client'

import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'
import {FC} from 'react'
import moment, { Moment } from 'moment'
import { EventsData, Event } from '~/app/types/EventCalendarType'
import useEventCalendar from '../Hooks/useEventCalendar'
import Controls from './Controls'
import ExtraDays from './ExtraDays'
import useDiaState from '../Hooks/useDiaState'
import EventsList from './EventsList'
import NewEventDialog from './NewEventDialog'
import { api } from '~/trpc/react'
import Day from './Days'
import { Session } from 'next-auth'

import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faLink } from '@fortawesome/free-solid-svg-icons';
import EditEvent from './EditEvent'

interface Props {
    session: Session | null;
}

const EventCalendar: FC<Props> = ({ session}) =>  {
    const {date, changeMonth, daysGrid} = useEventCalendar();
    const { dia, setDia } = useDiaState();
    const [showNewEventDialog, setShowNewEventDialog] = useState(false)
    const [showEditEventDialog, setshowEditEventDialog] = useState(false)

    const createEvent = api.event.createEvent.useMutation();
    const editEvent = api.event.editEvent.useMutation();
    const { data, error, isLoading }   = api.event.getEvents.useQuery();

    if(error) {
      console.log(error)
    }
    if (isLoading) {
      return <p className='h-screen w-full bg-gradient-to-t from-[#500889] to-[#440674] text-white flex items-center justify-center typo-calendario text-xl'>
      <img src='Img/Ellipse.png' className='size-40 animate-spin'/>
      </p>
    }

    const handleDayChange = (newDay: Moment) => {
      setDia(newDay)
    }
// Edit event
    const editEventHandler = (title: string, content: string, date: Moment, id: number, url: string) => {
      
      editEvent.mutate({
        id,
        title, 
        content,
        url,
        date: date.format('YYYY-MM-DD'),
      },
      {
        onError(error) {
          console.log(error)
        }, onSuccess(event_data, variable, context) {
          alert(`Evento: ${event_data.title} editado`)
        }
      }
    )
    }


// New event
    const addNewEventHandler = (title: string, content: string, url: string, date: Moment) => {
      
      createEvent.mutate({
        title,
        content,
        url,
        date: date.format('YYYY-MM-DD'),
      }, 
      {
        onError(error) {
        console.log(error)
        }, 
        onSuccess(event_data, variables, context) {
          alert(`Evento: ${event_data.title} creado`)
        },
    })
    }
    
    const my_events: EventsData = data?.map((event) => {
      const e: Event = {
        _id: event.id,
        title: event.title,
        content: event.content,
        url: event.url,
        date: moment(event.date),
      }
      return e
    }) as EventsData;

  return (
    <div className='bg-gradient-to-t from-[#500889] to-[#440674] flex flex-col items-center absolute top-0'>
      <div className='flex flex-col md:flex-row justify-center items-center pb-3 h-full'>
  {/* Display día seleccionado */}
            <aside className={`w-1/3 h-[100vh] mt-[5rem] bg-[#8620b6] rounded-l-2xl hidden md:flex justify-end items-center flex-col`}>
                <div className='felx h-1/2 items-end mb-5'>
                  <div className='text-[10rem] text-white typo-calendario flex justify-center'>
                    {dia ? dia.format('DD') : moment().format('DD')}
                  </div>
                  <div className='text-5xl text-white typo-calendario -mt-5 '>
                    {dia ? dia.format('dddd').toUpperCase() : moment().format('dddd').toUpperCase()}
                  </div>
                </div>

                <div className='h-1/3 flex pb-10 w-11/12 flex-col'>
                  <div className=' text-white typo-calendario text-2xl'>
                    {my_events.map((e) => (dia ? ((e.date.format('DD') === dia.format('DD')) 
                    ? e.title 
                    : null
                  ) : (((e.date.format('DD') === moment().format('DD')) 
                    ? e.title 
                    : null
                  ))))}
                  </div>
                  <div className=' text-white typo-calendario text-xl h-full'>
                    {my_events.map((e) => (dia ? ((e.date.format('DD') === dia.format('DD')) 
                    ? <>
                        <div className='h-[95%]'>
                        {e.content }
                        </div>
  {/* Editar Eventos */}
                        <div className='w-full flex justify-between'>
                          <a className='bg-[#a371cb] p-1 px-3 rounded-full hover:bg-[#c5a7dd]' href={e.url} target='_blank'>
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                          <button className={`bg-[#a371cb] p-1 px-3 rounded-full hover:bg-[#c5a7dd] flex w-10 items-center ${session?.user.role === 'ADMIN' ? '' : 'hidden'}`} onClick={() => setshowEditEventDialog(true)}>
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                        </div>
                        <EditEvent  
                          open={showEditEventDialog} 
                          onClose={() => setshowEditEventDialog(false)}
                          event={e}
                          editEventHandler={editEventHandler}
                          />
                      </>
                    : null
                  ) : (((e.date.format('DD') === moment().format('DD')) 
                    ? e.content 
                    : null
                  ))))}
                  </div>
                  
                </div>
            </aside>

  {/* Calendario pt: derecha */}
            <div className='bg-[#dfb7ff] bg-opacity-60 w-11/12 md:w-1/2 flex flex-col justify-center items-center rounded-lg md:rounded-l-none mt-[5rem] md:h-[100vh] pr-1'>
  {/* Controls */}
                <Controls changeMonth={changeMonth} date={date}/>
  {/* Calendar */}
                <Grid container>
                    {daysGrid.map((item, i) => (item?.no ? 
                        <Day 
                          key={i} 
                          daysGridLenght={daysGrid.length} 
                          i={i} 
                          item={item}
                          events = {my_events.filter(d => item.date.isSame(d.date, 'day'))}
                          onDayChange={handleDayChange}/> 
                        : <ExtraDays key={i} daysGridLength={daysGrid.length} i={i}/>)
                    )}
                </Grid>
            </div>

  {/* Vista celular */}
            <div className='w-11/12 md:hidden mt-3 bg-[#8620b6] rounded-lg p-2 text-white flex flex-col'>
              <div className='flex'>
                <div className='text-lg typo-calendario mr-3'>
                  {dia ? dia.format('dddd').toUpperCase() : moment().format('dddd').toUpperCase()}
                </div>
                <div className='text-lg text-white typo-calendario'>
                  {dia ? dia.format('DD') : moment().format('DD')}
                </div>
              </div>
              <div className=' text-white typo-calendario text-lg'>
                {my_events.map((e) => (dia ? ((e.date === dia) ? e.title : null) : (((e.date.format('DD') === moment().format('DD')) ? e.title : null))))}
              </div>
              <div className=' text-white typo-calendario text-md'>
                {my_events.map((e) => (dia ? ((e.date === dia) ? e.content : null) : (((e.date.format('DD') === moment().format('DD')) 
                ? e.content 
                : null))))}
              </div>
            </div>
            
      </div>

  {/* Añade eventos */}
          <div className='w-10/12 flex justify-end'>
            <button className='rounded-full' onClick={() => {setShowNewEventDialog(true)}}>
              <div className={`text-white bg-[#8620b6] rounded-full hover:bg-[#dfb7ff] p-2 ${session?.user.role === 'ADMIN' ? '' : 'hidden'}`}>
                + Evento
              </div>
            </button>
          </div>
        <NewEventDialog 
            open={showNewEventDialog} 
            onClose={() => setShowNewEventDialog(false)} 
            addNewEvent={addNewEventHandler} 
            />

  {/* Lista de eventos */}
        <h1 className='text-4xl typo-calendario mb-5 text-white'>
            Eventos pasados
        </h1>
          <Grid className='flex mb-5 w-10/12 justify-between'>
            <div className='w-full md:w-1/3'>
              {my_events.map((e) => (
                <EventsList event={e} onDayChange={handleDayChange}/>
              ))}
            </div>
            <div className='w-2/3 bg-[#8620b6] h-[30rem] ml-4 rounded-lg hidden md:flex flex-col'>
              <div className='h-1/3 w-full overflow-hidden'>
                <img src={'images/backgrounds/random_tech.avif'} className='object-cover w-full rounded-lg'/>
              </div>
              <div className='flex flex-col mt-2 p-2'>
                <div className='flex'>
                  <div className='text-2xl text-white typo-calendario'>
                    {dia ? dia.format('DD') : moment().format('DD')}
                  </div>
                  <div className='text-2xl text-white typo-calendario ml-2'>
                    {dia ? dia.format('MMMM').toUpperCase() : moment().format('MMMM').toUpperCase()}
                  </div>
                </div>
                <div>
                  <div className=' text-white typo-calendario text-2xl mt-3'>
                    {my_events.map((e) => (dia ? ((e.date.format('DD/MM') === dia.format('DD/MM')) ? e.title : null) : (((e.date.format('DD/MM') === moment().format('DD/MM')) ? e.title : null))))}
                  </div>
                  <div className=' text-white typo-calendario text-xl'>
                    {my_events.map((e) => (dia ? ((e.date.format('DD/MM') === dia.format('DD/MM')) ? e.content : null) : (((e.date.format('DD/MM') === moment().format('DD/MM')) ? e.content : null))))}
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          
    </div>
  )
}

export default EventCalendar