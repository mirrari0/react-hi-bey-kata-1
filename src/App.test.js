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
        expect(app.contains('tr#0')).toBe(false);
    });
});

describe('Request Vehicle Counts Button Functionality',() => {

    var app;

    beforeEach(() => {
        app = mount(<App/>);
    });

    it('On Click, table is set to visible',()=>{
        expect(app.contains('tr#0')).toBe(false);
        app.find('button#RequestVehicleCounts').simulate('click');
        app.update();
        expect(app.state().isHidden).toBe(false);
    })
});
