import './App.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Application from './components/Route/Application'
import React from 'react'

console.log(React.version)
function App() {
    return (
        <Router>
            <Switch>
                <Application />
            </Switch>
        </Router>
    )
}

export default App
