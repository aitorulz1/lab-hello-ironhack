import React, { Component } from 'react';
import Nav from './Nav'
import Content from './Content'
import Subcontent from './Subcontent'
import Button from './Button'




class Slider extends Component {
    render() {
        return (
        <div className="Slider">
                <Nav />
            <div className="Content">
                <Content />
                <Subcontent />
                <Button />
            </div>
        </div>
        )
    }
}

export default Slider
