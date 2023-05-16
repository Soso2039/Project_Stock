import React, { Component } from "react";
import { BsGridFill, BsBarChartFill, BsGraphUp } from 'react-icons/bs';


class NavbarStats extends Component {
    render() {
        const { setActiveComponent } = this.props;
        return(
        <div className="flex flex1 stock_navbar navbar_middle no-select">
            <div onClick={() => setActiveComponent("overview")} className="flex1 div_same_width flex" ><div className="icon_spacing"><BsGridFill/></div>Overview</div>
            <div onClick={() => setActiveComponent("stats")} className="flex1 div_same_width flex"><div className="icon_spacing"><BsBarChartFill/></div>Stats</div>
            <div onClick={() => setActiveComponent("chart")} className="flex1 div_same_width flex"><div className="icon_spacing"><BsGraphUp/></div>Chart</div>
        </div>
        )
    }
}

export default NavbarStats;