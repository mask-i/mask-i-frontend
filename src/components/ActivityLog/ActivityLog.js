import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import classes from "./ActivityLog.module.css";
const ActivityLog = () => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Mask Status</TableCell>
              <TableCell>Confidence(%)</TableCell>
              <TableCell>Camera</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell scope="row">6/17/2020 9:21PM</TableCell>
              <TableCell>
                <div className={classes.circle} />
              </TableCell>
              <TableCell>93</TableCell>
              <TableCell>ENTRANCE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">6/17/2020 9:25PM</TableCell>
              <TableCell>
                <div className={classes.offcircle} />
              </TableCell>
              <TableCell>92</TableCell>
              <TableCell>ENTRANCE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">6/17/2020 9:37PM</TableCell>
              <TableCell>
                <div className={classes.circle} />
              </TableCell>
              <TableCell>90</TableCell>
              <TableCell>ENTRANCE</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ActivityLog;
