import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import NotFound from "../Pages/NotFound"
import IncomePage from "../Pages/IncomePage"
import ExpensesPage from "../Pages/ExpensesPage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/income" element={<IncomePage></IncomePage>} />
          <Route path="/expenses" element={<ExpensesPage></ExpensesPage>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
