import React, { Component } from 'react'
import './SideBarComponent.css'
import dashboardIcon from '../../assets/icons/dashboard.svg'
import foodIcon from '../../assets/icons/burger.svg'
import billIcon from '../../assets/icons/bill.svg'
import settingIcon from '../../assets/icons/settings.svg'

export default class SideBarComponent extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="logo-nav">
                    <span className="logo-item" id="logo-1">Kocak</span><span className="logo-item" id="logo-2">POS</span>
                </div>
                <div className="navbar">
                    <div className="menu active">
                        <img src={dashboardIcon} alt="" className="icon-menu" />
                        <span>Dashboard</span>
                    </div>
                    <div className="menu">
                        <img src={foodIcon} alt="" className="icon-menu" />
                        <span>Food & Drinks</span>
                    </div>
                    <div className="menu">
                        <img src={billIcon} alt="" className="icon-menu" />
                        <span>Bills</span>
                    </div>
                    <div className="menu">
                        <img src={settingIcon} alt="" className="icon-menu" />
                        <span>Settings</span>
                    </div>
                </div>

            </div>
        )
    }
}
