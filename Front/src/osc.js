import React, { Component } from "react";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import MarketsStats from "./market_stats";
import MarketsChart from "./market_chart";


class Osc extends Component {
    render() {
        return(
        <div>
            <Router>
                <Routes>
                    <Route path="/markets/stats" element={<MarketsStats/>}/>
                    <Route path="/markets/chart" element={<MarketsChart/>}/>
                </Routes>
            </Router>
        </div>
        )
    }
}

export default Osc;