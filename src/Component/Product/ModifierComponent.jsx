import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ModifierComponent.css'

class ModifierComponent extends Component {

    handleModifier = () => {
        this.props.handleMod(false, "");
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
