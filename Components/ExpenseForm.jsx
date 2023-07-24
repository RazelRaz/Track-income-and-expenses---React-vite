import { useState } from "react";
import ExpensesList from "./ExpensesList";


const ExpenseForm = () => {

    const [formObj, setFormObj] = useState({
        source: '',
        amount: '',
        date: '',
    })

    // An array to store all income transactions
    const [expenseData, setExpenseData] = useState([]);

    const inputOnChange = (property, value) => {
        setFormObj(prevObj => ({
            ...prevObj,
            [property]: value
        }))
    }

    const formSubmit = (e) => {
        e.preventDefault();
        // console.log(formObj);
        // Add the new income transaction to the incomeData array
        setExpenseData((prevData) => [...prevData, formObj]);
        // Clear the form fields after submitting
        setFormObj({
            source: "",
            amount: "",
            date: "",
        });
    }



    return (
        <div>
            

            <div className="incomeForm_area">
                <div className="container">
                    <form onSubmit={formSubmit}>

                        <div>
                            <label htmlFor="source">Expense Source:</label>
                            <input
                            type="text"
                            id="source"
                            name="source"
                            value={formObj.source}
                            onChange={(e) => {inputOnChange('source', e.target.value)}}
                            required
                            />
                        </div>

                        <div>
                            <label htmlFor="amount">Amount:</label>
                            <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={formObj.amount}
                            onChange={(e) => {inputOnChange('amount', e.target.value)}}
                            required
                            />
                        </div>

                        <div>
                            <label htmlFor="date">Date:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formObj.date}
                                onChange={(e) => {inputOnChange('date', e.target.value)}}
                                required
                            />
                        </div>

                        <button type="submit">Add Income</button>
                    </form>

                    {/* Pass the incomeData to the IncomeList component */}
                    <ExpensesList expenseData={expenseData}></ExpensesList>
                </div>
            </div>
        </div>
    );
};

export default ExpenseForm;