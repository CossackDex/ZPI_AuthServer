import React from "react";
import EditService from "../EditService";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";

export default () => {
  return (
    <Grid>
      <GridRow>
        <GridColumn width={4}></GridColumn>
        <GridColumn width={8}>
          <EditService />
        </GridColumn>
        <GridColumn width={4}></GridColumn>
      </GridRow>
    </Grid>
  );
};
