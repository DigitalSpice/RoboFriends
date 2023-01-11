import React from 'react';
import './Hello.css';

class Hello extends React.Component{
    render(){
        return(
            <div className='f1 tc'>
                <h1>Hello, world</h1>
                <p>Welcome to React</p>
            </div>
        )
    }
}

export default Hello;