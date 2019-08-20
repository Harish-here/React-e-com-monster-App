import React, { Component } from 'react';

export default class Lifecycle extends Component {
    constructor(){
        super();
    }

    componentDidCatch(){
        console.log('componentDidCatch')
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillMount(){
        console.log("componentWillMount")
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    render() {
        return (
            <div>sample </div>
        )
    }
}