import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faKey, faPhone, faFont } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./RegisterContainer.css"

class RegisterContainer extends Component {

    render() {
        return (
            <div className="main-page">
                <div className="p-4">
                    <div className="dis-flex align-center" id="brandRegister">
                        <h4 id="logo-login-1">TOKO</h4><h4 id="logo-login-2">CAK</h4>
                    </div>

                    <div className="card bg-light" id="cardLogin">
                        <h2 className="text-primary text-center">REGISTER</h2>
                        <form action="" id="form-login">
                            <div className="input-group input-field-login">
                                <div className="icon-input-login">
                                    <FontAwesomeIcon icon={faAt} size="1x" color="#ffffff" />
                                </div>
                                <input className="form-control text-primary" placeholder="Enter your email" type="text" name="email" id="emailInput" />
                            </div>
                            <div className="input-group input-field-login">
                                <div className="icon-input-login">
                                    <FontAwesomeIcon icon={faFont} size="1x" color="#ffffff" />
                                </div>
                                <input className="form-control text-primary" placeholder="Enter your first name" type="text" name="email" id="emailInput" />
                            </div>
                            <div className="input-group input-field-login">
                                <div className="icon-input-login">
                                    <FontAwesomeIcon icon={faFont} size="1x" color="#ffffff" />
                                </div>
                                <input className="form-control text-primary" placeholder="Enter your last name" type="text" name="email" id="emailInput" />
                            </div>
                            <div className="input-group input-field-login">
                                <div className="icon-input-login">
                                    <FontAwesomeIcon icon={faPhone} size="1x" color="#ffffff" />
                                </div>
                                <input className="form-control text-primary" placeholder="Enter your phone number" type="text" name="email" id="emailInput" />
                            </div>
                            <div className="input-group input-field-login">
                                <div className="icon-input-login">
                                    <FontAwesomeIcon icon={faKey} size="1x" color="#ffffff" />
                                </div>
                                <input className="form-control text-primary" placeholder="Enter your password" type="password" name="password" id="paswordInput" />
                            </div>
                            <div className="input-group input-field-login">
                                <div className="icon-input-login">
                                    <FontAwesomeIcon icon={faKey} size="1x" color="#ffffff" />
                                </div>
                                <input className="form-control text-primary" placeholder="Repeat your password" type="password" name="password" id="paswordInput" />
                            </div>
                        </form>

                        <div className="dis-flex align-center mt-4">
                            <button className="btn btn-primary">Register</button>
                            <Link to="/">
                                <button className="btn btn-light">Back to Login</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default RegisterContainer
