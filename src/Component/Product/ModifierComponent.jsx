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

    handleCartToLocalStorage = () => {
        var value = this.state.dataorder;
        let cart = localStorage.getItem("cart");
        if (cart !== "") {
            var jsonCart = JSON.parse(cart);
            if (jsonCart.length > 0) {
                var isexist = false;
                for (var i = 0; i < jsonCart.length; i++) {
                    if (jsonCart[i].id_product === value.id_product) {
                        jsonCart[i].qty += value.qty;
                        jsonCart[i].total += value.total;
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

    handleChangeModifier = (data, ischeck) => {
        var dataorder = this.state.dataorder;
        if (dataorder !== []) {
            if (dataorder.modifier.length <= 0) {
                if (ischeck === true) {
                    dataorder.modifier.push(data);
                    dataorder.priceprodmod += parseInt(data.price);
                    dataorder.total = dataorder.priceprodmod * parseInt(dataorder.qty)
                }
            } else {
                for (let i = 0; i < dataorder.modifier.length; i++) {
                    if (data.id === dataorder.modifier[i].id) {
                        if (ischeck === false) {
                            dataorder.priceprodmod -= parseInt(data.price);
                            dataorder.total = dataorder.priceprodmod * parseInt(dataorder.qty)
                            dataorder.modifier.splice(i, 1);
                        }
                    } else {
                        if (ischeck === true) {
                            dataorder.modifier.push(data);
                            dataorder.priceprodmod += parseInt(data.price);
                            dataorder.total = dataorder.priceprodmod * parseInt(dataorder.qty)
                        }
                    }
                }
            }
        }

        this.setState({
            dataorder: dataorder
        }, () => console.log(dataorder))
    }

    handleCart = () => {
        var price = parseInt(this.props.datamod.price.replaceAll(".", ""));
        var qty = parseInt(this.state.numoforder);
        var data;
        if (qty > 0) {
            if (this.state.dataorder.length <= 0) {
                data = {
                    image: this.props.datamod.image,
                    id_product: this.props.datamod.id,
                    name_product: this.props.datamod.title,
                    price_product: price,
                    desc_product: this.props.datamod.desc,
                    qty: this.state.numoforder,
                    total: price * qty,
                    modifier: [],
                    priceprodmod: price
                };
            } else {
                data = this.state.dataorder;
                data.qty = qty;
                data.total = data.priceprodmod * qty;
            }
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
                    <ChildModifierComponent onHandleChangeModifier={(data, ischeck) => this.handleChangeModifier(data, ischeck)} type="checkbox" id="1" image="https://sgp1.digitaloceanspaces.com/indonesiawindow/2020/10/Tempe.jpg" title="Tempe" desc="ini Tempe" price="1000" />
                    <ChildModifierComponent onHandleChangeModifier={(data, ischeck) => this.handleChangeModifier(data, ischeck)} type="checkbox" id="2" image="https://sgp1.digitaloceanspaces.com/indonesiawindow/2020/10/Tempe.jpg" title="Peyek" desc="ini Peyek" price="1000" />
                    <ChildModifierComponent onHandleChangeModifier={(data, ischeck) => this.handleChangeModifier(data, ischeck)} type="checkbox" id="3" image="https://sgp1.digitaloceanspaces.com/indonesiawindow/2020/10/Tempe.jpg" title="Sambel" desc="ini Sambel" price="1000" />
                </div>
                <div id="btn-add-cart" onClick={() => this.handleCartToLocalStorage()}>
                    <span className="tit-cart">Add to Cart</span>
                    <span className="tot-cart">Rp. {this.state.numoforder > 0 ? parseInt(this.state.dataorder.total).toLocaleString("id") : 0}</span>
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
