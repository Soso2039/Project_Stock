import React, { Component } from "react";
import { BrowserRouter as Router} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
        <Router>
            <nav>
                <div className="div_margin_top">
                    <div onClick={() => { window.location.href = '/' }} className="navbar_div_path">Home</div>
                    <div onClick={() => { window.location.href = '/watchlist' }} className="navbar_div_path">Watchlist</div>
                    <div onClick={() => { window.location.href = '/discover' }} className="navbar_div_path">Discover</div>
                </div>
            </nav>
        </Router>
        )
    }
}

export default Navbar;