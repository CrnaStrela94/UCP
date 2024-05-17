import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/router.tsx";
=======
import App from './App';
import './index.css';
import './App.css';
>>>>>>> luka

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
=======
    <App />
  </React.StrictMode>
);
>>>>>>> luka
