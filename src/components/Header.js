import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";

export default (props) => (
  <Box py={15} m={-1} bgcolor="secondary.main" color="white">
    <Grid container justifyContent="center">
    <Grid item xs={10}>
        <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">Open Jobs</Typography>
        <Button variant="contained" color="primary">Enter new job</Button>
        </Box>
        </Grid>
    </Grid>
  </Box>
);
