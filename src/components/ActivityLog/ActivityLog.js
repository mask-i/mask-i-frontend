import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
const ActivityLog = () => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell align="right">Mask Status</TableCell>
              <TableCell align="right">Confidence(%)</TableCell>
              <TableCell align="right">Camera</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* map whatever data we get to TableCells for display */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ActivityLog;
