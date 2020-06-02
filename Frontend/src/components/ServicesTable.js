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
import { aGetServices, aDeleteService, aGetService } from "../actions"
import { connect } from "react-redux";
import history from "../history"

class ServicesTable extends Component {
    onEdit = (service) => {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        this.props.aGetService(a, service.service_name)
      };
  //  fn zwracjąca Table.row na postawie jednego uzytkoniwak (dicta)
  row = (service) => {
    return (
      <Table.Row>
        <Table.Cell width={1}>{service && service.id} </Table.Cell>
        <Table.Cell width={1}>{service && service.creator_id} </Table.Cell>
        <Table.Cell width={1}>{service && service.service_name} </Table.Cell>
                {/* <Table.Cell width={2}> */}
          {/* <ServiceNameButton name={service.service_name}></ServiceNameButton> */}
        {/* </Table.Cell> */}
        <Table.Cell width={2}>{service && service.connection_ip}</Table.Cell>
        <Table.Cell width={2}>{service && service.created_date}</Table.Cell>
        {/* <Table.Cell width={2}>
          <ModalScreen
              username={service.username}
              useremail={service.email}
              role={service.role}></ModalScreen>
        </Table.Cell> */}
        <Table.Cell width={1}>
        <   button className="ui button primary" onClick={()=>{this.onEdit(service)}}>Edit</button>
        </Table.Cell>
        <Table.Cell width={1}>
          <ServiceDeleteButton name={service.name} service={service}></ServiceDeleteButton>
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
            <Table.HeaderCell>Creator Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Domain</Table.HeaderCell>
            <Table.HeaderCell>Last Status Time</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>
                <button className="right floated content ui button primary " onClick={()=>{history.push("/dashboard/admin/services/create")}}>Create Service</button>
            </Table.HeaderCell>
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


const mapStateToProps = state => {
    return {
        services: state.service.services,
        username: state.sign.username,
        password: state.sign.password
      };
}

export default connect(mapStateToProps, { aGetService})(ServicesTable);
