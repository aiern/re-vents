import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";
import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";

export default function EventForm({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Bob",
          attendees: [],
          hostPhotoURL: "/assets/user.png",
        });
    setFormOpen(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    // console.log(e)
    setValues({ ...values, [name]: value });
  }
  return (
    <Segment clearing>
      <Header
        content={
          selectedEvent ? "Edit : " + selectedEvent.title : "Create new event"
        }
      />
      <Form onSubmit={handleFormSubmit}>
        <FormField>
          <input
            type='text'
            placeholders='Event title'
            name='title'
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholders='Category'
            name='category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholders='Description'
            name='description'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholders='City'
            name='city'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholders='Venue'
            name='venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type='date'
            placeholders='Date'
            name='date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>

        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          as={Link} to='/events'
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}
