import React, { Component } from "react";
import { TextField, MenuItem, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchFlights } from "../state/actions";
import FlightResults from "../components/FlightResults";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCity: "",
      toCity: "",
      travelDate: "",
      returnDate: "",
    };
  }

  airports = ["Pune", "Delhi", "Bengaluru", "Mumbai"];

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  render() {
    return (
      <div>
        <form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              paddingTop: "10px",
            }}
          >
            <TextField
              helperText="Please select the From City"
              style={{ width: "20%" }}
              label="From"
              select
              name="fromCity"
              value={this.state.fromCity}
              onChange={this.changeHandler}
            >
              {this.airports.map((airport, index) => (
                <MenuItem key={index} value={airport}>
                  {airport}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              helperText="Please select the To City"
              style={{ width: "20%" }}
              label="Destination"
              select
              name="toCity"
              value={this.state.toCity}
              onChange={this.changeHandler}
            >
              {this.airports.map((airport, index) => (
                <MenuItem key={index} value={airport}>
                  {airport}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              helperText="Please choose the Travel Date"
              style={{ width: "20%" }}
              label="TravelDate"
              type="date"
              name="travelDate"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.changeHandler}
              value={this.state.travelDate}
            />
            <Button
              variant="outlined"
              style={{ backgroundColor: "orange" }}
              onClick={() => {
                return this.props.fetchFlights(
                  this.state.fromCity,
                  this.state.toCity,
                  this.state.travelDate
                );
              }}
            >
              Search
            </Button>
          </div>
        </form>
        <div style={{ textAlign: "center", paddingTop: "30px" }}>
          <FlightResults flights={this.props.flights} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flights: state.flights,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFlights: (fromCity, toCity, travelDate) =>
      dispatch(fetchFlights(fromCity, toCity, travelDate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
