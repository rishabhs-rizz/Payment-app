
import { BrowserRouter, Route, Routes } from "react-router-dom"
import  Signup  from "./pages/Signup"
import SignIn from "./pages/SignIn"
import DashBoard from "./pages/DashBoard"
import SendMoney from "./pages/SendMoney"

function App() {

  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/" element={<Signup/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/dashboard" element={<DashBoard/>}/>
    <Route path="/sendmoney" element={<SendMoney/>}/>
  </Routes>
  </BrowserRouter>
}

export default App
