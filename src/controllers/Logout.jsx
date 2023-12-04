import { useContext, useEffect } from "react"
import UserContext from "../context/user/UserContext"

export default function Logout(){
    const {logout} = useContext(UserContext);
    useEffect(()=>{
        logout()
    },[])
}