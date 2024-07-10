import { Dialog, DialogTitle, Grid, Typography, useTheme } from '@mui/material'
import {FC, useState} from 'react'
import { Event as EventType } from '../../types/EventCalendarType' 

interface Props {
  event: EventType
  i: number
}

const Event: FC<Props> = ({event, i})  => {
  
  const [showDialog, setshowDialog] = useState(false)

  return (
    <>
    <div className='pl-[3rem] pb-[3rem] cursor-pointer mt-[0.1rem] mr-[0.1rem] rounded-full z-0 absolute top-0 right-0' onClick={() => setshowDialog(true)}>
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <Typography variant='caption' component='div' className='bg-[#c93d3d] rounded-full w-5 h-5 relative left-5' >
          {i + 1}
        </Typography>
      </Grid>
    </div>
        <Dialog open={showDialog} onClose={() => setshowDialog(false)} >
          <DialogTitle>{event.title}</DialogTitle>
          {event.popupContent}
        </Dialog>
    </>
  )
}

export default Event