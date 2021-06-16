import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Dropdown,
  Icon,
  Menu,

} from "semantic-ui-react";

import "../../css/navi.css"

export default function Navi() {
  return (
    <div>
      <Menu  fixed="top" size="massive">
        <Container>
          <Menu.Item as={NavLink} to="/">
            <Icon name="home" />
            Ana Sayfa
          </Menu.Item>      
          <Menu.Item as="a">
            <Icon name="search" />
            İş Ara
          </Menu.Item>
          <Menu.Item as="a">
            Kariyer Rehberi
          </Menu.Item>
          <Menu.Item as="a">
            Pozisyon Rehberi
          </Menu.Item>
          <Menu.Menu position="right">
          <Menu.Item as={NavLink} to="/candidate/signup">
            Üye Ol
          </Menu.Item>
          <Menu.Item as="a">
            Üye Girişi
          </Menu.Item>
            
            <Dropdown item text="İşveren">
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/employer/signup">Üye Ol</Dropdown.Item>
                <Dropdown.Item>Üye Girişi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
