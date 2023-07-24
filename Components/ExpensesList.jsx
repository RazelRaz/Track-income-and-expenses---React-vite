

const ExpensesList = ({ expenseData }) => {
    return (
        <div>
            <div className="show_income_area">
                <h4>Expenses List</h4>
                <ul>
                    {expenseData.map((income, index) => (
                    <li key={index}>
                        <strong>Expense Source: </strong> {income.source}, &nbsp;
                        <strong>Amount: $ </strong> {income.amount}, &nbsp;
                        <strong>Date: </strong> {income.date}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExpensesList;