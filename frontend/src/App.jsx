import React from "react";
import UserList from "./component/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/add" element={<AddUser/>}/>
          <Route path="/edit/:id" element={<EditUser/>}/>
            
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
