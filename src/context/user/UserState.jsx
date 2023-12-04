import React, { useState } from "react"
import UserContext from './UserContext'
import axios from "axios"

const UserState = (props)=>{
    const [logeado,setLogeado]=useState(false);
    const [nombre, setNombre]=useState('');
    const getProfile=async (token)=>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get('http://administrativos.test/api/s1/user-profile', {})
            .then(function (response) {
                setNombre(response.data.data.name)
            }).catch(function () {
                setNombre('Error')
            });
    }

    const validacion = async ()=>{
        const key = localStorage.getItem('keyPostgradoUatf');
        if (key !== null) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${key}`;
            await axios.get('http://administrativos.test/api/s1/user-profile', {})
            .then(function (response) {
                if(response.data.status==1){
                    setLogeado(true)
                }
                else{
                    setLogeado(false)
                }
            }).catch(function () {
                setLogeado(false)
            });
        } else {
            setLogeado(false)
        }
    }

    return (
        <UserContext.Provider value={{
            logeado,
            nombre,
            validacion,
            getProfile,
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;