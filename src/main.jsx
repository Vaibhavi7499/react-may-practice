import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import UserContainer from './component/context/UserContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './component/reduxEx/store.js';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <UserContainer>
      <Provider store={store}>

    <App />
      </Provider>
    </UserContainer>
  </BrowserRouter>
  // </StrictMode>,
)
