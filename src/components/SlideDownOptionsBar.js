import React, {Component} from 'react'

class MessageOptionsBar extends Component {

    constructor(props) {
        super();
        this.state = {
            messageID: props.id,
            deleteCallback: props.deleteCallback
        };
    }

    render() {
        return (
            <div className='slide-down-options-bar'>
                <div onClick={this.state.deleteCallback} className='delete-button'>Delete</div>
            </div>
        )
    }

}

export default MessageOptionsBar