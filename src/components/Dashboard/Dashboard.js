import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CameraFeed from '../CameraFeed/CameraFeed';
import ActivityLog from '../ActivityLog/ActivityLog';
import classes from './Dashboard.module.css';
const Dashboard = () => {
  return (
    <div>
      <Grid container className={classes.mainGrid}>
        <Grid item xs={12} md={6} style={{ backgroundColor: 'white' }}>
          <Typography variant='h5'>CAMERA FEED</Typography>
          <CameraFeed />
        </Grid>
        <div className={classes.middle}></div>
        <Grid item xs={12} md={6} style={{ backgroundColor: 'white' }}>
          <Typography variant='h5'>ACTIVITY LOG</Typography>
          <ActivityLog />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
