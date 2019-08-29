import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Request Vehicle Counts Button', () => {

    var app;

    beforeEach(() => {
        app = mount(<App/>);
    });

    it('Request Vehicle Counts Button Exists', () => {
        let button = app.find('#RequestVehicleCounts');
        expect(button.type()).toEqual('button');
        expect(button.text()).toEqual('Request Vehicle Counts');
    });


});