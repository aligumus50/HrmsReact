import React from "react";
import {
  Container,
  Dropdown,
  Icon,
  Menu,

} from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="search" />
            Search Job
          </Menu.Item>

          <Menu.Menu position="right">
            <Dropdown item text="Candidate">
              <Dropdown.Menu>
                <Dropdown.Item>Register Canidate</Dropdown.Item>
                <Dropdown.Item>Login Canidate</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Employeer">
              <Dropdown.Menu>
                <Dropdown.Item>Register Employeer</Dropdown.Item>
                <Dropdown.Item>Login Employeer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
