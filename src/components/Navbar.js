import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faSkullCrossbones, faAddressBook, faContactBook } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();


    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="nav-link navbar-brand" to="/">
                    <FontAwesomeIcon className="me-2" icon={faSkullCrossbones} />Super 3D
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                <FontAwesomeIcon className="me-1" icon={faHome} />Home
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/features1">
                                Features1
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/who">
                                Who
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/earth">
                                Earth
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="ms-2 me-3"><FontAwesomeIcon icon={faEnvelope} size="2xl" /></li>
                        <li className="ms-2 me-3">
                            <Link className="nav-link" to={{ pathname: "/contact3d", state: { from: location.pathname } }}>
                                <FontAwesomeIcon icon={faSkullCrossbones} size="2xl" />
                            </Link>
                        </li>
                        <li className="ms-2 me-3">
                            <Link className="nav-link" to={{ pathname: "/contact", state: { from: location.pathname } }}>
                                <FontAwesomeIcon icon={faContactBook} size="xl" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
