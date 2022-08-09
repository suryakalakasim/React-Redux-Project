import React from "react";
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import AddEditUser from "./Pages/AddEditUser";
import UserInfo from "./Pages/UserInfo";
import About from "./Pages/About";
import Header from "./Components/Header";



const App = () => {

  return (
    <React.Fragment>
  <Header/>
       <Routes>
       <Route path={'/'} element={<Home/>}/> 
       <Route path={'/abot'} element={<About/>}/>
        <Route path={'/addEdit'} element={<AddEditUser/>}/>
        <Route path={'/addEdit/:contactId'} element={<AddEditUser/>}/>
        <Route path={'/userInfo/:contactId'} element={<UserInfo/>}/>
      </Routes> 
    </React.Fragment>
  );
}

export default App;
