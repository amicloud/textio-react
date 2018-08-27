import React, {Component} from 'react'
import axios from 'axios'
import Constants from '../Constants.js'
import Conversation from './Conversation.js'

class ConversationsContainer extends Component {

    componentDidMount() {
        axios.get(Constants.apiEndpoints.conversations.index)
            .then((response) => {
                // console.log(response);
                this.setState({conversations: response.data});
            })
            .catch((response) => {
                console.log('Uh oh');
                console.log(response);
            })
    }

    constructor(props) {
        super();
        this.state = {conversations: []}
    }

    render() {
        return (
            <div className='conversations-container'>
                {this.state.conversations.map((conversation) => {
                    return (
                        <Conversation key={conversation.id} conversation_id={conversation.id}/>
                    )
                })}
            </div>
        )
    }
}

export default ConversationsContainer