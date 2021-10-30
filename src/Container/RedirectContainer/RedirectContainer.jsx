import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class RedirectContainer extends Component {
    render() {
        return (
            <div>
                <Redirect to="/dashboard" />
            </div>
        )
    }
}
