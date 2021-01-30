import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar({ setFormOpen }) {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <Menu inverted fixed='top'>
      <Container>
        <MenuItem as={NavLink} to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </MenuItem>

        <MenuItem as={NavLink} exact to='/events' name='Events' />
        {authenticated && (
          <MenuItem as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </MenuItem>
        )}

        {authenticated ? (<SignedInMenu setAuthenticated={setAuthenticated} />) : (<SignedOutMenu setAuthenticated={setAuthenticated} />)}
      </Container>
    </Menu>
  );
}
