import React, { Component } from 'react'
import './SideBarComponent.css'
import dashboardIcon from '../../assets/icons/dashboard.svg'
import foodIcon from '../../assets/icons/burger.svg'
import billIcon from '../../assets/icons/bill.svg'
import settingIcon from '../../assets/icons/settings.svg'
import accountIcon from '../../assets/icons/account.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class SideBarComponent extends Component {


    handleClick = (value, title) => {
        this.props.handleTitle(title, value);
    }


    render() {
        return (
            <div className="sidebar">
                <div className="logo-nav">
                    <span className="logo-item" id="logo-1">TOKO</span><span className="logo-item" id="logo-2">CAK</span>
                </div>
                <div className="navbar">
                    <Link to="/dashboard">
                        <div className={this.props.path === 'dashboard' ? 'menu active' : 'menu'} onClick={() => this.handleClick('dashboard', 'Dashboard')}>
                            <img src={dashboardIcon} alt="" className="icon-menu" />
                            <span>Dashboard</span>
                        </div>
                    </Link>
                    <Link to="/food">
                        <div className={this.props.path === 'food' ? 'menu active' : 'menu'} onClick={() => this.handleClick('food', 'Foods & Drinks')}>
                            <img src={foodIcon} alt="" className="icon-menu" />
                            <span>Food & Drinks</span>
                        </div>
                    </Link>
                    <Link to="/bills">
                        <div className={this.props.path === 'bills' ? 'menu active' : 'menu'} onClick={() => this.handleClick('bills', 'Bills')}>
                            <img src={billIcon} alt="" className="icon-menu" />
                            <span>Bills</span>
                        </div>
                    </Link>
                    <Link to="/settings">
                        <div className={this.props.path === 'settings' ? 'menu active' : 'menu'} onClick={() => this.handleClick('settings', 'Settings')}>
                            <img src={settingIcon} alt="" className="icon-menu" />
                            <span>Settings</span>
                        </div>
                    </Link>
                    <Link to="/account">
                        <div className={this.props.path === 'account' ? 'menu active' : 'menu'} onClick={() => this.handleClick('account', 'Account')}>
                            <img src={accountIcon} alt="" className="icon-menu" />
                            <span>Account</span>
                        </div>
                    </Link>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        path: state.path
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleTitle: (title, path) => dispatch({ type: 'HANDLE_TITLE', title: title, path: path })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarComponent)
