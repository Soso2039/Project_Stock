import React, { Component } from "react";
import treefrog from "./images/tree-frog.png";

class App extends Component {
    render() {
        return(
        <div>
            <div className="d-flex">
                <div  onClick={() => {window.location.href = '/'}}>
                    <img src={treefrog} alt="" className="image_etoro" />
                </div>
            </div>
        </div>
        )
    }
}

export default App;