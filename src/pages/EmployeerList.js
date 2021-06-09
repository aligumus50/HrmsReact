import React, { useEffect, useState } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import EmployeerService from "../services/employeerService";
export default function EmployeerList() {
  const [employeer, setEmployeer] = useState([]);

  useEffect(() => {
    let employeerService = new EmployeerService();
    employeerService.getAll().then((result) => setEmployeer(result.data.data));
  }, []);

  return (
    <div>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Web Site Address</Table.HeaderCell>
            <Table.HeaderCell>Email Address</Table.HeaderCell>
            <Table.HeaderCell>Tel Number</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employeer.map((employeer) => (
            <Table.Row key={employeer.id}>
              <Table.Cell>{employeer.companyName}</Table.Cell>
              <Table.Cell>{employeer.webSiteAddress}</Table.Cell>
              <Table.Cell>{employeer.emailAddress}</Table.Cell>
              <Table.Cell>{employeer.telNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
