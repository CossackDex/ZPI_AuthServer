import React from "react";
import LogForm from "./LogForm";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";

export default () => {
  return (
    <Grid >
      <GridRow>

      </GridRow>
      <GridRow>
        <GridColumn width={5}></GridColumn>
        <GridColumn width={6}><LogForm></LogForm></GridColumn>
        <GridColumn width={5}></GridColumn>
      </GridRow>
    </Grid>
  );
};
