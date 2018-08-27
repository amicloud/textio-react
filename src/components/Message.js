import React, {Component} from 'react'
import axios from 'axios'
import Constants from "../Constants";
import MessageOptionsBar from './SlideDownOptionsBar.js'

class Message extends Component {
    constructor(props) {
        super();
        this.state = {
            message: props.message,
            show: props.show,
            tabIndex: 9999
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
        // this.onFocus = this.onFocus.bind(this);
    }

    handleClick(){

        this.setState({tabIndex: 0});
        this.state.showOptionsBar ? this.setState({showOptionsBar: false}) : this.setState({showOptionsBar: true});
    }

    onBlur(e){
        this.setState({showOptionsBar: false});
    }

    handleDelete() {
        axios.delete(Constants.apiEndpoints.messages.destroy + this.state.message.id)
            .then((response) => {
                this.setState({show: false});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        if(this.state.show){
            let s = this.state;
            let suffix = s.message.direction === 'outbound_api' ? 'outbound' : 'inbound';
            return (
                <div className={'message message-' + suffix} onBlur={this.onBlur} onClick={this.handleClick} tabIndex={s.tabIndex}>
                    <h1>{s.message.body}</h1>
                    <MessageOptionsBar id={s.message.id} deleteCallback={this.handleDelete} show={s.showOptionsBar} messageStatus={s.message.smsStatus}/>
                </div>
            )
        }
        return null;
    }
}

function

formatPhoneNumber(number) {
    if (!number) {
        return ""
    }
    return number.toString().substr(1).replace(/([0-9]*)([0-9]{3})([0-9]{3})([0-9]{4})/g, "($2)-$3-$4");
}

export default Message
