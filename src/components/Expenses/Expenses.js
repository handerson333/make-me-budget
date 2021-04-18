import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../UI/Card/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      {props.data.map((lineItem) => (
        <ExpenseItem
          key={lineItem.id}
          title={lineItem.title}
          amount={lineItem.amount}
          date={lineItem.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
