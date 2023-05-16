import React, { Component } from "react";
import { BsGear, BsBuilding, BsPersonCheck, BsPeople, } from 'react-icons/bs'
import { Chart as Chartjs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import {Bar} from 'react-chartjs-2';

Chartjs.register(
    BarElement ,CategoryScale, LinearScale, Tooltip, Legend,
  )

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

  function format(marketCap) {
    if (marketCap >= 1000000000) {
      return (marketCap / 1000000000).toFixed(2);
    }
  }


  class MarketsStats extends Component {
    constructor(props) {
      super(props);
      this.widget = null;
    }
  
    componentDidMount() {
      this.createWidget(this.props.symbol);
    }
  
    componentDidUpdate(prevProps) {
      if (prevProps.symbol !== this.props.symbol) {
        this.createWidget(this.props.symbol);
      }
    }
  
    createWidget(symbol) {
        const widgetOptions = {
          symbol: symbol,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "3",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_top_toolbar: true,
          hide_legend: true,
          hide_side_toolbar: true,
          allow_symbol_change: false,
          container_id: "tradingview-widget-container",
          autosize: true,
          studies: [
            {
              id: "volume@tv-basicstudies",
              visible: false,
            },
          ],
          charts_storage_api_version: "1.1",
          client_id: "tradingview.com",
          user_id: "public_user_id",
          range: "6M",
        };
      
        if (this.widget) {
          this.widget.remove();
        }
      
        this.widget = new window.TradingView.widget(widgetOptions);
      }
    
    render() {
    const polygonData = this.props.polygonData;
    const alphaVantageData = this.props.alphaVantageData;
    const finnhubData = this.props.finnhubData;

    const formattedMarketCap = formatMarketCap(alphaVantageData["MarketCapitalization"]);
    const formattedRevenueTTM = formatMarketCap(alphaVantageData["RevenueTTM"]);
    const formattedGrossProfitTTM = formatMarketCap(alphaVantageData["GrossProfitTTM"]);
    const formatRevenueTTM = format(alphaVantageData["RevenueTTM"]);
    const formatGrossProfitTTM = format(alphaVantageData["GrossProfitTTM"]);
    const formatEBITDA = format(alphaVantageData["EBITDA"]);

        const data1 = {
            labels:['Bilions'],
            datasets:[
              {
                label: 'Revenue',
                data: [formatRevenueTTM],
                backgroundColor:'rgb(88, 191, 255)',
                borderColor:'white',
                borderWidth:'1px',
              },
              {
                label: 'Gross Profit',
                data:[formatGrossProfitTTM],
                backgroundColor:'rgb(255, 202, 78)',
                borderColor:'white',
                borderWidth:'1px',
              },
              {
                label: 'EBITDA',
                data:[formatEBITDA],
                backgroundColor:'rgb(255, 147, 250)',
                borderColor:'white',
                borderWidth:'1px',
              },
            ]
          }
          const options1 = {
            aspectRatio: 1,
            scales: {
              xAxes: [{
                barPercentage: 0.6,
                categoryPercentage: 0.5,
              }]
            },
            plugins: {
              title: {
                display: true,
                text: 'Chart Title',
              },
              legend: {
                display: true,
                position: 'bottom',
              },
            },
          };

        return(
            <div className="no-select">
                <div className="stats1 overview_border ">
                    <div className="flex ">
                        <div className="margin min_width">
                            <div>
                                Overview
                            </div>
                            <div className="margin_top big_grey">
                                Prev Close
                            </div>
                            <div className="big_light_grey">
                            {finnhubData.pc}
                            </div>
                            <div className="margin_top big_grey">
                                Day's Range
                            </div>
                            <div className="big_light_grey">
                                {finnhubData.l}-{finnhubData.h}
                            </div>
                            <div className="margin_top big_grey">
                                52 Week Range
                            </div>
                            <div className="big_light_grey">
                                {alphaVantageData["52WeekLow"]}-{alphaVantageData["52WeekHigh"]}
                            </div>
                            <div className="margin_top big_grey">
                                Beta
                            </div>
                            <div className="big_light_grey">
                                {alphaVantageData["Beta"]}
                            </div>
                            <div className="margin_top big_grey">
                                Book Value
                            </div>
                            <div className="big_light_grey">
                                {alphaVantageData["BookValue"]}
                            </div>
                        </div>
                        <div className="margin min_width">
                            <div className="margin_top2 big_grey">
                                Market Cap
                            </div>
                            <div className="big_light_grey">
                            {formattedMarketCap}
                            </div>
                            <div className="margin_top big_grey">
                                Dividend Yield
                            </div>
                            <div className="big_light_grey">
                            {alphaVantageData["DividendYield"]}
                            </div>
                            <div className="margin_top big_grey">
                                Dividend/Share
                            </div>
                            <div className="big_light_grey">
                                {alphaVantageData["DividendPerShare"]}
                            </div>
                            <div className="margin_top big_grey">
                                EPS
                            </div>
                            <div className="big_light_grey">
                                {alphaVantageData["EPS"]}
                            </div>
                            <div className="margin_top big_grey">
                                P/E Ratio
                            </div>
                            <div className="big_light_grey">
                                {alphaVantageData["PERatio"]}
                            </div>
                        </div>
                        <div className="stats_chart">
                            <div id="tradingview-widget-container" className="chart_page"></div>
                        </div>
                    </div>
                    <div className="flex border_top ">
                        <div className="margin_icons flex middle">
                            <div className="margin_bit big_light_grey">
                                <BsBuilding size={50}/> 
                            </div>
                            <div className="margin_bit big_light_grey">
                                Sector
                                <div className="big_grey">
                            {polygonData.sector}
                                </div>
                            </div>
                        </div>
                        <div className="margin_icons flex">
                            <div className="margin_bit big_light_grey">
                                <BsGear size={50}/> 
                            </div>
                            <div className="margin_bit big_light_grey">
                                Industry
                                <div className="big_grey">
                            {polygonData.industry}
                                </div>
                            </div>
                        </div>
                        <div className="margin_icons flex">
                            <div className="margin_bit big_light_grey">
                                <BsPersonCheck size={50}/> 
                            </div>
                            <div className="margin_bit big_light_grey">
                                CEO
                                <div className="big_grey">
                            {polygonData.ceo}
                                </div>
                            </div>
                        </div>
                        <div className="margin_icons flex">
                            <div className="margin_bit big_light_grey">
                                <BsPeople size={50}/> 
                            </div>
                            <div className="margin_bit big_light_grey">
                                Employees
                                <div className="big_grey">
                                    {polygonData.employees}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stats2 overview_border">
                    <div className="margin ">
                        <div className="big_grey">
                            Financial Sumary
                        </div>
                        <div>
                            For the quater ended in  {alphaVantageData["LatestQuarter"]} in the trailing twelve months(TTM) category, {alphaVantageData["Name"]}'s 
                            revenue has been {formattedRevenueTTM}, gross profit has been {formattedGrossProfitTTM}, price to sell ratio has
                            been {alphaVantageData["PriceToSalesRatioTTM"]} and the revenue per share is {alphaVantageData["RevenuePerShareTTM"]}.
                        </div>
                        <div className="flex margin financial">
                            <div className="margin financial_chart">
                                <Bar
                                    className="financial_chart"
                                    data={data1}
                                    options={options1}>
                                </Bar>
                            </div>
                            <div className="margin financial_data">
                                <div className="margin middle" >
                                    <div className="big_black margin_bit flex middle">
                                    Quarterly Earnings <br/> Growth(YOY)
                                    </div>
                                    <div className="big_light_grey margin_bit flex middle">
                                    {alphaVantageData["QuarterlyEarningsGrowthYOY"]}
                                    </div>
                                </div>
                                <div className="margin">
                                    <div className="big_black margin_bit flex middle">
                                    Quarterly Revenue <br/> Growth (YOY)
                                    </div>
                                    <div className="big_light_grey margin_bit flex middle">
                                    {alphaVantageData["QuarterlyRevenueGrowthYOY"]}
                                    </div>
                                </div>
                                <div className="margin">
                                <div className="big_black margin_bit flex middle">
                                    Return On Assets (TTM)
                                    </div>
                                    <div className="big_light_grey margin_bit flex middle">
                                    {alphaVantageData["ReturnOnAssetsTTM"]}
                                    </div>
                                </div>
                                <div className="margin">
                                <div className="big_black margin_bit flex middle">
                                    Revenue Per Share (TTM)
                                    </div>
                                    <div className="big_light_grey margin_bit flex middle">
                                    {alphaVantageData["RevenuePerShareTTM"]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarketsStats;