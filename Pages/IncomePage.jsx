import IncomeForm from "../Components/IncomeForm";
import Menu from "../Components/menu";

const IncomePage = () => {
    return (
        <div>
            <Menu></Menu>
            <h1 style={{textAlign:'center', padding: '20px 0'}}>Income Page</h1>
            <IncomeForm></IncomeForm>
        </div>
    );
};

export default IncomePage;