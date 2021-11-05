import React from 'react';


// Function used for displaying chat message
function ChatMessage(props) {
    const {messageObj} = props

    return (
        <div style={{border: '1px solid', verticalAlign: "middle", padding: "4px 0", width: 200, height: 40, borderRadius: 12, marginLeft: messageObj.id === 11 ? '90px' : 5, background: messageObj.id === 11 ? '#E4F1F6' : '#347B98', color: messageObj.id === 11 ? '#092834' : '#E4F1F6', marginBottom: 10 }}>
         {props.messageObj.value}
        </div>
    );
}

export default ChatMessage;
