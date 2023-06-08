import React, { useState } from "react";
import { Box, Button, Select, MenuItem, makeStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    backgroundColor: "#fff",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    "& > *": {
      flex: 1,
      height: "45px",
      margin: "8px",
    },
  },
});
export default (props) => {
  const [loading, setLoading] = useState(false);
  const [jobSearch, setJobSearch] = useState({
    type: "Full Time",
    location: "Remote",
  });

  const handleChange = (e) => {
    e.persist();
    setJobSearch((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const search = async () => {
    setLoading(true);
    await props.fetchJobsCustom(jobSearch);
    setLoading(false);
  }

  const classes = useStyles();
  return (
    <Box p={4} mt={-5} mb={2} className={classes.wrapper}>
      <Select onChange={handleChange} name="type" value={jobSearch.type} disableUnderline variant="filled">
        <MenuItem value="Full Time">Full Time</MenuItem>
        <MenuItem value="Part Time">Part Time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>

      <Select onChange={handleChange} name="location" value={jobSearch.location} disableUnderline variant="filled">
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-Office">In Office</MenuItem>
      </Select>

      <Button onClick={search} disabled={loading} variant="contained" color="primary">
      {loading ? (<CircularProgress color = "secondary" size = {22} /> ) : ("SEARCH")}
      </Button>
    </Box>
  );
};
