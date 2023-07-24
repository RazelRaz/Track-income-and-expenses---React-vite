import { useState } from "react";
import IncomeList from "./IncomeList";


const IncomeForm = () => {

    const [incomeData, setIncomeData] = useState([]);
    const [formData, setFormData] = useState({
        source: '',
        amount:'',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setIncomeData((prevIncomeData) => [...prevIncomeData, formData]);
        setFormData({
        source: '',
        amount: '',
        date: '',
        });
    };

    return (
        <div className="incomeForm_area">
            <div className="container">
                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="source">Source:</label>
                        <input
                        type="text"
                        id="source"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="amount">Amount:</label>
                        <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Add Income</button>
                </form>

                <IncomeList incomeData={incomeData}></IncomeList>
            </div>
        </div>
    );
};

export default IncomeForm;