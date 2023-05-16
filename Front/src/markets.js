import React from "react";
import NavbarStats from "./navbar_stats";
import MarketsChart from "./market_chart";
import MarketsOverview from "./market_overview";
import MarketsStats from "./market_stats";

class Markets extends React.Component {
  state = {
    activeComponent: "overview"
  };

  setActiveComponent = component => {
    this.setState({ activeComponent: component });
  };

  render() {
    const alphaVantageData = this.props.alphaVantageData;
    const polygonData = this.props.polygonData;
    const finnhubData = this.props.finnhubData;
    const currentTime = new Date();
    const Hour = currentTime.getUTCHours();
    const Day = currentTime.getUTCDay();
    console.log(alphaVantageData)
    console.log(finnhubData)
    console.log(polygonData)

    let marketStatus;
      if (Day === 0 || Day === 6) {
       marketStatus = "closed";
      } 
      else if (Hour >= 13 && Hour < 20) {
        marketStatus = "open";
      } 
      else {
        marketStatus = "closed";
      }

    if (alphaVantageData && polygonData && finnhubData) {
      return (
        <div className="chart_page no-select">
          <div className="head_border">
            <div className="flex head_data">
              <div className="flex1">
                <div className="logo">
                  <img
                    src={polygonData.logo}
                    className="market_image"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="flex1">
                <div className="container">
                  <div className="flex1 name">
                    {polygonData.symbol}-{polygonData.name}
                  </div>
                  <div className="flex flex1">
                    <div className="flex1 price">{finnhubData.c}</div>
                    <div
                      className={`flex1 change ${
                        finnhubData.dp < 0 ? "negative" : "positive"
                      }`}
                    >
                      {finnhubData.dp}%
                    </div>
                  </div>
                  <div className="flex1 market_status">
                    {marketStatus === "open"
                      ? "Market open"
                      : "Market closed"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stock_navbar_height">
            <NavbarStats setActiveComponent={this.setActiveComponent} />
          </div>
          <div
            className="d-inline-block"
            style={{ height: "100%", width: "100%" }}
          >
            {this.state.activeComponent === "overview" && (
              <MarketsOverview
                alphaVantageData={alphaVantageData}
                polygonData={polygonData}
                finnhubData={finnhubData}
              />
            )}
            {this.state.activeComponent === "stats" && (
              <MarketsStats
                alphaVantageData={alphaVantageData}
                polygonData={polygonData}
                finnhubData={finnhubData}
                symbol={alphaVantageData.Symbol}
              />
            )}
            {this.state.activeComponent === "chart" && (
              <MarketsChart symbol={alphaVantageData.Symbol} />
            )}
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Markets;

