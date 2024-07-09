import { Grid, Typography, useTheme } from '@mui/material'
import {FC} from 'react'
import { Event as EventType } from '../../types/EventCalendarType' 

interface Props {
  event: EventType
  i: number
}

const Event: FC<Props> = ({event, i})  => {
  
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
      <Typography variant='caption' component='div' className='bg-[#c93d3d] rounded-full w-5 h-5 cursor-pointer'>
        {i + 1}
      </Typography>
    </Grid>
  )
}

export default Event