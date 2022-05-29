import react from "react";

// Import Icons
import ReactDOM from 'react-dom'
// import {faThin} from '@fortawesome/'

const SideRow = ({title}) =>{
    return(
        <div>
            <div style={{display: "inline-block"}}>
                <p>{title}</p>
            </div>
            <div style={{display: "inline-block"}}>
                <i className="bi bi-pencil-square"></i>
            </div>
        </div>
    )
}

export default SideRow;