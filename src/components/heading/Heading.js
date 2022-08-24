import React from 'react';
import './heading.css';

class Heading extends React.Component {
    constructor() {
        super(); //wywolanie nadrzednego konstruktora
        this.state = {home: "Home"}
    }
    render() {
        return (
            <div>
                <nav>
                    <h1 style={{color:"grey", backgroundColor:"white"}}>{this.props.headerTitle}</h1>
                    <ul className='navigation'>
                        <li>{ this.state.home }</li>
                        <li>Blog</li>
                        <li>Artykuly</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Heading;