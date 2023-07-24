import Menu from "../Components/menu";


const HomePage = () => {
    return (
        <div className="">
            <Menu></Menu>
            <div className="container">
                <h1 style={{textAlign:'center', padding: '20px 0'}}>Home Page</h1>
                <p style={{textAlign:'center', padding: '20px 0'}}>This is a Web Application for track income and expenses. Check Income and Expenses pages to show its feature. Thanks</p>
            </div>
        </div>
    );
};

export default HomePage;