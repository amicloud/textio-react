import React, {Component} from 'react'
import Message from './Message'
import axios from 'axios'

class MessagesContainer extends Component {
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/messages/index.json')
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