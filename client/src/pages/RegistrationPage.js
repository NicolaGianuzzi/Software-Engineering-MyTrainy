import React, {useState, Component} from "react"

import NavPreReg from "../components/NavPreReg";

// Import Logo
import logo from '../media/logo.svg'

import {
    Form, 
    Button,
    ButtonGroup, 
    Container,
    ToggleButton
} from 'react-bootstrap'

// Select component to choose the sport
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated()

const RegistrationPage = () =>{

    // User type selection
    const [userValue, setUserValue] = useState('1');
    const userType = [
        { name: 'Atleta', value: '1' },
        { name: 'Allenatore', value: '2' },
    ];
    // Sport options
    const sportOptions = [
        {value: 'calcio', label:'Calcio'},
        {value: 'atletica', label:'Atletica'},
        {value: 'palestra', label:'Palestra'},
        {value: 'zapping', label:'Zapping'},
    ]
    // Info required for registration
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Check if the two password are the same
    const checkPwd = (pwd) =>{

    }
    
    // Registration function
    const registration = () =>{

    }

    return(
        <>
            <NavPreReg />
            <Container className='d-flex justify-content-center align-items-center' style={{height: "70vh"}}>
                <div>
                    <Form onSubmit={registration}>
                        <img src={logo} alt="logo"/>
                        <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Confirm password" onChange={(e) => checkPwd(e.target.value)}/>
                        </Form.Group>
                        <ButtonGroup className="mb-2 d-flex justify-content-center">
                            {userType.map((user, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`user-${idx}`}
                                type="radio"
                                variant="outline-secondary"
                                name="radio"
                                value={user.value}
                                checked={userValue === user.value}
                                onChange={(e) => setUserValue(e.currentTarget.value)}
                            >
                                {user.name}
                            </ToggleButton>
                            ))}
                        </ButtonGroup>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">    
                            {/* React select */}
                            {userValue == '2' ? <Select options={sportOptions} components={animatedComponents} placeholder="Sport" isMulti/> : <></>}
                            {/* <Select 
                                options={sportOptions}
                                components={animatedComponents}
                                placeholder="Sport"
                                isMulti
                            /> */}
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
                            <Button variant="primary" type="submit" className="text-light" >
                                Registrati
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </Container>

        </>



    )
}

export default RegistrationPage;