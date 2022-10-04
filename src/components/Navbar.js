import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        {this.props.icon} {this.props.title}
                    </a>
                </div>
            </nav>
        )
    }
}

Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar