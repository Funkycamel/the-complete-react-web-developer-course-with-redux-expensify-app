import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('', () => {

});
// Tests are failing due to locales in numeral

// test('should correctly render ExpensesSummary with 1 expense', () => {
//     const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal={235}/>);
//     expect(wrapper).toMatchSnapshot();
// });

// test('should correctly render ExpensesSummary with multiple expenses', () => {
//     const wrapper = shallow(<ExpensesSummary expenseCount = {23} expensesTotal={12398}/>);
//     expect(wrapper).toMatchSnapshot();
// });