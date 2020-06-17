import React from "react";
import {
  Container,
  Slider,
  Select,
  InputLabel,
  MenuItem,
  Grid,
  Switch,
} from "@material-ui/core";
import classes from "./CameraFeed.module.css";
const CameraFeed = () => {
  return (
    <Container>
      <div className={classes.topControls}>
        <Grid spacing={11}>
          <Grid item xs>
            {" "}
            <InputLabel>Observing:</InputLabel>
            <Select>
              <MenuItem value={10}>Entrance</MenuItem>
            </Select>{" "}
            <Switch />
          </Grid>
        </Grid>
      </div>
      <div className={classes.cam}>
        <img
          //need to get the right ip to be used here
          src="http://10.0.0.13:8000/stream.mjpg"
          alt="Local camera stream"
        />
      </div>
      <div className={classes.brightness}>
        Brightness
        <Slider valueLabelDisplay="auto" aria-labelledby="non-linear-slider" />
      </div>
      <div>*These and other settings to be implemented....</div>
    </Container>
  );
};

export default CameraFeed;
