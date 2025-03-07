
import { BrowserRouter, Route, Routes } from "react-router-dom"
import  Signup  from "./pages/Signup"
import SignIn from "./pages/SignIn"

function App() {

  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/" element={<Signup/>}/>
    <Route path="/signin" element={<SignIn/>}/>
  </Routes>
  </BrowserRouter>
}

export default App
