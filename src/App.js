import React, {Component} from 'react';
import './App.css';

class App extends Component {

    componentDidMount() {
        document.title = "Home";
    }

    render() {
        return (
            <div className="App">
                <br/>
                <button id={'RequestVehicleCounts'} name={"Request Vehicle Counts"}>Request Vehicle Counts</button>
            </div>
        );
    }
}

export default App;
