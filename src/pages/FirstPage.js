import React, { Component } from 'react';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'
class FirstPage extends Component {
    constructor() {
        super();
    }
    handleClick() {

        if (this.refs.name.value === '') {
            alert('please enter your name')
        } else {
            this.props.addName(this.refs.name.value);
            this.props.history.push('/ChatPage');

        }
        // this.state.newComponent = About;
    }

    render() {
        return (
            <div>
                <div>
                    <label>Enter Name</label>
                    <input type="text" ref="name" />
                </div>
                <br />
                <div>
                    <button
                        type="button"
                        onClick={this.handleClick.bind(this)}
                    >
                        {this.props.title}
                    </button>
                </div>
            </div>

        );
    }
}

export default FirstPage;
