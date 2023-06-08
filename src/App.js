import React, { useState, useEffect } from "react";
import { Box, ThemeProvider, Grid, CircularProgress } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import NewJob from "./components/NewJob";
import { firestore, app } from "./firebase/config";

export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newJobModal, setNewJobModal] = useState(false);

  const fetchJobs = async () => {
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .get();
    const tempJobs = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    setJobs(tempJobs);
    setLoading(false);
  };

  const postJob = async jobDetails => {
    await firestore.collection('jobs').add({
      ...jobDetails, postedOn: app.firestore.FieldValue.serverTimestamp()
    })
    fetchJobs();
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header openNewJobModal={() => setNewJobModal(true) } />
      <NewJob closeModal={() => setNewJobModal(false) } newJobModal={newJobModal} postJob={postJob} />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />
          {loading ? (
           <Box display="flex" justifyContent="center">
            <CircularProgress />
           </Box>
          ) : (
            jobs.map((job) => <JobCard key={job.id} {...job} />)
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
