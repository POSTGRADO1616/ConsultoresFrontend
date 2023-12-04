import axios from 'axios';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [spiner, setEspiner]=useState(false)
    const navigate = useNavigate();
    return (
        <Form
            onSubmit={async (e)=>{
                e.preventDefault()
                setEspiner(true)
                await axios.post('http://administrativos.test/api/s1/login',{
                    "email": email,
                    "password": password
                }).then(function(response){
                    localStorage.setItem('keyPostgradoUatf',response.data.token_acceso);
                    setEspiner(false)
                    navigate('/admin');
                }).catch(function(error){
                    setEspiner(false)
                    console.log(error)
                })
            }}
        >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ej.: usuario@gmail.com" onInput={(e)=>{setEmail(e.target.value)}}/>
                <Form.Text className="text-muted">
                    En caso de no recordarte consulta con la Unidad de Informatica
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" onInput={(e)=>{setPassword(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme siempre" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Logearme {spiner? <Spinner animation="border" size="sm" /> : <></>}
            </Button>
        </Form>
    );
}