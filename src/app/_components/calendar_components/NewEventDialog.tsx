import { Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, Divider, TextField } from '@mui/material'
import { Moment } from 'moment';
import React, { FC, FormEvent, useState } from 'react'
import { DaysGrid } from '~/app/types/EventCalendarType'

interface Props extends DialogProps {
  item: DaysGrid,
  addNewEvent: (title: string, content: string, date: Moment) => void;
}


const NewEventDialog: FC<Props> = ({item, addNewEvent, onClose, ... rest}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onClose?.({}, 'escapeKeyDown')
    addNewEvent(title, content, item.date)
  }
  
  return (
    <Dialog {...rest} onClose={onClose}>
      <DialogTitle>Add new event on {item.date.format('LL')}</DialogTitle>
      <Divider light />
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField 
            variant = 'outlined'
            label='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField 
            variant = 'outlined'
            label='Popup content'
            type='text'
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            fullWidth
            className='mt-2'
          />
          {/* [MISSING] Falta entrada de fecha */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose?.({}, 'escapeKeyDown')}>Cancel</Button>
          <Button type='submit'>Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default NewEventDialog