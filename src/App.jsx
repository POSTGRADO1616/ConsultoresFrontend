import './styles/app.css'
import Login from './components/Login'
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from './context/user/UserContext';

function App() {
  const { validacion,logeado }=useContext(UserContext);
  useEffect(()=>{
    validacion();
  },[])
  if(logeado){
    return <Navigate to={'/admin'}/>
  }
  return (
    <div className='formulario'>
      <div className='w-50 m-auto' style={{
        backgroundColor:"rgba(240, 248, 255, 0.9)",
        borderRadius:"1rem",
        padding:"2rem"
      }}>
        <Login/>
      </div>
    </div>
  )
}

export default App
