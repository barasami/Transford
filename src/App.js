import React from "react";
import Home from "./Component/Home";
import Product from "./Component/Products";
import Contact from "./Component/Contact";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Nav from "./Component/Nav";
import { Fragment } from "react";
import Footer from "./Component/Footer";



export default function App() {
  return(
    <Router>
      <Fragment>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>}>
            
          </Route>
          <Route path="/Products" element={<Product/>}>
            
          </Route>
          <Route path="/Contact" element={<Contact/>}>
            
          </Route>
        </Routes>
        <Footer/>
      </Fragment>
      
    </Router>
   
  );
  
}