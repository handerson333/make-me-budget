import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';


const NewExpense = (props) => {
  const [isAddingNewExpense, setShowForm] = useState(false);

  const addExpenseHandler = () => {
    setShowForm((prevState) => !prevState)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
      {!isAddingNewExpense ?
        <button onClick={addExpenseHandler}>Add New Expense</button> :
        <ExpenseForm onCancel={addExpenseHandler} onSaveExpenseData={saveExpenseDataHandler} />
      }

    </div>
  );
};
export default NewExpense;
