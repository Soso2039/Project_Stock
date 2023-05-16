import React, { Component } from "react";
import { Chart as Chartjs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import {Bar} from 'react-chartjs-2';
import Slide from "./slide";

Chartjs.register(
  BarElement ,CategoryScale, LinearScale, Tooltip, Legend,
)


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  
  componentDidMount() {
    fetch(
      "https://gnews.io/api/v4/search?q=finance&lang=en&country=us&topic=business&token=3b59487d3188481352ceeacaacace037"
    )
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
        this.setState({ news: data.articles });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  FromSlideMarketData = (marketData) => {
    this.props.FromSlideMarketData(marketData);
  }

  render() {
    const data1 = {
      labels:['AMD','INTC','NVDA','TSLA','GOOGL'],
      datasets:[
        {
          label: 'Top Gains(%)',
          data:[6.5,5.23,4.67,4.23,4.31],
          backgroundColor:'rgb(0, 189, 72)',
          borderColor:'white',
          borderWidth:'1px',
        }
      ]
    }
    const options1 = {
      aspectRatio: 2,
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
    
    const data2 = {
      labels:['AAPL','NFLX','AMZN','PEP','META'],
      datasets:[
        {
          label: 'Top Loses(%)',
          data:[5.5,5.13,4.47,3.73,3.31],
          backgroundColor:'rgb(195, 8, 8)',
          borderColor:'grey',
          borderWidth:'1px',
        }
      ]
    }
    const options2 = {
      aspectRatio: 2,
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
    
    
    return (
      <div className="flex1 no-select">
        <Slide FromSlideMarketData={this.FromSlideMarketData}/>
        <div className="flex">
        <div className="news overview_border">
          <div className="margin_bit big_big_grey flex middle">
            Latest News:
          </div>
          {this.state.news.map((article) => (
            <div key={article.url} className="flex news_border">
                <div>
                    <img src={article.image} alt={article.title} className="market_image margin_bit" />
                </div>
                <div>
                    <div className="margin_bit big_black"> {article.title} </div>
                    <div className="margin_bit"> {article.description} </div>
                    <div className="margin_bit"> <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a> </div>
                </div>
            </div>
          ))}
        </div>
        <div className="gain_loss">
            <div className="gains overview_border big_grey"> 
              <div className="margin_bit flex gains_loses_chart">
                  <Bar
                  data={data1}
                  options={options1}>
                  </Bar>
              </div>
            </div>
            <div className="loses overview_border big_grey">
              <div className="margin_bit flex gains_loses_chart">
                  <Bar
                  data={data2}
                  options={options2}>
                  </Bar>
              </div>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
