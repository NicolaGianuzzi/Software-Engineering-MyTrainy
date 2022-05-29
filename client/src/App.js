import React, {useState, useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss'

// Import pages
import LoginPage from './pages/LoginPage';
import RegistrationPage from "./pages/RegistrationPage";
import CalendarPage from './pages/CalendarPage';
import ProgCardPage from "./pages/ProgCardPage";

import useLocalStorage from './useLocalStorage';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  // Token state
  const [token, setToken] = useLocalStorage('token', "");

  // loggerUser state
  const [loggedUser, setLoggedUser] = useState({});

  // Page state
  const [page, setPage] = useState(
    <LoginPage 
      loggedUser={loggedUser} 
      setLoggedUser={setLoggedUser}
      token={token}
      setToken={setToken}
    />
  );

  // useEffect(() =>{
  //   fetch(`/api/v1/users/me/${token}`)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       if(data.success){
  //         setPage(<CalendarPage />);
  //       }
  //     })
  // }, [""]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={page}/>
          <Route path="/singup" exact element={<RegistrationPage />}/>
          <Route path="/calendar" exact element={<CalendarPage />} />
          <Route path="/prog-card-dash" exact element={<ProgCardPage />} />
        </Routes>
      </Router>

      
    </>
  );
}

export default App;
