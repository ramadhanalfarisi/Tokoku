import React, { Component } from 'react'

export default class ChildModifierComponent extends Component {

    handleChangeModifier = (val) => {
        const { value, checked } = val.target;
        let data_modifier = {
            id : value,
            name : this.props.title,
            desc : this.props.desc,
            image : this.props.image,
            price : this.props.price
        }
        this.props.onHandleChangeModifier(data_modifier,checked);
    }

    render() {
        return (
            <div className="item-modifier">
                <label className="label-modifier" htmlFor={"modifier" + this.props.id}>
                    <input type={this.props.type === 'radio' ? "radio" : "checkbox"} value={this.props.id} className="modifier" name={this.props.type === 'radio' ? "modifier" : "modifier[]"} id={"modifier" + this.props.id} onChange={this.handleChangeModifier} />
                    <span className={this.props.type === 'radio' ? "checkmark radio-btn" : "checkmark check-btn"}></span>
                    <img src={this.props.image} alt="" />
                    <div className="detail-modifier">
                        <span className="title-modifier">{this.props.title}</span>
                        <span className="desc-modifier">{this.props.desc}</span>
                    </div>
                    <span className="price-modifier">Rp. {parseInt(this.props.price).toLocaleString("id")}</span>
                </label>
            </div>
        )
    }
}
