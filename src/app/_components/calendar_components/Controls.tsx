import React, { FC } from 'react';
import moment, { Moment } from 'moment';
import 'moment/locale/es'
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material'
import {IconButton, Stack, Typography} from '@mui/material';

interface Props {
    changeMonth: (action: 'add' | 'subtract') => void
    date: Moment
}

const Controls: FC<Props> = ({changeMonth, date}) => {
    
    moment.locale('es')

  return (
    <>
    <div className='flex justify-between w-full text-white px-10 h-10 items-center border-b-white border-b-2 mb-2'>
        <IconButton className='p-1 hover:bg-gray-700 text-white' onClick={() => changeMonth('subtract')}>
            <ArrowBackIos className=' pl-2'/>
        </IconButton>
        <Typography>{date.format('MMMM, YYYY').toUpperCase()}</Typography>
        <IconButton className='p-1 hover:bg-gray-700 text-white' onClick={() => changeMonth('add')}>
            <ArrowForwardIos className='hover:bg-gray-700 p-1 rounded-md' />
        </IconButton>
    </div> 
    </>
  )
}

export default Controls