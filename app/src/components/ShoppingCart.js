import React, { Component } from 'react'

export default class ShoppingCart extends Component {
    state = {
        data: {}
    };

    componentDidMount() {
        setInterval(() => {
            fetch('http://localhost:3000/json/test.json')
			.then(response => response.json())
			.then(data => {
                console.log(data);
				this.setState({data: data })
		    })
			.catch(err => console.error(this.props.url, err.toString()))
        }, 1500);
    }
    render() {
        return (
            <div className="container">
            
            </div>
        )
    }
}
