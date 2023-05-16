import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class Slide extends Component {
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
            const marketData = response.data.results;
            const polygonData = marketData.polygon_data;
            const alphaVantageData = marketData.alpha_vantage_data;
            const finnhubData = marketData.finnhub_data;
            console.log(polygonData);
            console.log(alphaVantageData);
            console.log(finnhubData);
            this.props.FromSlideMarketData(marketData);
          })
          .catch((error) => {
            console.error(error);
            console.log(error.response.data);
          });
      }
    
    render() {
        return(
            <div>
            <div className="stocks_slide">
              <div className="margin_bit margin_slide slide_border_height flex slide_inside_fade stocks_slide flex">
                <div className="slide_border d-flex justify-content-center slide_short">
                  <div className="slide100 flex">
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                        <div className="margin_bit" id="aapl" onClick={() => this.search('aapl')}>
                          Aaple
                          <div className="green_procent">
                            2.3%
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                        <div className="margin_bit" id="googl" onClick={() => this.search('googl')}>
                          Alphabet
                          <div className="green_procent">
                            3.1%
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                        <div className="margin_bit" id="amzn" onClick={() => this.search('amzn')}>
                          Amazon
                          <div className="green_procent">
                            1.4%
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                        <div className="margin_bit" id="msft" onClick={() => this.search('msft')}>
                          Microsoft
                          <div className="green_procent">
                            2.7%
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                        <div className="margin_bit" id="nke" onClick={() => this.search('nke')}>
                          Nike
                          <div className="green_procent">
                            1.3%
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                        <div className="margin_bit" id="nvda" onClick={() => this.search('nvda')}>
                          Nvidia
                          <div className="green_procent">
                            1.5%
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                        <div className="margin_bit" id="tsla" onClick={() => this.search('tsla')}>
                          Tesla
                          <div className="green_procent">
                            1.9%
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="slide0 flex">
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                        <div className="margin_bit " id="aapl" onClick={() => this.search('aapl')}>
                          Aaple
                          <div className="green_procent">
                            2.3%
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                        <div className="margin_bit" id="googl" onClick={() => this.search('googl')}>
                        Alphabet
                        <div className="green_procent">
                        3.1%
                        </div>
                    </div>
                    </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                    <div className="margin_bit" id="amzn" onClick={() => this.search('amzn')}>
                        Amazon
                        <div className="green_procent">
                        1.4%
                        </div>
                    </div>
                    </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                    <div className="margin_bit" id="msft" onClick={() => this.search('msft')}>
                        Microsoft
                        <div className="green_procent">
                        2.7%
                        </div>
                    </div>
                    </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                    <div className="margin_bit" id="nke" onClick={() => this.search('nke')}>
                        Nike
                        <div className="green_procent">
                        1.3%
                        </div>
                    </div>
                    </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                    <div className="margin_bit" id="nvda" onClick={() => this.search('nvda')}>
                        Nvidia
                        <div className="green_procent">
                        1.5%
                        </div>
                    </div>
                    </Link>
                    </div>
                    <div className="slide_block slide_border stocks_slide ">
                    <Link to="/markets"  className="link-style">
                    <div className="margin_bit" id="tsla" onClick={() => this.search('tsla')}>
                        Tesla
                        <div className="green_procent">
                        1.9%
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default Slide;