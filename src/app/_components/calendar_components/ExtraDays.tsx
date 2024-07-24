import { Grid, Typography } from '@mui/material';
import {FC} from 'react'

interface Props {
    daysGridLength: number;
    i: number;
}

const ExtraDays: FC<Props> = ({daysGridLength, i}) => {
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

    // Días de la semana fuera del mes
  
    return (
        <Grid item textAlign='center' height='8rem' overflow='auto' width={`${100/7}%`} >
            {i<7 && <Typography variant='caption' gutterBottom className='text-gray-500 text-lg'>{weekDays[i]}</Typography>}
        </Grid>
  )
}

export default ExtraDays