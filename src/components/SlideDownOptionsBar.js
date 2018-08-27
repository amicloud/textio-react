import React, {Component} from 'react'

class MessageOptionsBar extends Component {

    constructor(props) {
        super();
        this.state = {
            messageID: props.id,
            deleteCallback: props.deleteCallback,
            messageStatus: props.messageStatus
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({show: nextProps.show});
    }

    render() {
        if (this.state.show) {
            return (
                <div className='slide-down-options-bar'>
                    <div onClick={this.state.deleteCallback} className='delete-button'>Delete</div>
                    <div className='message-status'>{this.state.messageStatus}</div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default MessageOptionsBar