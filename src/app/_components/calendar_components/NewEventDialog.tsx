import { Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, Divider, TextField } from '@mui/material'
import { Moment } from 'moment';
import React, { FC, FormEvent, useState } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';

interface Props extends DialogProps {
  addNewEvent: (title: string, content: string, url: string, date: Moment) => void;
}


const NewEventDialog: FC<Props> = ({ addNewEvent, onClose, ... rest}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [link, setLink] = useState('')
  const [fecha, setFecha] = useState<Dayjs | null>(null)
  
  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onClose?.({}, 'escapeKeyDown')
    const momentFecha = dayjs(fecha).toDate()
    const fechaEvento = moment(momentFecha)
    addNewEvent(title, content, link, fechaEvento)
    setTitle('');
    setContent('');
    setFecha(null);
  }
  
  

  return (
    <Dialog {...rest} onClose={onClose}>
      <div className='p-2 text-xl'>
        Añadir Evento:
        </div>
      <Divider />
      <form onSubmit={handleSubmit}>
        <DialogContent className='flex flex-col w-full md:w-[30rem] gap-5'>
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
          <TextField
            variant = 'outlined'
            label='Link'
            type='url'
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
            fullWidth
            className='my-2'
          />
          
          {/* Entrada de fecha */}
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker label='Dia del evento' 
              format="DD/MM/YYYY"
              value={fecha}
              onChange={(nuevaFecha) => {setFecha(nuevaFecha)}}
              />
          </LocalizationProvider>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setTitle('');
            setContent('');
            setFecha(null);
            onClose?.({}, 'escapeKeyDown')
            }}>Cancelar</Button>
          <Button type='submit'>Añadir</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default NewEventDialog