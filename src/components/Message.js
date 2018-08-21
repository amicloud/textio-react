import React from 'react'

//TODO: Add onclick handler for message that opens message details
const Message = ({message}) =>
    <div className="message" key={message.id} onClick={this.handleClick}>
        <p>From {formatPhoneNumber(message.fromNumber)}</p>
        <p>To {formatPhoneNumber(message.toNumber)}</p>
        <h1>{message.body}</h1>
    </div>;
export default Message

function handleClick(){

}

function formatPhoneNumber(number){
    if(!number){
        return ""
    }
    return number.toString().substr(1).replace(/([0-9]*)([0-9]{3})([0-9]{3})([0-9]{4})/g, "($2)-$3-$4");
}