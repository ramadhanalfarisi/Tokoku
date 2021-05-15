import React, { Component } from 'react'
import './BillComponent.css'

export default class BillComponent extends Component {
    render() {
        return (
            <div className="card-bill">
                <div className="detail-bill">
                    <p className="title-bill">{this.props.title}</p>
                    <p className="desc-bill">{this.props.desc}</p>
                    <p className="date-bill">{this.props.date}</p>
                </div>
                <div className="price-bil">
                    <span>Rp. {parseInt(this.props.price).toLocaleString("id")}</span>
                </div>
            </div>
        )
    }
}
