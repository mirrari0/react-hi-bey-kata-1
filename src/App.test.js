import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme';


describe('Render Page Elements', () => {

    var app;

    beforeEach(() => {
        app = mount(<App/>);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Request Vehicle Counts Button Exists', () => {
        let button = app.find('#RequestVehicleCounts');
        expect(button.type()).toEqual('button');
        expect(button.text()).toEqual('Request Vehicle Counts');
    });

    it('Empty Vehicle Data Exists', () => {
        let table = app.find('#VehicleData');
        expect(table.type()).toEqual('table');
        expect(app.state().isHidden).toBe(true);
        expect(app.find('th#Make').text()).toEqual('MAKE');
        expect(app.find('th#Model').text()).toEqual('MODEL');
        expect(app.find('th#ModelYear').text()).toEqual('MODEL YEAR');
        expect(app.find('th#ModelBody').text()).toEqual('MODEL BODY');
        expect(app.find('th#ModelDrive').text()).toEqual('MODEL DRIVE');
        expect(app.find('th#ModelTransmissionType').text()).toEqual('MODEL TRANSMISSION TYPE');
        expect(app.find('th#ModelDoors').text()).toEqual('MODEL DOORS');
        expect(app.find('th#MakeCountry').text()).toEqual('MAKE COUNTRY');
        expect(app.find('th#EngineFuelType').text()).toEqual('ENGINE FUEL TYPE');
        expect(app.find('th#Count').text()).toEqual('COUNT');
        expect(app.find('#row-0').length).toEqual(0);
    });
});

describe('Request Vehicle Counts Button Functionality',() => {

    var app;

    beforeEach(() => {
        app = mount(<App/>);
    });

    it('On Click, table is set to visible',()=>{
        expect(app.find('#row-0').length).toEqual(0);
        app.find('button#RequestVehicleCounts').simulate('click');
        app.update();
        expect(app.state().isHidden).toBe(false);
    });

    it('On Click, table is populated',()=>{
        expect(app.find('#row-0').length).toEqual(0);
        app.find('button#RequestVehicleCounts').simulate('click');
        app.update();
        expect(app.find('#row-0').type()).toEqual('tr');
        let vehicle = app.state().vehicles[0];

        validateTableData("Make", 0, vehicle[0], app);
        validateTableData("Model", 0, vehicle[1], app);
        validateTableData("ModelYear", 0, vehicle[2], app);
        validateTableData("ModelBody", 0, vehicle[3], app);
        validateTableData("ModelDrive", 0, vehicle[4], app);
        validateTableData("ModelTransmissionType", 0, vehicle[5], app);
        validateTableData("ModelDoors", 0, vehicle[6], app);
        validateTableData("MakeCountry", 0, vehicle[7], app);
        validateTableData("EngineFuelType", 0, vehicle[8], app);
        validateTableData("Count", 0, vehicle[9], app);
    })
});

function validateTableData(column, row, expectedText, app) {
    let cell = app.find('#'+column+'-'+row);
    expect(cell.type()).toEqual('td');
    expect(cell.text()).toEqual(expectedText);
}

