import React, {Component} from 'react'
import axios from 'axios'
import Constants from "../Constants";

class SendMessageWidget extends Component {

    constructor(props) {
        // console.log(process.env.REACT_APP_API_URL);
        super(props);
        this.state = {
            message: "",
            toNumber: "",
            fromNumber: "17608886443",
            conversation_id: props.conversation_id,
            onMessageSent: props.onMessageSent
        };
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleChangeToNumber = this.handleChangeToNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeMessage(event) {
        this.setState({message: event.target.value});
    }

    handleChangeToNumber(event) {
        this.setState({toNumber: event.target.value});
    }


    handleSubmit(event) {
        console.log("submitting");
        let params = {
            body: this.state.message,
            // conversation_id:  this.state.conversation_id,
            method: 'send'
        };
        axios.put(Constants.apiEndpoints.conversations.update + this.state.conversation_id, params)
            .then((response) => {
                console.log(response);
                this.state.onMessageSent.call(this, response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div className='send-message-widget'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.message} onChange={this.handleChangeMessage}/>
                    {/*<label>*/}
                    {/*Message:*/}
                    {/*</label>*/}

                    {/*<label>*/}
                    {/*To #:*/}
                    {/*<input type="text" value={this.state.toNumber} onChange={this.handleChangeToNumber}/>*/}
                    {/*</label>*/}
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }


}

export default SendMessageWidget