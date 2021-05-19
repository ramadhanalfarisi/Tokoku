import React from 'react'
import { connect } from 'react-redux'
import backIcon from '../../assets/icons/left-arrow.svg'
import searchIcon from '../../assets/icons/loupe.svg'
import cartIcon from '../../assets/icons/cart.svg'
import './TopBarComponent.css'
import { Link, useHistory } from 'react-router-dom'


const TopBarComponent = (props) => {
    let history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    const showSearch = (path) => {
        if (path !== 'cart' && path !== 'dashboard' && path !== 'account') {
            return (
                <div className="search-input">
                    <img src={searchIcon} alt="" className="icon-input" />
                    <input type="text" name="" id="search" placeholder="Search..." />
                </div>
            )
        } else {
            return (
                <div className="hidden-search"></div>
            )
        }
    }

    const showCart = (path) => {
        if (path !== 'cart') {
            return (
                <Link to="/cart">
                    <div className="cart-icon">
                        <img src={cartIcon} alt="" className="cart-btn" />
                        <span className="numoforder">0</span>
                    </div>
                </Link>
            )
        }
    }

    return (
        <div className="topbar">
            <button id="top-bar-back" onClick={goBack}>
                <img src={backIcon} alt="" className="icon-btn" />
            </button>
            <div className="detail-link">
                <span>{props.title}</span>
            </div>
            {showSearch(props.path)}
            {showCart(props.path)}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        path: state.path
    }
}

export default connect(mapStateToProps)(TopBarComponent)