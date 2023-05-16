import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data1 from "./data1.json";
import axios from 'axios';

class StockBarTechnology extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputFocused: false,
          query: "",
          marketData: null,
        };
      }
    search(id) {
      axios
      .get("http://localhost:8000/search/", {
        params: {
          query: id,
        },
      })
      .then((response) => {
        if (response.data) {
          const marketData = response.data.results;
          const polygonData = marketData.polygon_data;
          const alphaVantageData = marketData.alpha_vantage_data;
          const finnhubData = marketData.finnhub_data;
          console.log(polygonData);
          console.log(alphaVantageData);
          console.log(finnhubData);
          if (typeof this.props.FromWatchlistMarketData === 'function') {
            this.props.FromWatchlistMarketData(marketData);
          }
        }
      })
      .catch((error) => {
        console.error(error);
        console.log(error.response.data);
      });
      }
  
    render() {
        return(
        <div>
          <Link className="link-style" to="/markets">
            {data1.filter(item => item.sector === 'Technology').map((item) => (
                <div key={item.name} className="flex border_bottom" id={item.symbol} onClick={() => this.search(item.symbol)}>
                    <div className="bar_logo">
                    <img src={item.logo} alt="Logo" className="market_image"/>
                    </div>
                    <div className="bar_nume margin_top3">{item.name}
                    <div>{item.symbol.toUpperCase()}</div>
                    </div>
                    <div
                      className={`flex1 bar_change margin_top ${ item.change < 0 ? "negative" : "positive"}`}>
                      {item.change}%
                    </div>
                    <div className="bar_sell margin_top"><div className="margin_right flex middle margin_bit"><div className="background_color">{item.sell}</div></div></div>
                    <div className="bar_buy margin_top"><div className="margin_right flex middle margin_bit"><div className="background_color">{item.buy}</div></div></div>
                    <div className="bar_range margin_top">{item.ragne}</div>
                </div>
            ))}
          </Link>
        </div>
        )
    }
}

export default StockBarTechnology;