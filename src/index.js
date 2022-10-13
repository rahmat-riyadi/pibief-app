import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './reducer/store';
import 'react-toastify/dist/ReactToastify.css'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Plus Jakarta Sans',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#012257'
    },
    secondary: {
      main: '#05A5E1'
    },
    greyFont: {
      main: '#656A7B'
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
