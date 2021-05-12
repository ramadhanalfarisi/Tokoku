import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChildModifierComponent from './ChildModifierComponent'
import './ModifierComponent.css'

class ModifierComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numoforder: 0,
            dataorder: []
        }
    }

    handleModifier = () => {
        this.props.handleMod(false, "");
    }

    plusOrder = () => {
        this.setState({
            numoforder: this.state.numoforder + 1
        }, () => this.handleCart())
    }

    minOrder = () => {
        if (this.state.numoforder > 0) {
            this.setState({
                numoforder: this.state.numoforder - 1
            }, () => this.handleCart())
        }
    }

    handleCartToLocalStorage = (value) => {
        let cart = localStorage.getItem("cart");
        if (cart !== "") {
            var jsonCart = JSON.parse(cart);
            if (jsonCart.length > 0) {
                var isexist = false;
                for (var i = 0; i < jsonCart.length; i++) {
                    if (jsonCart[i].id_product === value.id_product) {
                        jsonCart[i].qty = value.qty;
                        jsonCart[i].total = value.total;
                        isexist = true;
                    }
                }
                if (isexist === false) {
                    jsonCart.push(value);
                }
            } else {
                jsonCart = [value];
            }
        } else {
            jsonCart = [value];
        }
        var resultcart = JSON.stringify(jsonCart);
        localStorage.setItem("cart", resultcart);
        console.log(resultcart);
    }

    handleCart = () => {
        var price = parseInt(this.props.datamod.price.replaceAll(".", ""));
        var qty = parseInt(this.state.numoforder);
        if (qty > 0) {
            var data = {
                image: this.props.datamod.image,
                id_product: this.props.datamod.id,
                name_product: this.props.datamod.title,
                price_product: this.props.datamod.price,
                desc_product: this.props.datamod.desc,
                qty: this.state.numoforder,
                total: price * qty
            };
        } else {
            data = [];
        }

        this.setState({
            dataorder: data
        }, () => console.log(this.state.dataorder));
    }

    listModifier = () => {
        return (
            <div className="item-modifier">
                <label className="label-modifier" htmlFor="modifier">
                    <input type="radio" name="modifier" id="modifier" />
                    <span className="checkmark"></span>
                    <img src="https://sgp1.digitaloceanspaces.com/indonesiawindow/2020/10/Tempe.jpg" alt="" />
                    <div className="detail-modifier">
                        <span className="title-modifier">Tempe</span>
                        <span className="desc-modifier">Ini Tempe</span>
                    </div>
                    <span className="price-modifier">Rp. 1.000</span>
                </label>
            </div>
        )
    }

    render() {
        return (
            <div className={this.props.modshow === true ? "modifier-container show-right" : "modifier-container hide-right"}>
                <div className="close-div" onClick={() => this.handleModifier()}><span className="close-modifier">&times;</span></div>
                <div className="content-modifier">
                    <img src={this.props.datamod.image} alt="" />
                    <div className="detail-card">
                        <p className="card-title">{this.props.datamod.title}</p>
                        <p className="card-desc">{this.props.datamod.desc}</p>
                        <p className="card-price">Rp. {this.props.datamod.price}</p>
                    </div>
                </div>
                <div className="counter">
                    <button className="plus" onClick={this.plusOrder}>+</button>
                    <div className="num">
                        <span>{this.state.numoforder}</span>
                    </div>
                    <button className="min" onClick={this.minOrder}>-</button>
                </div>
                <div className="list-modifier">
                    <ChildModifierComponent id="1" title="Tempe" desc="ini Tempe" price="1000"/>
                    <ChildModifierComponent id="2" title="Peyek" desc="ini Peyek" price="1000"/>
                    <ChildModifierComponent id="3" title="Sambel" desc="ini Sambel" price="1000"/>
                </div>
                <div id="btn-add-cart">
                    <span className="tit-cart">Add to Cart</span>
                    <span className="tot-cart">Rp. 20.000</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modshow: state.modshow,
        datamod: state.datamod
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMod: (value, data) => dispatch({ type: 'HANDLE_MOD', value: value, data: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifierComponent)
