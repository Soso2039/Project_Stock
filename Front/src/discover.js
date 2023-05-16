import React, { Component } from "react";
import StockBar from "./stock_bar";
import StockBarHeader from "./stockbar_header";
import StockBarCynical from "./stock_bar_cyclical";
import StockBarDefensive from "./stock_bar_defensive";
import StockBarTechnology from "./stock_bar_technology";


class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: 'All'
        }
    }

    handleButtonClick = (buttonName) => {
        this.setState({ activeButton: buttonName });
    }

    FromWatchlistMarketData = (marketData) => {
        this.props.FromWatchlistMarketData(marketData);
    }

    renderStockBar = () => {
        switch (this.state.activeButton) {
            case 'Technology':
                return <StockBarTechnology FromWatchlistMarketData={this.FromWatchlistMarketData} />;
            case 'Consumer Defensive':
                return <StockBarDefensive FromWatchlistMarketData={this.FromWatchlistMarketData} />;
            case 'Consumer Cyclical':
                return <StockBarCynical FromWatchlistMarketData={this.FromWatchlistMarketData} />;
            default:
                return <StockBar FromWatchlistMarketData={this.FromWatchlistMarketData} />;
        }
    }

    render() {
        return (
            <div className="no-select">
                <div className="flex margin">
                    <div className="margin_bit">
                        <button className={`btn btn-light btn-outline-dark rounder_button ${this.state.activeButton === 'All' ? 'active' : ''}`} onClick={() => this.handleButtonClick('All')}>All</button>
                    </div>
                    <div className="margin_bit">
                        <button className={`btn btn-light btn-outline-dark rounder_button ${this.state.activeButton === 'Technology' ? 'active' : ''}`} onClick={() => this.handleButtonClick('Technology')}>Technology</button>
                    </div>
                    <div className="margin_bit">
                        <button className={`btn btn-light btn-outline-dark rounder_button ${this.state.activeButton === 'Consumer Defensive' ? 'active' : ''}`} onClick={() => this.handleButtonClick('Consumer Defensive')}>Consumer Defensive</button>
                    </div>
                    <div className="margin_bit">
                        <button className={`btn btn-light btn-outline-dark rounder_button ${this.state.activeButton === 'Consumer Cyclical' ? 'active' : ''}`} onClick={() => this.handleButtonClick('Consumer Cyclical')}>Consumer Cyclical</button>
                    </div>
                </div>
                <div>
                    <StockBarHeader />
                </div>
                <div>
                    {this.renderStockBar()}
                </div>
            </div>
        )
    }
}

export default Discover;