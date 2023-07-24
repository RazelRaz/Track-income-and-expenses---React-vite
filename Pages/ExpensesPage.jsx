import ExpenseForm from "../Components/ExpenseForm";
import Menu from "../Components/menu";


const ExpensesPage = () => {
    return (
        <div>
            <Menu></Menu>
            <h1 style={{textAlign:'center', padding: '20px 0'}}>Expenses Page</h1>
            <ExpenseForm></ExpenseForm>
        </div>
    );
};

export default ExpensesPage;