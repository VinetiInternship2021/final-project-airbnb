import './App.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Application from './components/Route/Application'
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
