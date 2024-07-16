import { Button, Grid, useTheme } from '@mui/material';
import moment, { Moment } from 'moment';
import {FC, useState} from 'react';
import { DaysGrid, EventsData } from '~/app/types/EventCalendarType';
import Event from './Event';
import NewEventDialog from './NewEventDialog';
import useDiaState from '~/app/Hooks/useDiaState';

interface Props {
    i: number;
    daysGridLenght: number;
    item: DaysGrid;
    events?: EventsData;
    addNewEventHandler: (title: string, content: string, date: Moment) => void
    onDayChange: (dia: Moment) => void
}

const Day: FC<Props> = ({daysGridLenght, i, item, events, onDayChange}) => {  
  
    const getWeekDays = () => [
    'LUN',
    'MAR',
    'MIE',
    'JUE',
    'VIE',
    'SAB',
    'DOM',
  ]

  const weekDays = getWeekDays()

  const isSameDate = moment().isSame(item.date, 'day')

  const { dia, setDia } = useDiaState();

  const handleClickEvent = (item: Moment) => {
    setDia(item);
    onDayChange(item)
  }

    return (
    <Grid item textAlign='center' overflow='auto' width={`${100/7}%`} className='flex flex-col p-1 overflow-visible items-center h-[4rem] md:h-[8rem]' >
        <div className='text-center flex flex-col justify-center overflow-visible'>
          {i < 7 &&
            <>
                <div  className='text-white text-md md:text-lg'>
                    {weekDays[i]}
                </div>
            </>}
          <div className='  w-[2rem] h-[2rem] relative md:w-[4.5rem] md:h-[4.5rem]  hover:bg-[#d57aef] hover:bg-opacity-50 rounded-full ml-2 '>
            <div className='-ml-2'>
              <div className={` flex absolute ${isSameDate ? 'bg-[#d57aef] hover:bg-[#ffacff] bg-opacity-70 hover:opacity-100' : ''}  text-slate-950 w-[2rem] h-[2rem] md:h-[4.5rem] md:w-[4.5rem] items-center justify-center text-2xl md:text-3xl mx-2  rounded-full typo-calendario cursor-pointer`}
                onClick={() => handleClickEvent(item.date)} // [CHANGE] autentificación y botón en otro extremo / lugar | setShowNewEventDialog(true)
              >
                  {item.date.format('DD')}
              </div>
              {/* Events */}
              <Grid container className='absolute right-0 flex flex-row-reverse'>
                {events?.map((e, i) => (
                  <Event key={e._id || i} event={e} i={i} />
                ))}
              </Grid>
          
            </div>
          </div>
        </div>
    </Grid>
  )
}

export default Day
