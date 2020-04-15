import React from "react";
import RegForm from "../RegForm";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";



export default () => {
    return (
      <Grid >
      <GridRow>

      </GridRow>
      <GridRow>
        <GridColumn width={5}></GridColumn>
        <GridColumn width={6}><RegForm></RegForm></GridColumn>
        <GridColumn width={5}></GridColumn>
      </GridRow>
    </Grid>

    );
  };
