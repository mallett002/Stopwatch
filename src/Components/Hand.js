import React, {Component} from 'react';

class Hand extends Component {
    render() {
        
        return (
            <div 
                className='second-hand'
                style={{transform: `rotate(${this.props.rotate}deg)`}}
            ></div>
        )
    }
}

export default Hand;