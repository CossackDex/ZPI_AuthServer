import React from "react";
import CreateService from "../CreateService";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";




export default () => {
  return (
  <Grid>
      <GridRow>
        <GridColumn width={4}></GridColumn>
        <GridColumn width={8}>
          <CreateService/>
        </GridColumn>
        <GridColumn width={4}></GridColumn>
      </GridRow>
    </Grid>
  );
};