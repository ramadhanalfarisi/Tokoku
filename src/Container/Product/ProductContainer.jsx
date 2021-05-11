import React, { Component, Fragment } from 'react'
import './ProductContainer.css'
import ProductComponent from '../../Component/Product/ProductComponent'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: localStorage.getItem("numoforder") === null ? 0 : parseInt(localStorage.getItem("numoforder"))
        }
        let cart = localStorage.getItem("cart");
        if (cart === null) {
            localStorage.setItem("cart", "");
        }
    }

    componentDidMount(){
        this.props.handlePath(window.location.pathname)
    }

    handleCounter = (newValue) => {
        this.setState({
            order: this.state.order + newValue
        },() => localStorage.setItem("numoforder", this.state.order))
    }

    handleCart = (value) => {
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
                if(isexist === false){
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

    render() {
        return (
            <Fragment>
                <div>
                    <ProductComponent onHandleCounter={(value) => this.handleCounter(value)} onHandleCart={(value) => this.handleCart(value)} id="1" title="Ayam Geprek" desc="Wenak bos" price="10.000" image="https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png" />
                    <ProductComponent onHandleCounter={(value) => this.handleCounter(value)} onHandleCart={(value) => this.handleCart(value)} id="2" title="Soto" desc="Mantap lur" price="12.000" image="https://www.masakapahariini.com/wp-content/uploads/2019/11/shutterstock_1469046305-780x440.jpg" />
                    <ProductComponent onHandleCounter={(value) => this.handleCounter(value)} onHandleCart={(value) => this.handleCart(value)} id="3" title="Pecel" desc="Joss" price="8.000" image="https://asset.kompas.com/crops/etxkCgz_0N5ZbdP6YGJScpobPVk=/60x23:959x622/750x500/data/photo/2020/11/05/5fa3f16d9c1cf.jpg" />
                    <ProductComponent onHandleCounter={(value) => this.handleCounter(value)} onHandleCart={(value) => this.handleCart(value)} id="4" title="Nasi Goreng" desc="Mantap" price="15.000" image="https://www.masakapahariini.com/wp-content/uploads/2019/01/nasi-goreng-jawa-500x300.jpg" />
                    <ProductComponent onHandleCounter={(value) => this.handleCounter(value)} onHandleCart={(value) => this.handleCart(value)} id="5" title="Nasi Padang" desc="Wenakkk" price="15.000" image="https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/tvlk-prod-cul-assets/culinary/asset/REST_Nas-1059x720-FIT_AND_TRIM-b8f8e1ba5da08927a6aa082ded6a487f.jpeg?tr=q-40,c-at_max,w-1080,h-1920&_src=imagekit" />
                </div>
            </Fragment>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        path : state.path,
        title: state.title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePath: (value) => dispatch({ type: 'HANDLE_PATH', value : value})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer)

