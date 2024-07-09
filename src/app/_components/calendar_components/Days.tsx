import { Grid, Typography, useTheme } from '@mui/material';
import moment from 'moment';
import {FC} from 'react'
import { DaysGrid } from '~/app/types/EventCalendarType';

interface Props {
    i: number;
    daysGridLenght: number;
    item: DaysGrid;
}

const Day: FC<Props> = ({daysGridLenght, i, item}) => {
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
        <Typography variant='caption' className={` flex  hover:bg-[#d57aef] hover:bg-opacity-50 ${isSameDate ? 'bg-[#d57aef] hover:bg-[#ffacff]' : ''} text-slate-950 h-full items-center justify-center text-3xl mx-5 rounded-full typo-calendario`}>  
            {item.no}
        </Typography>
        
    </Grid>
  )
}

export default Day
