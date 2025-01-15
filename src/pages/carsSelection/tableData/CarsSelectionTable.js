import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { Box, Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const CarsSelectionTable = (props) => {
  const data = useSelector((state) => state.ModelsCar.data.Results);

  return (
    <Card p={2}>
      <Box display="flex" m={3}>
        <Typography variant="h6" fontWeight="bold">
          Vehicle Models for {props.year}
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            "& .MuiTableCell-root": {
              border: "none",
              fontWeight: "bold",
            },
            "& .MuiTableRow-root": {
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.02)",
              },
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" width="40%">
                Make Name
              </TableCell>
              <TableCell align="center" width="40%">
                Model Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" width="40%">
                  {row.Make_Name}
                </TableCell>
                <TableCell align="center" width="40%">
                  {row.Model_Name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default CarsSelectionTable;
