
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cpost from './Components/Cpost.jsx'
import Upost from './Components/Upost.jsx'
import Home from './Components/Home.jsx'
import Dpost from './Components/Dpost.jsx'
import Details from './Components/Details.jsx'
import Navbar1 from './Navbar1.jsx';

function App() {

  return (
      <Router >
          <Navbar1 />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Cpost />}></Route>
            <Route path='/delete' element={<Dpost />}></Route>
            <Route path='/update' element={<Upost />}></Route>
            <Route path='/details' element={<Details />}></Route>
          </Routes>
      </Router>
  )
}

export default App
