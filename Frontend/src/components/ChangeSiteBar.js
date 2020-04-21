import React, { Component } from "react";
import {
  Pagination 
} from "semantic-ui-react";

export default class ChangeSiteBar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handlePaginationChange = this.handlePaginationChange.bind(this);
    //   }
  
//   state = { activePage: 1 };

  handlePaginationChange = this.props.handlePaginationChange

  render() {
    const { activePage, pages } = this.props;

    return (
      <Pagination
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={pages}
        activePage={activePage}
        // onPageChange={(e,d) => this.handlePaginationChange(e, d, {name: "Kasi"})}
        onPageChange={this.handlePaginationChange}

      />
    );
  }
}
