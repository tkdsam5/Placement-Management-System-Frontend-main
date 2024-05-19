import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from "./Context/UserContext";
import { AdminContextProvider } from './Context/AdminContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <AdminContextProvider>
    <App />
    </AdminContextProvider>
  
  </UserContextProvider>
);


