import React, { Component } from "react";
import {
  Table,
  Button,
  Icon,
  Confirm,
  Modal,
  TableCell,
} from "semantic-ui-react";
import ModalScreen from "./ModalScreen";
import ServiceDeleteButton from "./ServiceDeleteButton";
import ServiceNameButton from "./ServiceNameButton";

export default class ServicesTable extends Component {
  //  fn zwracjąca Table.row na postawie jednego uzytkoniwak (dicta)
  row = (service) => {
    return (
      <Table.Row>
        <Table.Cell width={1}>{service && service.id} </Table.Cell>
        <Table.Cell width={2}>
          <ServiceNameButton name={service.name}></ServiceNameButton>
        </Table.Cell>
        <Table.Cell width={2}>{service && service.domain}</Table.Cell>
        <Table.Cell width={2}>{service && service.date}</Table.Cell>
        {/* <Table.Cell width={2}>
          <ModalScreen
              username={service.username}
              useremail={service.email}
              role={service.role}></ModalScreen>
        </Table.Cell> */}
        <Table.Cell width={1}>
          <ServiceDeleteButton name={service.name}></ServiceDeleteButton>
        </Table.Cell>
      </Table.Row>
    );
  };
  rows = (services, countPages, activePage, servicesPerPage) => {
    const activeList = []; //lista wyswietlana na aktywnej stronie
    // users_count = Jeśli nie jest ostania strona ? ilość na stronę : ilosć uży.% ilosć uż na str.
    const services_count =
      countPages !== activePage
        ? servicesPerPage
        : services.length % servicesPerPage || servicesPerPage;

    for (let i = 0; i < services_count; i++) {
      activeList.push(
        this.row(services[(activePage - 1) * servicesPerPage + i])
      );
    }

    console.log(activeList);
    return activeList;
  };

  render() {
    const { services, activePage, servicesPerPage, countPages } = this.props;

    return (
      // <Table celled compact definition color="teal" key="teal">
      <Table color="teal">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Domain</Table.HeaderCell>
            <Table.HeaderCell>Last Status Time</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {services[0] &&
            this.rows(services, countPages, activePage, servicesPerPage)}
        </Table.Body>
      </Table>
    );
  }
}
