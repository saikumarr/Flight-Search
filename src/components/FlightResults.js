import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  withStyles,
  Paper,
  TableContainer,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const FlightResults = ({ flights }) => {
  if (flights === "No Flights Found!!!") {
    return <h4>{flights}</h4>;
  } else {
    return (
      flights.length > 0 && (
        <div style={{ paddingLeft: "100px", width: "80%" }}>
          <TableContainer container={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Flight#</StyledTableCell>
                  <StyledTableCell>Departure</StyledTableCell>
                  <StyledTableCell>Arrival</StyledTableCell>
                  <StyledTableCell>Price</StyledTableCell>
                  <StyledTableCell>Book</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {flights.map((flight, index) => {
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell>{flight.name}</StyledTableCell>
                      <StyledTableCell>{flight.flightNo}</StyledTableCell>
                      <StyledTableCell>{flight.departureTime}</StyledTableCell>
                      <StyledTableCell>{flight.arrivalTime}</StyledTableCell>
                      <StyledTableCell>{flight.price}</StyledTableCell>
                      <StyledTableCell>
                        <Button variant="outlined">Book Now</Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )
    );
  }

  //   return content;
};

export default FlightResults;
