import React from 'react'
import { Button, Form, FormField, Header, Segment } from 'semantic-ui-react'

export default function EventForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Header content='Create new event' />
      <Form>
        <FormField>
          <input type="text" placehodlers='Event title' />
        </FormField>
        <FormField>
          <input type="text" placehodlers='Category' />
        </FormField>
        <FormField>
          <input type="text" placehodlers='Description' />
        </FormField>
        <FormField>
          <input type="text" placehodlers='City' />
        </FormField>
        <FormField>
          <input type="text" placehodlers='Venue' />
        </FormField>
        <FormField>
          <input type="date" placehodlers='Date' />
        </FormField>

        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          onClick={() => setFormOpen(false)}
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  )
}