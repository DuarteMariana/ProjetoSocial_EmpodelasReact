import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
        <footer className="border-top footer text-muted">
            <div className="container">
                &copy; 2022 - EmpoDelas
            
                <Link to="/Admin">Admin</Link>
            </div>
        </footer>
        </>
    );
}