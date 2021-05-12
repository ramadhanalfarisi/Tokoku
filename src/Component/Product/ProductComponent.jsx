import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { connect } from 'react-redux'
import './ProductComponent.css'

class ProductComponent extends Component {

    state = {
        order: 0
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

    handleModifier = () => {
        let data = {
            id: this.props.id,
            image : this.props.image,
            title : this.props.title,
            desc: this.props.desc,
            price : this.props.price
        }
        this.props.handleMod(true,data)
    }

    render() {
        return (
            <div className="card-product" onClick={() => this.handleModifier()}>
                <img src={this.props.image} alt="" />
                <div className="detail-card">
                    <p className="card-title">{this.props.title}</p>
                    <p className="card-desc">{this.props.desc}</p>
                    <p className="card-price">Rp. {this.props.price}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modshow : state.modshow
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleMod : (value,data) => dispatch({type : 'HANDLE_MOD', value:value, data: data})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductComponent) 

