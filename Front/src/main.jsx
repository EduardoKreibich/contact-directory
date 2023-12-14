import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from "./providers/UserContext.jsx";
import { ContactsProvider } from './providers/ContactsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ContactsProvider>
          <App />
        </ContactsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
