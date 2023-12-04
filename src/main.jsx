import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import App from './App'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import UserState from './context/user/UserState'
import Auth from './controllers/Auth'
import Dashboard from './views/Dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/admin' element={<Auth/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserState>
  </React.StrictMode>
)
