import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocused: false,
      query: "",
      marketData: null,
    };
    this.linkRef = React.createRef();
  }

  search() {
    axios
      .get("http://localhost:8000/search/", {
        params: {
          query: this.state.query,
        },
      })
      .then((response) => {
        const marketData = response.data.results;
        const polygonData = marketData.polygon_data;
        const alphaVantageData = marketData.alpha_vantage_data;
        const finnhubData = marketData.finnhub_data;
        console.log(polygonData);
        console.log(alphaVantageData);
        console.log(finnhubData);
        if (polygonData && alphaVantageData && finnhubData) {
          this.props.onSearchResult(marketData);
          if (this.state.query !== "" && this.linkRef.current) {
            this.linkRef.current.click();
          }
          this.setState({ query: "" });
        } else {
          this.setState({ marketData: "invalid ticker" });
        }
      })
      .catch((error) => {
        console.error(error);
        console.log(error.response.data);
      });
  }
  

  handleInputFocus = () => {
    this.setState({ inputFocused: true });
  };

  handleInputBlur = () => {
    this.setState({ inputFocused: false });
  };

  componentDidMount() {
    var search = document.getElementById("search");
    var ticker = document.getElementById("ticker");

    search.addEventListener("mouseover", function() {
        ticker.style.display = "block";
    });

    search.addEventListener("mouseout", function() {
        ticker.style.display = "none";
    });
  }


  render() {
    const searchDivStyle = {
      backgroundColor: "#f2f2f2",
      border: "none",
      boxShadow: "none",
      transition: "width 0.25s ease",
      width: this.state.inputFocused ? "450px" : "400px",
    };

    const tickerDivStyle = {
      position: "absolute",
      top: "calc(10px)",
      left: "calc(50%)",
      display: this.state.tickerVisible ? "block" : "none",
      backgroundColor: "rgb(255, 255, 237)",
      padding: "10px",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      zIndex: 999,
      opacity: 1,
    };
  
    return (
      <div className="d-flex justify-content-center">
        <div className="margin"><BsQuestionCircle id="search" /></div>
        <div id="ticker" className="hidden-div ticker border" style={tickerDivStyle}>You need to search for a ticker: aapl, nvda, googl</div>
        <div className="search" style={searchDivStyle}>
          <Link
            to="/markets"
            className="search link-style"
            style={searchDivStyle}
            onClick={(event) => {
              if (this.state.query === "") {
                event.preventDefault();
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                this.search();
              } else if (!/^[a-zA-Z0-9\s]*$/.test(event.key)) {
                event.preventDefault();
              }
            }}
            ref={this.linkRef}
          >
            <FormGroup>
              <InputGroup>
              <InputGroup.Text
                className="search-icon"
                onClick={(event) => {
                  this.search();
                  if (event.key !== "Enter") {
                    event.preventDefault();
                  }
                }}
              >
                <FaSearch />
              </InputGroup.Text>
                <FormControl
                  type="text"
                  placeholder="Search"
                  style={{
                    backgroundColor: "#f2f2f2",
                    border: "none",
                    transition: "none",
                    boxShadow: "none",
                    height: "40px",
                    fontSize: "15px",
                    opacity: "0.7",
                  }}
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputBlur}
                  value={this.state.query}
                  onChange={(event) => {
                    this.setState({ query: event.target.value });
                  }}
                />
              </InputGroup>
            </FormGroup>
          </Link>
          {this.state.marketData === "invalid ticker" && (
            <div>Invalid ticker</div>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
