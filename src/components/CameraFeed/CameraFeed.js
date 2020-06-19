import React, { useState } from "react";
import {
  Container,
  Slider,
  Select,
  InputLabel,
  MenuItem,
  Grid,
  Switch,
  FormControl,
  Button,
} from "@material-ui/core";
import classes from "./CameraFeed.module.css";
const CameraFeed = () => {
  const [camera, setCamera] = useState({
    cameraPower: true,
  });
  const [settings, setSettings] = useState({
    ramerate: 90,
    resolution: "640x480",
  });

  const handleSettingsChange = (event) => {
    setSettings(event.target.value);
  };
  const handlePowerChange = (event) => {
    setCamera({ ...camera, [event.target.name]: event.target.checked });
  };
  console.log(settings);
  return (
    <Container>
      <div className={classes.topControls}>
        <Grid container spacing={10}>
          <Grid item xs>
            <Switch
              checked={camera.cameraPower}
              onChange={handlePowerChange}
              name="cameraPower"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.cam}>
        {camera.cameraPower ? (
          <img
            //need to get the right ip to be used here
            src="http://192.168.0.106:5000/"
            alt="Local camera stream"
          />
        ) : (
          <h3>Camera off. Use toggle above to turn it back on.</h3>
        )}
      </div>
      <div className={classes.brightness}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Resolution</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={settings}
            onChange={handleSettingsChange}
          >
            <MenuItem value={"640x480 90fps"}>640x480 90fps</MenuItem>
            <MenuItem value={"1280x720 60fps"}>1280x720 60fps</MenuItem>
            <MenuItem value={"1920x1080 25fps"}>1920x1080 25fps</MenuItem>
          </Select>
        </FormControl>{" "}
      </div>{" "}
      <Button variant="contained" onClick={() => {}}>
        SAVE SETTINGS
      </Button>
    </Container>
  );
};

export default CameraFeed;
