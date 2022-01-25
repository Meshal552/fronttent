import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './compone/Home'
import Crime from './compone/Crime'
import CrimePatient from './compone/CrimePatient'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './compone/componet/Login';
import Basket from './compone/componet/Basket';
import { BrowserRouter,Routes,
  Route } from "react-router-dom";
import User from './compone/User';
import Sections from './compone/Sections';
import Reports from './compone/Reports';
import UseUbdate from './compone/UseUbdate';



ReactDOM.render(
  
  (<BrowserRouter>
  <Routes>
    
  </Routes>
     <Routes>
     
     <Route path="/" element={<App />}>
     <Route path= "/" element={<Home/>}/>
       <Route path= "/Login" element={<Login/>}/>
       <Route path= "/Crime" element={<Crime/>}/>
       <Route path= "/User" element={<User/>}/>
       <Route path= "/Sections" element={<Sections/>}/>
       <Route path= "/CrimePatient" element={<CrimePatient/>}/>
       <Route path= "/Reports" element={<Reports/>}/>
       <Route path= "/Basket" element={<Basket/>}/>
       <Route path= "/UseUbdate" element={<UseUbdate/>}/>
       <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
     </Route>
     </Routes>
  </BrowserRouter>), 
  document.getElementById('root')
);


