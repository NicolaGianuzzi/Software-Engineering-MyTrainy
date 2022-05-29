import react from "react";
import { Container } from "react-bootstrap";

// Import Components
import MyNavbar from '../components/MyNavbar'
import Sidebar from "../components/Sidebar";

// Import React bootstrap


const ProgCardPage = () => {
    return(
        <>
            <MyNavbar />
            <Container>
                <Sidebar />
            </Container>
            
        </>
    )
}

export default ProgCardPage;