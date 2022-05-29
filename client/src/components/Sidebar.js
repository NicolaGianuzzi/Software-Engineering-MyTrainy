import React, {useState} from "react";
// import LibrarySong from "./LibrarySong";

// Import react-bootstrap
import {Tab, Row, Col, Card, Nav, Form} from "react-bootstrap"

// Import Components
import SideRow from "./SideRow";
import MyCard from "./MyCard";

// Import data
import {programs, cards} from "../files/programs"


const Sidebar = () =>{
    var programCounter = 0;
    var programCounterPane = 0;
    var cardCounter = 0;
    var cardCounterPane = 0;

    return(
        <>
            <div style={{height: "100vh", display: "inline-block", width: "100%"}}>
                <Tab.Container id="program-and-cards">
                    <Row>
                        <Col md={3} xs={12}>
                            <Nav variant="pills" className="flex-column">
                                <h3>Programmi</h3>
                                {programs.map((program) =>(
                                    <Nav.Item>
                                        <Nav.Link eventKey={`program${++programCounter}`}><SideRow title={program.title} /></Nav.Link>
                                    </Nav.Item>
                                ))}
                                <h3>Schede</h3>
                                {cards.map((card) =>(
                                    <Nav.Item>
                                        <Nav.Link eventKey={`card${++cardCounter}`}><SideRow title={card.title} /></Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>
                        <Col xs={12} md={9}>
                            <Tab.Content>
                                {programs.map((program) =>(
                                    <MyCard
                                        eventKey={`program${++programCounterPane}`}
                                        title={program.title}
                                        sport={program.sport}
                                        color={program.color}
                                        description={program.description}
                                    />
                                ))}
                                {cards.map((card) =>(
                                        <MyCard
                                            eventKey={`card${++cardCounterPane}`}
                                            title={card.title}
                                            sport={card.sport}
                                            color={card.color}
                                            description={card.description}
                                        />
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    )
}

export default Sidebar;

