import ExpenseItem from './ExpenseItem/ExpenseItem';
import "./Expenses.css"

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem id={props.data.id} title={props.data.title} amount={props.data.amount} date={props.data.date} />
    </div>
  )
}

export default Expenses;