import React from "react";
import './App.css';
import { Routes, Route,Navigate } from 'react-router-dom';
import Contacts from "./Redux/Contact/Contact-list/ContactList";


const App = () => {

  return (
    <React.Fragment>
      
     
      <Contacts/>
      {/* <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/add'} element={<AddContact/>}/>
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
      </Routes> */}
    </React.Fragment>
  );
}

export default App;
