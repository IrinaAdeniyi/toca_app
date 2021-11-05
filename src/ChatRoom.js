import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ChatMessage from './ChatMessage';

// gets inital messages from local storage
let retrievedMessages = localStorage.getItem("messenger")

function ChatRoom() {
    const [inputValue, setInputValue] = useState('');
    const [allMessages, setAllMessages] = useState(JSON.parse(retrievedMessages))

    const handleChange = (e) => {
        setInputValue(e.target.value) 
    }

    const handleSend = (e) => {

        let storedMessages = []
        if(!allMessages) {
            storedMessages = [{id: 1, value: inputValue}]
        } else {
            if(allMessages.length) {
                storedMessages = allMessages 
                storedMessages.push({id: 1, value: inputValue})
            }
        }

        localStorage.setItem("messenger", JSON.stringify(storedMessages))

        // re get messages after latest message has been sent, then updates the state
        setAllMessages(JSON.parse(localStorage.getItem("messenger")))
    }

    return (
        <div style={{ paddingTop: 10, border: '4px solid #1A3E4C', width: 300, height: 500, borderRadius: 12, margin: '50px auto', position: "relative", background: "#1A3E4C" }}>
            
        <div  style={{height: 450, overflowY: 'auto'}}>
            {allMessages && allMessages.length && allMessages.map((messageObj, id) => {
                
                return <ChatMessage key={id} messageObj={messageObj}/>
            })}
        </div>

            <div style={{ position: "absolute", bottom: 0, background: '#E4F1F6', display: "flex", flexDirection: "row", width: 300, borderTop: "4px solid #1A3E4C", borderRadius: 12 }}>
                <TextField focused={false} placeholder="Start typing..." onChange={handleChange} style={{width: "100%"}} />
                <Button variant="contained" onClick={handleSend} style={{background: "#347B98", color: "#E4F1F6"}} >Send</Button>
            </div>
        </div>
    );
}

export default ChatRoom;
