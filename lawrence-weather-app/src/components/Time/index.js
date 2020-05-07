import React, { Component } from 'react'

export default class Time extends Component {

    constructor() {
        super();
        this.state = {
            time: new Date()
        }
        this.setCurrentTime = this.setCurrentTime.bind(this);
    }

    setCurrentTime() {
        this.setState({
            time: new Date()
        });
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setCurrentTime();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    render() {
        const { time } = this.state;

        const date = time.toLocaleDateString('en-US');
        const current_time = time.toLocaleTimeString('en-US');

        return (
            <div>
                <div style={{ fontWeight: 'bold' }}>
                    {current_time}
                </div>
                <div style={{ fontWeight: 'bold' }}>
                    {date}
                </div>
            </div>
        )
    }
}
