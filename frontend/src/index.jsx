import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './App';
import { BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './providers/ThemeProvider'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <MainApp/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
