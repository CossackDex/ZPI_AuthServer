import React, { Component } from "react";
import { Grid, GridRow, GridColumn, Dropdown, Table } from "semantic-ui-react";
import ChangeSiteBar from "../ChangeSiteBar";
import ServicesTable from "../ServicesTable";
const services = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  25,
  26,
].map((x) => ({
  id: x,
  name: "Service1" + x,
  domain: "https://github.com/dexon44/ZPI_AuthServer" + x,
  date: x + ".04.2020 " + x * 2 + ":" + x * 3 + ":00",
}));
const numberOptions = [
  {
    key: 10,
    text: 10,
    value: 10,
  },
  {
    key: 20,
    text: 20,
    value: 20,
  },
  {
    key: 50,
    text: 50,
    value: 50,
  },
  {
    key: 10000000,
    text: "All",
    value: 10000000,
  },
];



export default class AvailableServices extends Component {
  state = {
      activePage: 1,
      servicesPerPage: numberOptions[0].value,
      services: services,
      numberOptions: numberOptions,
    };
    countPages = (services) => {
        return Math.ceil(services.length / this.state.servicesPerPage);
      };
    
      handlePaginationChange = (e, { activePage }) => this.setState({ activePage });
    
      handleDropdownClick = (e, { value }) =>
        this.setState({ servicesPerPage: value, activePage: 1});
      // handleDropdownClick = (e, d) => this.setState({usersPerPage: d.value});
    
    render() {
    const { services, activePage, servicesPerPage, numberOptions  } = this.state;
    
    return (
      // <Table celled compact definition color="teal" key="teal">
      <Grid>
        <GridRow>
          <Dropdown
            inline
            options={numberOptions}
            defaultValue={numberOptions[0].value}
            onChange={this.handleDropdownClick}
          />
        </GridRow>
        <GridRow>
          <GridColumn width={1}></GridColumn>
          <GridColumn width={14}>
      <ServicesTable
      services={services}
      activePage={activePage}
      servicesPerPage={servicesPerPage}
      countPages={this.countPages(services)}
      ></ServicesTable>
      </GridColumn>
           <GridColumn width={1}></GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn width={6}></GridColumn>
          <GridColumn>
            <ChangeSiteBar
              activePage={activePage}
              pages={this.countPages(services)} //podmienic na dane z serwera
              handlePaginationChange={this.handlePaginationChange}
            ></ChangeSiteBar>
          </GridColumn>
          {/* <GridColumn width={5}></GridColumn> */}
        </GridRow>
      </Grid>
    );
  }
}
