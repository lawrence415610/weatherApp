import React, { Component } from 'react'

export default class Time extends Component {

    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleDateString("en-GB", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric"
            })
        }
        this.setCurrentTime = this.setCurrentTime.bind(this);
    }

    setCurrentTime() {
        this.setState({
            time: new Date().toLocaleTimeString("en-GB", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric"
            })
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

        const date = time.substr(0, 16);
        const hour = time.substr(18, 2);
        const minute = time.substr(21, 2);
        const second = time.substr(24, 2);

        return (
            <div>
                <div style={{ fontWeight: 'bold' }}>
                    {hour}:{minute}:{second}
                </div>
                <div style={{ fontWeight: 'bold' }}>
                    {date}
                </div>
            </div>
        )
    }
}
