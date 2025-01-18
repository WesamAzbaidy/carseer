import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { Box, Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const CarsSelectionTable = (props) => {
  const data = useSelector((state) => state.ModelsCar?.modelsCar?.data);
  const totalCount = useSelector((state) => state.ModelsCar?.modelsCar?.totalCount || 0);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    // Fetch new data for the selected page
    props.onPageChange(newPage + 1, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    // Fetch new data for the updated rows per page
    props.onPageChange(1, newRowsPerPage);
  };

  return (
    <>
      {data === undefined ? (
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            No Data Found
          </Typography>
        </Box>
      ) : (
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
                {data?.map((row) => (
                  <TableRow key={row.modelID}>
                    <TableCell align="center" width="40%">
                      {row.makeName}
                    </TableCell>
                    <TableCell align="center" width="40%">
                      {row.modelName}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={totalCount}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      )}
    </>
  );
};

export default CarsSelectionTable;
