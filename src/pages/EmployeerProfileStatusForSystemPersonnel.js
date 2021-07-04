import { result } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Button, Icon, Label, Menu, Segment, Table } from "semantic-ui-react";
import EmployeerProfileStatusService from "../services/employeerProfileStatusService";
import employeerProfileStatus from "../store/actions/employeerProfileStatusActions";

export default function EmployeerProfileStatusForSystemPersonnel() {
  let employeerProfileStatusService = new EmployeerProfileStatusService();

  let {id} = useParams();

  const [employeerProfileStatuses, setEmployeerProfileStatuses] = useState([]);

  useEffect(() => {
    employeerProfileStatusService
      .getByStatus(false)
      .then((result) => setEmployeerProfileStatuses(result.data.data));
  }, []);

  console.log(employeerProfileStatuses);

  const dispatch = useDispatch();

  const handleEmployeerProfileStatus=(employeerProfile)=>{
    dispatch(employeerProfileStatus(employeerProfile))
  }
  return (
    <div>
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
              <Table.HeaderCell>Şirket Web Adresi</Table.HeaderCell>
              <Table.HeaderCell>Detaylar</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employeerProfileStatuses.map((employeerProfileStatus) => (
              <Table.Row>
                <Table.Cell>{employeerProfileStatus.employeer.companyName}</Table.Cell>
                <Table.Cell>{employeerProfileStatus.employeer.webSiteAddress}</Table.Cell>
                <Table.Cell><Button as={NavLink} to={`/systempersonnel/${id}/employeerprofilestatus/verification/`} onClick={()=>handleEmployeerProfileStatus(employeerProfileStatus)}>Detay Görüntüle</Button></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
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
      </Segment>
    </div>
  );
}
