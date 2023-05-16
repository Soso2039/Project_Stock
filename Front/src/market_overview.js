import React, { Component } from "react";

function formatMarketCap(marketCap) {
  if (marketCap >= 1000000000000) {
    return (marketCap / 1000000000000).toFixed(2) + "T";
  } else if (marketCap >= 1000000000) {
    return (marketCap / 1000000000).toFixed(2) + "B";
  } else if (marketCap >= 1000000) {
    return (marketCap / 1000000).toFixed(2) + "M";
  } else {
    return marketCap;
  }
}
function formatRevenue(revenue) {
  if (revenue >= 1000000000) {
    return (revenue / 1000000000).toFixed(2) + "B";
  } else if (revenue >= 1000000) {
    return (revenue / 1000000).toFixed(2) + "M";
  } else {
    return revenue;
  }
}

class MarketsOverview extends Component {
  render() {
    const polygonData = this.props.polygonData;
    const alphaVantageData = this.props.alphaVantageData;
    const finnhubData = this.props.finnhubData;

    const formattedMarketCap = formatMarketCap(alphaVantageData["MarketCapitalization"]);
    const formattedRevenueTTM = formatRevenue(alphaVantageData["RevenueTTM"]);

    return (
        <div className="container_overview no-select">
          <div className="overview1 overview_border">
            <div className="overview1 flex">
              <div className="flex">
                <div className="margin_bit big_grey">
                  <div className="margin">Market Cap:</div>
                  <div className="margin">50DayMovingAverage: </div>
                  <div className="margin">52WeekHigh: </div>
                  <div className="margin">52WeekLow: </div>
                  <div className="margin">P/E Ratio:</div>
                  <div className="margin">Revenue: </div>
                </div>
                <div className="margin_bit big_grey">
                  <div className="margin">{formattedMarketCap}</div>
                  <div className="margin"> {alphaVantageData["50DayMovingAverage"]}</div>
                  <div className="margin"> {alphaVantageData["52WeekHigh"]} </div>
                  <div className="margin"> {alphaVantageData["52WeekLow"]}</div>
                  <div className="margin"> {alphaVantageData["PERatio"]}</div>
                  <div className="margin"> {formattedRevenueTTM}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overview2 overview_border flex1">
            <div className="flex1">
              <div className="big_grey margin_about"> About: {polygonData.name} </div>
              <div className="margin_bit"> {alphaVantageData.Description}</div>
              <div className="flex">
                <div className="margin_bit big_grey">CEO: {polygonData.ceo}</div>
                <div className="margin_bit big_grey">Industry: {polygonData.industry}</div>
              </div>
              <div className="flex">
                <div className="margin_bit big_grey">Exchange: {polygonData.exchange}</div>
                <div className="margin_bit big_grey">List Date: {polygonData.listdate}</div>
              </div>
            </div>
          </div> 
          <div className="overview3 overview_border">
            <div className="middle flex margin_top">
              <div className="big_black">
              Analyst price target:
              </div>
            </div>
            <div className="middle flex">
              <div className={alphaVantageData.AnalystTargetPrice > finnhubData.c ? "big_green" : "big_red"}>{alphaVantageData.AnalystTargetPrice}</div>
            </div>
            <div className="middle flex">
              <div className="big_black">
              Consensus:
              </div>
            </div>
            <div className="middle flex">
              <div className={alphaVantageData.AnalystTargetPrice > finnhubData.c ? "big_green" : "big_red"}>{alphaVantageData.AnalystTargetPrice > finnhubData.c ? "Buy" : "Sell"}</div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default MarketsOverview;
  