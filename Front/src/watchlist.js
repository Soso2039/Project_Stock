import React, { Component } from "react";
import StockBar from "./stock_bar";
import StockBarHeader from "./stockbar_header";


class Watchlist extends Component {
    
    
    FromWatchlistMarketData = (marketData) => {
        this.props.FromWatchlistMarketData(marketData);
      }
    
    render() {
        return(
        <div className="no-select"> 
            <div>
                <StockBarHeader/>
            </div>
            <div>
                <StockBar FromWatchlistMarketData={this.FromWatchlistMarketData}/>
            </div>
        </div>
        )
    }
}

export default Watchlist;