import { Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, Divider, TextField } from '@mui/material'
import { Moment } from 'moment';
import React, { FC, FormEvent, useState } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';

interface Props extends DialogProps {
  addNewEvent: (title: string, content: string, date: Moment) => void;
}


const NewEventDialog: FC<Props> = ({ addNewEvent, onClose, ... rest}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [fecha, setFecha] = useState<Dayjs | null>(null)
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onClose?.({}, 'escapeKeyDown')
    const momentFecha = dayjs(fecha).toDate()
    const fechaEvento = moment(momentFecha)
    addNewEvent(title, content, fechaEvento)
  }
  
  return (
    <Dialog {...rest} onClose={onClose}>
      <Divider />
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField 
            variant = 'outlined'
            label='Titulo'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField 
            variant = 'outlined'
            label='Contenido'
            type='text'
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            fullWidth
            className='my-2'
          />
          
          {/* [MISSING] Falta entrada de fecha */}
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker label='Dia del evento' 
              format="DD/MM/YYYY"
              value={fecha}
              onChange={(nuevaFecha) => {setFecha(nuevaFecha)}}
              />
          </LocalizationProvider>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose?.({}, 'escapeKeyDown')}>Cancelar</Button>
          <Button type='submit'>Añadir</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default NewEventDialog