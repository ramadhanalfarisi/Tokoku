import React, { Component } from 'react'
import backIcon from '../../assets/icons/left-arrow.svg'
import searchIcon from '../../assets/icons/loupe.svg'
import './TopBarComponent.css'

export default class TopBarComponent extends Component {
    render() {
        return (
            <div className="topbar">
                <button id="top-bar-back">
                    <img src={backIcon} alt="" className="icon-btn" />
                </button>
                <div className="detail-link">
                    <span>Dashboard</span>
                </div>
                <div className="search-input">
                    <img src={searchIcon} alt="" className="icon-input" />
                    <input type="text" name="" id="search" placeholder="Search..." />
                </div>
            </div>
        )
    }
}
