

const IncomeList = ({ incomeData }) => {
    return (
        <div>
            <div className="show_income_area">
                <h4>Income List</h4>
                <ul>
                    {incomeData.map((income, index) => (
                    <li key={index}>
                        <strong>Source: </strong> {income.source}, &nbsp;
                        <strong>Amount: </strong> {income.amount}, &nbsp;
                        <strong>Date: </strong> {income.date}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default IncomeList;