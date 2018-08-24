import React, {Component} from 'react'
import Message from './Message'
import Constants from '../Constants'
import axios from 'axios'
import SendMessageWidget from "./SendMessageWidget";
import SlideDownOptionsBar from "./SlideDownOptionsBar";

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
        };
    }

    render() {
        return (
            <div className="messages-container">
                <SendMessageWidget/>
                <br/>
                {this.state.messages.map((message) => {
                    return (
                        <Message message={message} key={message.id} show={true}/>
                    )
                })}
            </div>
        )
    }

}

export default MessagesContainer