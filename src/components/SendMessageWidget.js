import React, {Component} from 'react'
import axios from 'axios'
import Constants from "../Constants";

class SendMessageWidget extends Component {

    constructor(props) {
        console.log(process.env.REACT_APP_API_URL);
        super(props);
        this.state = {message: "", toNumber: "", fromNumber: "17608886443"};
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
            fromNumber: this.state.fromNumber,
            toNumber: process.env.NODE_ENV === 'development' ? 7603832457 : this.state.toNumber,
            body: this.state.message
        };
        axios.post(Constants.apiEndpoints.messages.smsOutgoing, params)
            .then((response) => {
                console.log(response);
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
                    <label>
                        Message:
                        <input type="text" value={this.state.message} onChange={this.handleChangeMessage}/>
                    </label>

                    <label>
                        To #:
                        <input type="text" value={this.state.toNumber} onChange={this.handleChangeToNumber}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }


}

export default SendMessageWidget