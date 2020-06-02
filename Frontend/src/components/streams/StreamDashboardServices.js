import React, { Component } from "react";
import { Grid, GridRow, GridColumn, Dropdown, Table, Loader } from "semantic-ui-react";
import ChangeSiteBar from "../ChangeSiteBar";
import ServicesTable from "../ServicesTable";
import { connect } from "react-redux";
import { aGetServices, aDeleteService, aGetService } from "../../actions"
import history from "../../history"

// const services = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
//   22,
//   25,
//   26,
// ].map((x) => ({
//   id: x,
//   name: "Service1" + x,
//   domain: "https://github.com/dexon44/ZPI_AuthServer" + x,
//   date: x + ".04.2020 " + x * 2 + ":" + x * 3 + ":00",
// }));
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



class AvailableServices extends Component {

    onDelete = (service) => {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        this.props.aDeleteService(a, service)
      };

      onEdit = (service) => {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        this.props.aGetService(a, service.service_name)
      };

    componentDidMount() {
        const a = {auth: { username: this.props.username, password: this.props.password }};
        if (a) {
        this.props.aGetServices(a);
        }
    }

    updateList(){
        const a = {auth: { username: this.props.username, password: this.props.password }};
            if (a) {
            console.log('get')
            this.props.aGetServices(a);
            }
        if (this.props.services) {
            const se = Object.values(this.props.services)
            // console.log(ul)
            // this.setState({ users_list: ul });
            return se
        }
      }
      shouldComponentUpdate(nextProps, nextState){
        if(nextState !== this.state) return true
        if (this.props.services) {
            const ul = JSON.stringify(Object.values(this.props.services))
            const nextul = JSON.stringify(Object.values(nextProps.services))
            if(ul === nextul) return false
        }
        return true
      }

  state = {
      activePage: 1,
      servicesPerPage: numberOptions[0].value,
    //   services: services,
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
    if (!this.props.services) {
        return <Grid centered><Grid.Row></Grid.Row><Grid.Row></Grid.Row><Loader active inline>Loading</Loader></Grid>
    }
    const { activePage, servicesPerPage, numberOptions  } = this.state;
    const services = this.updateList()
    console.log(services)

    // connection_ip: "666"
    // created_date: "2020-05-31T17:34:24"
    // creator_id: 1
    // id: 8
    // service_name: "eee"

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
              pages={this.countPages(services)} //podmienic na dane z serwera
              handlePaginationChange={this.handlePaginationChange}
            ></ChangeSiteBar>
          </GridColumn>
          {/* <GridColumn width={5}></GridColumn> */}
        </GridRow>
      </Grid>
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

export default connect(mapStateToProps, {aGetServices, aDeleteService, aGetService})(AvailableServices);
