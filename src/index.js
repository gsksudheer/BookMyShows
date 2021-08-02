import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';

//import Navbar from '../components/Navbar/navbar.component';

// Contex Provider
import MovieProvider from "./contex/Movie.Context";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MovieProvider>
                <App/>
            </MovieProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
    