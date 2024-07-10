import { Grid, Typography, useTheme } from '@mui/material';
import moment, { Moment } from 'moment';
import {FC, useState} from 'react';
import { DaysGrid, EventsData } from '~/app/types/EventCalendarType';
import Event from './Event';
import NewEventDialog from './NewEventDialog';

interface Props {
    i: number;
    daysGridLenght: number;
    item: DaysGrid;
    events?: EventsData;
    addNewEventHandler: (title: string, content: string, date: Moment) => void
}

const Day: FC<Props> = ({daysGridLenght, i, item, events, addNewEventHandler}) => {  
  
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

  
//   Dias de la semana dentro del mes
  const [showNewEventDialog, setShowNewEventDialog] = useState(false)
    return (
    <Grid item textAlign='center' height='8rem' overflow='auto' width={`${100/7}%`} className='flex flex-col p-1' >
        {i < 7 && <>
            <Typography variant='caption' gutterBottom className='text-white text-lg'>
                {weekDays[i]}
            </Typography> 
        </>}

        

        <div className='  w-[4.5rem] relative h-[4.5rem]  hover:bg-[#d57aef] hover:bg-opacity-50 rounded-full ml-2'>
          <div className='-ml-2'>
            <Typography variant='caption' className={` flex absolute ${isSameDate ? 'bg-[#d57aef] hover:bg-[#ffacff] bg-opacity-70 hover:opacity-100' : ''} text-slate-950 h-[4.5rem] w-[4.5rem] items-center justify-center text-3xl mx-2  rounded-full typo-calendario cursor-pointer`}
              gutterBottom
              onClick={() => setShowNewEventDialog(true)} // [CHANGE] autentificación y botón en otro extremo / lugar
            >  
                {item.no}
            </Typography>

            {/* Events */}
            <Grid container className='absolute right-0 flex flex-row-reverse'>
              {events?.map((e, i) => (
                <Event key={e.id || i} event={e} i={i} />
              ))}
            </Grid>

            {/* Add Events */}
            <NewEventDialog 
              open={showNewEventDialog} 
              onClose={() => setShowNewEventDialog(false)} 
              addNewEvent={addNewEventHandler} 
              item={item}
              />
          </div>
        </div>

        
        
    </Grid>
  )
}

export default Day
