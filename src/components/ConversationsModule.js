import React, {Component} from 'react'
import ConversationsContainer from './ConversationsContainer.js'

class ConversationsModule extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className='module conversations-module'>
                <div className='module-header'>
                    <h1 className='module-title'>Conversations</h1>
                    <button className='button button-new-module'>+Conversation</button>
                </div>
                <ConversationsContainer/>
            </div>

        )
    }
}

export default ConversationsModule