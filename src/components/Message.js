import React, {Component} from 'react'
import SlideDownOptionsBar from './SlideDownOptionsBar.js'
import axios from 'axios'
import Constants from "../Constants";

class Message extends Component {
    constructor(props) {
        super();
        this.state = {
            message: props.message,
            show: props.show,
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        console.log("Sending Delete Request");
        axios.delete(Constants.apiEndpoints.messages.delete + this.state.message.id)
            .then((response) => {
                console.log(response);
                // this.state.deleteCallback.call(this.state.messageKey);
                this.setState({show: false});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        let s = this.state;
        if(this.state.show){
            return (
                <div className="message" onClick={this.handleClick}>
                    <p>From {formatPhoneNumber(s.message.fromNumber)}</p>
                    <p>To {formatPhoneNumber(s.message.toNumber)}</p>
                    <h1>{s.message.body}</h1>
                    <SlideDownOptionsBar id={s.message.id} deleteCallback={this.handleDelete}/>
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
