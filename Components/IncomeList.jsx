

const IncomeList = ({ incomeData  }) => {
    return (
        <div>
            <div className="show_income_area">
                <h4>Income List</h4>
                {
                    incomeData.map((income, index) => {
                        <li key={index}>
                            Source: {income.source}, Amount: {income.amount}, Date: {income.date}
                        </li>
                    })
                }
            </div>
        </div>
    );
};

export default IncomeList;