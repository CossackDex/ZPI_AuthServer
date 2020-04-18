import React from "react";
import UsersTable from "../UsersTable";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";

export default () => {
    return (
        <Grid >
      <GridRow>

      </GridRow>
      <GridRow>
        <GridColumn width={1}></GridColumn>
        <GridColumn width={14}><UsersTable></UsersTable></GridColumn>
        <GridColumn width={1}></GridColumn>
      </GridRow>
    </Grid>
    );
  };
