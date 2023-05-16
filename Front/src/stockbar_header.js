import React, { Component } from "react";


class StockBarHeader extends Component {
    render() {
        return(
        <div className="stock_bar_header flex">
            <div className="header_markets">Markets</div>
            <div className="header_change">Change 1D</div>
            <div className="header_sell">Sell</div>
            <div className="header_buy">Buy</div>
            <div className="header_range">52W Range</div>
        </div>
        )
    }
}

export default StockBarHeader;