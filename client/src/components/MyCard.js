import react,{useState} from "react";

import { Tab, Card, Row, Col, Form } from "react-bootstrap";

// Import data
import {programs, cards} from "../files/programs"

const MyCard = ({eventKey, title, sport, color, description}) =>{

    const [cardDescription, setCardDescription] = useState();

    return(
        <>
            <Tab.Pane eventKey={eventKey}>
                <Card style={{ width: '100%', height: "90vh" }}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{sport}</Card.Subtitle>
                        <Row>
                            <Col xs="auto" className="d-flex align-items-center pe-0">
                                <Form.Label className="mb-0" htmlFor="exampleColorInput">Colore:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control style={{display: "inline-block"}}
                                    type="color"
                                    id="exampleColorInput"
                                    defaultValue={color}
                                    title="Choose your color"
                                    />
                            </Col>
                        </Row>
                        <Form>
                            <Form.Label>Descrizione:</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                defaultValue={description}
                            />
                        </Form>
                    </Card.Body>
                </Card>
            </Tab.Pane>        
        </>
    )
}

export default MyCard;