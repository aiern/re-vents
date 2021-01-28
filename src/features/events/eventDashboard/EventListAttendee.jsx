import React from 'react'
import { ListItem, Image } from 'semantic-ui-react'

export default function EventListAttendee({attendee}) {
  return (
    <ListItem>
      <Image size='mini' circular src={attendee.photoURL}/>
    </ListItem>
  )
}