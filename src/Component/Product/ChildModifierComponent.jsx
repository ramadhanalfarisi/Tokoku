import React, { Component } from 'react'

export default class ChildModifierComponent extends Component {
    render() {
        return (
            <div className="item-modifier">
                <label className="label-modifier" htmlFor="modifier">
                    <input type="radio" name="modifier" id="modifier" />
                    <span className="checkmark"></span>
                    <img src="https://sgp1.digitaloceanspaces.com/indonesiawindow/2020/10/Tempe.jpg" alt="" />
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
