import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor () {
        super();
        this.state = {
            isHidden: true,
            vehicles: []
        }
    }

    componentDidMount() {
        document.title = "Home";
    }

    headerNames = ['Make', 'Model', 'Model Year', 'Model Body', 'Model Drive', 'Model Transmission Type', 'Model Doors', 'Make Country', 'Engine Fuel Type', 'Count'];


    render() {
        return (
            <div className="App">
                <br/>
                <button id={'RequestVehicleCounts'} name={"Request Vehicle Counts"} onClick={
                    () => { this.updateTableData() }
                }>Request Vehicle Counts</button>
                <br/>
                <table id={'VehicleData'} style={this.state.isHidden ? { display: 'none' } : {} }>
                    <thead>
                    <tr id={'header'}>
                    {this.getTableHeaders()}
                    </tr>
                    </thead>
                    <tbody>
                    {this.getTableData()}
                    </tbody>
                </table>
            </div>
        );
    }

    updateTableData() {
        this.setState({vehicles: [['Honda', 'Civic', '2016', 'Si', 'FWD', 'Manual', '2', 'Japan', 'Regular Unleaded', '282828']],
            isHidden: false})
    }

    getTableData() {
        return this.state.vehicles.map((item, index) => {
            return <tr id={'row-'+index}>
                {this.headerNames.map((dataType, dataIndex) => {
                    return <td id={this.clearSpacesForId(dataType)+'-'+index}>{item[dataIndex]}</td>
            })}
            </tr>
        });
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
