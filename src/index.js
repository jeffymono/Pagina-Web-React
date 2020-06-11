import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Principal from './components/pages/Principal'


const container = document.getElementById('root')
ReactDOM.render(
                <Router>
                    <Principal/>
                </Router>, container)
