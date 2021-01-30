import React from "react";
import { Link } from "react-router-dom";
import {
  MenuItem,
  Button,
  Dropdown,
  Image,
  DropdownMenu,
  DropdownItem,
} from "semantic-ui-react";

export default function SignedInMenu() {
  return (
    <MenuItem position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />

      <Dropdown pointing='top left' text='Bob'>
        <DropdownMenu>
          <DropdownItem
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <DropdownItem text='My Profile' icon='user' />
          <DropdownItem text='Sign Out' icon='power' />
        </DropdownMenu>
      </Dropdown>
    </MenuItem>
  );
}
