import Home from './components/Home'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import BudgetTracker from './components/BudgetTracker'
import Todolis from './components/Todolis'
import Faq from './components/Faq'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/budget-tracker" element={<BudgetTracker />} />
          <Route path='/faqs' element={<Faq />} />
          <Route path="/todo-list" element={<Todolis />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </Router>
  )
}

export default App
