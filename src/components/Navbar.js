import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faSkullCrossbones, faAddressBook, faContactBook } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();


    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="nav-link navbar-brand" to="/">
                    Francis Lafontaine
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                <FontAwesomeIcon className="me-1" icon={faHome} />
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">
                                Resume
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">
                               Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://de-lafontaine.ca/socialbox/public/blog">
                                Blog
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="ms-2 me-3">
                            <Link className="nav-link" to={{ pathname: "/contact3d", state: { from: location.pathname } }}>
                                <FontAwesomeIcon icon={faSkullCrossbones} />
                            </Link>
                        </li>
                        <li className="ms-2 me-3">
                            <Link className="nav-link" to={{ pathname: "/contact", state: { from: location.pathname } }}>
                                <FontAwesomeIcon icon={faContactBook} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
