import React, { Component } from 'react';
import './App.css';

import { subScribeToTimer } from "./api/index";

class App extends Component {

    state = {
        timestamp: 'no timestamp yet',
        availableUsers: {1: 'Roy', 2: 'Zorana', 3: 'Nedjo', 4: 'Anica'},
        selectedUser: undefined,
    };

    handleSelectUser = key => this.setState({ selectedUser: key });

    componentDidMount() {
        subScribeToTimer((err, timestamp) => this.setState({ timestamp }));
    }

    render() {
        const { availableUsers, selectedUser } = this.state;
        const userKeys = Object.keys(availableUsers);
        return (
            <div className="App">
                <h1>Web sockets in action</h1>
                <p>{this.state.timestamp}</p>

                <div className="main-menu">
                    <h2>Available users</h2>
                    <ul className="user-list">
                        {userKeys.map(key => {
                            const user = availableUsers[key];
                            return (
                                <li
                                    key={key}
                                    className={selectedUser == key ? 'selected' : ''}
                                    onClick={this.handleSelectUser.bind(this, key)}
                                >
                                    {user}
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                        <input type="text" placeholder="Enter name" />
                        <button>Save</button>
                    </div>
                    <button disabled={!selectedUser ? 'disabled' : ''}>Start game</button>
                    <button>Hall of Fame</button>
                </div>

            </div>
        );
    }
}

export default App;


// helpful article: https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34
// Socket IO docs:  https://socket.io/get-started/chat/#Introduction
// Room: https://socket.io/docs/server-api/#socket-to-room
// Scaling with websockets: https://hackernoon.com/scaling-websockets-9a31497af051