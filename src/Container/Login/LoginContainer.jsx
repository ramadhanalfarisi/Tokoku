import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./LoginContainer.css"
import axios from 'axios'

class LoginContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            token: ""
        }
    }

    actionLogin() {
        var loginData = {
            userEmail: this.state.email,
            userPassword: this.state.password
        }
        var optionAxios = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.post("http://localhost:8000/login", loginData, optionAxios)
            .then((res) => {
                localStorage.setItem("token", res.token)
                this.setState({
                    token: res.token
                })
            })
    }

    render() {
        if (this.state.token !== "") {
            window.location.reload()
        } else {
            return (
                <div className="main-page">
                    <div className="p-4">
                        <div className="dis-flex align-center" id="brandLogin">
                            <h4 id="logo-login-1">TOKO</h4><h4 id="logo-login-2">CAK</h4>
                        </div>

                        <div className="card bg-light" id="cardLogin">
                            <h2 className="text-primary text-center">LOGIN</h2>
                            <form action="" id="form-login">
                                <div className="input-group input-field-login">
                                    <div className="icon-input-login">
                                        <FontAwesomeIcon icon={faAt} size="1x" color="#ffffff" />
                                    </div>
                                    <input className="form-control text-primary" placeholder="Enter your email" type="text" name="email" id="emailInput" onChange={(val) => this.setState({ email: val.target.value })} />
                                </div>
                                <div className="input-group input-field-login">
                                    <div className="icon-input-login">
                                        <FontAwesomeIcon icon={faKey} size="1x" color="#ffffff" />
                                    </div>
                                    <input className="form-control text-primary" placeholder="Enter your password" type="password" name="password" id="paswordInput" onChange={(val) => this.setState({ password: val.target.value })} />
                                </div>
                            </form>

                            <div className="dis-flex align-center mt-4">
                                <button className="btn btn-primary" onClick={() => this.actionLogin()}>Login</button>
                                <Link to="/register">
                                    <button className="btn btn-light">Register</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }

    }
}


export default LoginContainer
