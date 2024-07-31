import React from "react"; // Essential for building and rendering React components.
import ReactDom from "react-dom/client" // Essential for building and rendering React components.

//enabling client-side routing, allowing users to navigate between different pages without a full page reload.
import { BrowserRouter as Router } from "react-router-dom"; 
import App from "./App";

import ".styles/index.css"

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>

)



