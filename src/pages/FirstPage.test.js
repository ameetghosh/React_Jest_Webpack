import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import FirstPage from './FirstPage';

describe('FirstPage', () => {
    it('FirstPage component should render as expected', () => {
        const component = shallow(<FirstPage />)
        expect(component.find('button').length).toEqual(1);
        expect(component.contains('Enter Name')).toBe(true);
    });
    it('FirstPage component click ', () => {
        const component = mount(<FirstPage />)
        console.log(component.props());
        component.find('button').simulate('click');
    })
    it('FirstPage component click false', () => {
        const component = mount(<FirstPage addName={this.newName.bind(this)} title="Submit" />)
        component.find('input').node.value = 'Test';
        component.find('button').simulate('click');
        //component.props().addName = jest.fn( component.prop().addName);
        expect(component.prop().addName).toHaveBeenCalledWith('Test');
    })
})
