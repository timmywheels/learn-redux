import React, { Component } from 'react';
import { Link } from 'react-router'
import PhotoGrid from './PhotoGrid';

class Main extends Component {
    render() {
        return(
            <div>
                <h1>
                    <Link to={'/'}>Reduxstagram</Link>
                </h1>
                { React.cloneElement(this.props.children, this.props) }
            </div>
        )
    }
}

export default Main;