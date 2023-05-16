import React, { Component } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Markets from "./markets";
import Search from "./search";
import Watchlist from "./watchlist";
import Discover from "./discover";
import Home from "./home";


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketData: null,
    };
  }

  onSearchResult = (marketData) => {
    this.setState({ marketData });
  };

  FromSlideMarketData = (marketData) => {
    this.setState({ marketData });
  };
  
  FromWatchlistMarketData = (marketData) => {
    this.setState({ marketData });
  };


  render() {
    return (
      <div className="page100 no-select">
        <Router>
          <div className="yes">
            <Search onSearchResult={this.onSearchResult} />
          </div>
          <div className="" >
            <div className="chart_page no-select">
            <Routes>
              <Route exact path="/" element={<Home FromSlideMarketData={this.FromSlideMarketData} FromWatchlistMarketData={this.FromWatchlistMarketData}/>} />
              <Route path="/watchlist" element={<Watchlist FromWatchlistMarketData={this.FromWatchlistMarketData}/>} />
              <Route path="/discover" element={<Discover FromWatchlistMarketData={this.FromWatchlistMarketData}/>} />
              <Route
                path="/markets"
                element={<Markets polygonData={this.state.marketData?.polygon_data}
                finnhubData={this.state.marketData?.finnhub_data}
                alphaVantageData={this.state.marketData?.alpha_vantage_data} />}
              />
            </Routes>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default MainPage;
