import React, {Component} from 'react'
import Message from './Message'
import Constants from "../Constants";
import axios from 'axios'

class MessagesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            conversation_id: props.conversation_id
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({messages: nextProps.messages});
    }

    componentDidMount(){
        let id = 'messages-container-conversation-' + this.state.conversation_id;
        let container = document.getElementById(id);
        if(!container){
            console.log('yunull');
            return;
        }
        container.scrollTop = container.scrollHeight;
    }

    render() {
        console.log(this.state.messages);
        if (this.state.messages) {
            return (
                <div id={'messages-container-conversation-' + this.state.conversation_id} className="messages-container">
                    {this.state.messages.map((message) => {
                        return (
                            <Message message={message} key={message.id} show={true}/>
                        )
                    })}
                </div>
            )
        } else {
            return null;
        }
    }

}

export default MessagesContainer