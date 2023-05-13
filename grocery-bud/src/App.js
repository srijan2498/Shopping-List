import './App.css';
import FormValidation from './components/formValidation/FormValidation';
// import Navbar from './components/navbar/Navbar';
// import Hero from './components/stripe/Hero';
// import Navbar from './components/stripe/Navbar';
// import Sidebar from './components/stripe/Sidebar';
// import Submenu from './components/stripe/Submenu';
// import Home from './components/sidebar-model/Home';
// import Model from './components/sidebar-model/Model';
// import Sidebar from './components/sidebar-model/Sidebar';
// import ColorGenerator from './components/colorGenerator/ColorGenerator';
// import Grocery from './components/Grocery';
// import NewGrocery from './components/newGrocery/NewGrocery';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/useparams/Home';
import About from './components/useparams/About';
import Emp from './components/useparams/Emp';
import SingleEmp from './components/useparams/SingleEmp';

function App() {
  return <>
    {/* <Grocery/> */}
    {/* <NewGrocery/> */}
    {/* <ColorGenerator/> */}
    {/* <Home />
    <Sidebar />
    <Model /> */}
    {/* <Navbar/>
    <Sidebar/>
    <Hero/> */}
    {/* <Submenu/> */}
    {/* <Navbar/> */}
    {/* <FormValidation/> */}
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/empsHome' element={<Emp />}></Route>
        <Route exact path='/emp/:id' element={<SingleEmp />}></Route>
      </Routes>
    </Router>
  </>
}

export default App;
