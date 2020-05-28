import React from "react";
import socket from "../socket";


const ChatRoom = ({users, messages, userName, roomId, onAddMessage}) => {
    const [messageValue, setMessageValue] = React.useState('');
    const messagesRef = React.useRef(null);

    const onSendMessage = () => {
        socket.emit('ROOM:NEW_MESSAGE', {
            userName,
            roomId,
            text: messageValue,
        });
        onAddMessage({userName, text: messageValue});
        setMessageValue('');
    };

    React.useEffect(() => {
        messagesRef.current.scrollTo(0, 99999);
    }, [messages]);

    return (
        <div className={'wrapper'}>
            <div className="chat">
                <div className="chat-users">
                    Комната: <b>{roomId}</b>
                    <hr />
                    <b>Онлайн ({users.length}):</b>
                    <ul>
                        {users.map((name, index) => (
                            <li key={name + index}>{name}</li>
                        ))}
                    </ul>
                </div>
                <div className="chat-messages">
                    <div ref={messagesRef} className="messages">
                        {messages.map((message) => (
                            <div className="message">
                                <p>{message.text}</p>
                                <div>
                                    <span>{message.userName}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form>
          <textarea
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              rows="3"></textarea>
                        <button onClick={onSendMessage} type="button" className="chtbtn">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChatRoom