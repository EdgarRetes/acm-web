import { Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, Divider, TextField } from '@mui/material'
import { Moment } from 'moment';
import React, { FC, FormEvent, useState } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';
import { Event } from '~/app/types/EventCalendarType';

interface Props extends DialogProps {
  event: Event
  editEventHandler: (title: string, content: string, date: Moment, id: number, url:string) => void
}


const NewEventDialog: FC<Props> = ({ event, onClose, editEventHandler, ... rest}) => {
  const [title, setTitle] = useState(event.title)
  const [link, setLink] = useState(event.url)
  const [content, setContent] = useState(event.content)
  const [fecha, setFecha] = useState<Dayjs | null>(dayjs(event.date.format('MM/DD/YYYY')))
  
  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onClose?.({}, 'escapeKeyDown')
    const momentFecha = dayjs(fecha).toDate()
    const fechaEvento = moment(momentFecha)
    // addNewEvent(title, content, fechaEvento)
    editEventHandler(title, content, fechaEvento, event._id, link)
    setTitle('');
    setContent('');
    setLink('');
    setFecha(null);
  }
  
  

  return (
    <Dialog {...rest} onClose={onClose}>
      <div className='text-xl p-2'>Editar Evento</div>
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