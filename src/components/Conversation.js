import React, {Component} from 'react'
import MessagesContainer from './MessagesContainer'
import SendMessageWidget from "./SendMessageWidget";
import Constants from "../Constants";
import axios from 'axios'

class Conversation extends Component {

    constructor(props){
        super();
        this.state = {
            conversation: {},
            conversation_id: props.conversation_id,
        };
        this.onMessageSent = this.onMessageSent.bind(this);
    }

    componentDidMount(){
        axios.get(Constants.apiEndpoints.conversations.show + this.state.conversation_id)
            .then((response) => {
                this.setState({conversation: response.data, messages: response.data.messages});
            })
            .catch((response) => {
                console.log('Uh oh');
                console.log(response);
            })
    }

    onMessageSent(message){
        let messages = this.state.messages;
        messages.push(message);
        this.setState({messages: messages})
    }

    render(){
        return(
            <div className='conversation'>
                <MessagesContainer conversation_id={this.state.conversation_id} messages={this.state.messages}/>
                <SendMessageWidget conversation_id={this.state.conversation_id} onMessageSent={this.onMessageSent}/>
            </div>
        )
    }
}

export default Conversation