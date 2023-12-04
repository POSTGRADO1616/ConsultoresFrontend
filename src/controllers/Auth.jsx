import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/user/UserContext";
export default function Auth(){
    const {logeado}=useContext(UserContext);
    if(logeado){
        return (
        <div>
            <Navigate to={'/admin/dashboard'}/>
            <Outlet/>
        </div>
    )}
    else{
        return <Navigate to='/'/>
    }
}