import React, {Component} from 'react'
import Message from './Message'
import Constants from '../Constants'
import axios from 'axios'

class MessagesContainer extends Component {
    componentDidMount() {
        axios.get(Constants.apiEndpoints.messages.index)
            .then(response => {
                console.log(response);
                this.setState({messages: response.data})
            })
            .catch(error => console.log(error))
    }

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    render() {
        return (
            <div className="messages-container">
                {this.state.messages.map((message) => {
                    return (<Message message={message} key={message.id}/>)
                })}
            </div>
        )
    }

}

export default MessagesContainer