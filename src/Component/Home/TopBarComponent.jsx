import React, { Fragment } from 'react'
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
        if (path === 'food') {
            return (
                <div className="dis-flex" id="filter-view">
                    <div>
                        <label htmlFor="filter-product" className="label-input">Category Filter</label>
                        <br />
                        <div className="filter-input">
                            <select className="filter-control" name="filter-product" id="filter-product">
                                <option value="makanan">Makanan</option>
                                <option value="makanan">Minuman</option>
                                <option value="makanan">Snack</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="filter-product" className="label-input">Product Search</label>
                        <br />
                        <div className="search-input">
                            <img src={searchIcon} alt="" className="icon-input" />
                            <input type="text" name="" id="search" placeholder="Search by product name" />
                        </div>
                    </div>
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
        <Fragment>
            <div className="topbar">
                <div className="dis-flex">
                    <button id="top-bar-back" onClick={goBack}>
                        <img src={backIcon} alt="" className="icon-btn" />
                    </button>
                    <div className="detail-link">
                        <span>{props.title}</span>
                    </div>
                    {showCart(props.path)}
                </div>
                {showSearch(props.path)}
            </div>
        </Fragment>

    )
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        path: state.path
    }
}

export default connect(mapStateToProps)(TopBarComponent)