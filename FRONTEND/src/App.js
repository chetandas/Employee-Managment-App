import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";//this will help us enable us to use boostrap
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addemployee from './employees/Addemployee';
import Editemployee from './employees/Editemployee';
import Viewemployee from './employees/Viewemployee';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addemployee" element={<Addemployee/>}/>
          <Route exact path="/editemployee/:id" element={<Editemployee/>}/>
          <Route exact path="/viewemployee/:id" element={<Viewemployee/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
