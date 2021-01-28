import React from 'react'
import { Button, Icon, Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemImage, List, Segment, SegmentGroup } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

export default function EventListItem({ event }) {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>

            <ItemImage size='tiny' circular src={event.hostPhotoURL} />
            <ItemContent>
              <ItemHeader content={event.title} />
              <ItemDescription>
                {event.hostedBy}
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>

      </Segment>

      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>

          {event.attendees.map(attendee => (
            <EventListAttendee attendee={attendee} key={attendee.id} />
          ))}

        </List>
      </Segment>

      <Segment clearing>

        <div>{event.description}</div>
        <Button color='teal' floated='right' content='View' />
      </Segment>

    </SegmentGroup>
  )
}