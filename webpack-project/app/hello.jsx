import React, { Component } from 'react'; //Component blir egen "global" istedenfor tilgjengelig via React.Component
import './style.scss'

export default class Hello extends Component {
    render() {
        return <h1>Hello {this.props.name}!</h1>
    }
}