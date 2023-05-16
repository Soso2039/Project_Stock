import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import MainPage from './main_page';
import Navbar from './navbar';
import Osc from './osc';


ReactDOM.render(
    <App />, document.getElementById('root')
);

ReactDOM.render(
    <Navbar />, document.getElementById('navbar')
);

ReactDOM.render(
    <MainPage />, document.getElementById('page')
);

ReactDOM.render(
    <Osc />, document.getElementById('stock_data')
)
