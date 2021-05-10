import React, { Component } from 'react'
// import { connect } from 'react-redux'
import './ProductComponent.css'

class ProductComponent extends Component {

    state = {
        order: 0
    }

    onHandleCounter = (value) => {
        this.props.onHandleCounter(value)
        this.handleCart()
    }

    handleCart = () => {
        var price = parseInt(this.props.price.replaceAll(".", ""));
        var qty = parseInt(this.state.order);
        var data = {
            id_product: this.props.id,
            name_product: this.props.title,
            price_product: this.props.price,
            qty: this.state.order,
            total: price * qty
        };
        this.props.onHandleCart(data);
    }

    plusOrder = () => {
        this.setState({
            order: this.state.order + 1
        }, () => this.onHandleCounter(1))
    }

    minOrder = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => this.onHandleCounter(-1))
        }
    }

    componentDidMount() {
        let cart = localStorage.getItem("cart");
        if (cart !== "") {
            var jsonCart = JSON.parse(cart);
            if (jsonCart.length > 0) {
                for (var i = 0; i < jsonCart.length; i++) {
                    if (jsonCart[i].id_product === this.props.id) {
                        this.setState({
                            order: jsonCart[i].qty
                        })
                    }
                }
            }
        }
    }

    render() {
        return (
            <div className="card-product">
                <img src={this.props.image} alt="" />
                <div className="detail-card">
                    <p className="card-title">{this.props.title}</p>
                    <p className="card-desc">{this.props.desc}</p>
                    <p className="card-price">Rp. {this.props.price}</p>
                </div>

                {/* <div className="counter">
                    <button className="plus" onClick={this.plusOrder}>+</button>
                    <div className="num">
                        <span>{this.state.order}</span>
                    </div>
                    <button className="min" onClick={this.minOrder}>-</button>
                </div> */}
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order : state.order
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         plusOrder : () => dispatch({type : 'HANDLE_PLUS'}),
//         minOrder : () => dispatch({type : 'HANDLE_MINUS'})
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(ProductComponent) 
export default ProductComponent

