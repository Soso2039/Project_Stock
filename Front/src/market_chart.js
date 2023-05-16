import React, { Component } from "react";

class MarketsChart extends Component {
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
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview-widget-container",
      autosize: true,
    };

    if (this.widget) {
      this.widget.remove();
    }

    this.widget = new window.TradingView.widget(widgetOptions);
  }

  render() {
    return (
      <div className="absolut_chart" >
        <div id="tradingview-widget-container" className="chart_page"></div>
      </div>
    );
  }
}

export default MarketsChart;

