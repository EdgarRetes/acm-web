import { Grid, Typography, useTheme } from '@mui/material';
import moment from 'moment';
import {FC} from 'react';
import { DaysGrid, EventsData } from '~/app/types/EventCalendarType';
import Event from './Event';

interface Props {
    i: number;
    daysGridLenght: number;
    item: DaysGrid;

    events?: EventsData;
}

const Day: FC<Props> = ({daysGridLenght, i, item, events}) => {
  const theme = useTheme()
  
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
    return (
    <Grid item textAlign='center' height='8rem' overflow='auto' width={`${100/7}%`} className='flex flex-col p-1' >
        {i < 7 && <>
            <Typography variant='caption' gutterBottom className='text-white text-lg'>
                {weekDays[i]}
            </Typography> 
        </>}

        

        <div className='  w-[5rem] relative'>
          <Typography variant='caption' className={` flex absolute hover:bg-[#d57aef] hover:bg-opacity-50 ${isSameDate ? 'bg-[#d57aef] hover:bg-[#ffacff]' : ''} text-slate-950 h-[5rem] w-[5rem] items-center justify-center text-3xl mx-2  rounded-full typo-calendario z-0`}>  
              {item.no}
          </Typography>
          {/* Events */}
          <Grid container className='absolute right-0 flex flex-row-reverse'>
            {events?.map((e, i) => (
              <Event key={e.id || i} event={e} i={i} />
            ))}
          </Grid>
        </div>

        
        
    </Grid>
  )
}

export default Day
