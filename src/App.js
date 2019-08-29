import React, {Component} from 'react';
import './App.css';

class App extends Component {

    componentDidMount() {
        document.title = "Home";
    }

    headerNames = ['Make', 'Model', 'Model Year', 'Model Body', 'Model Drive', 'Model Transmission Type', 'Model Doors', 'Make Country', 'Engine Fuel Type', 'Count'];


    render() {
        return (
            <div className="App">
                <br/>
                <button id={'RequestVehicleCounts'} name={"Request Vehicle Counts"}>Request Vehicle Counts</button>
                <br/>>
                <table id={'VehicleData'}>
                    <tbody>
                    <tr>{this.getTableHeaders()}</tr>
                    </tbody>
                </table>
            </div>
        );
    }

    getTableHeaders() {
        return this.headerNames.map((item, index) => {
            return <th key={index} id={this.clearSpacesForId(item)}>{item.toString().toUpperCase()}</th>
        });
    }

    clearSpacesForId(name) {
        return name.replace(/\s/g, '');
    }

}

export default App;
