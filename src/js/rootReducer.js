import { combineReducers } from 'redux';
import expenseReducer from './components/ExpenseEntries/expenseReducer';
import incomeReducer from './components/IncomeEntries/incomeReducer';

const rootReducer = combineReducers({ //combine all reducers that are in the app
  expense: expenseReducer, //expenseReducer and incomeReducer are objects
  income: incomeReducer
});

export default rootReducer;