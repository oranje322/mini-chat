import React, {useState} from "react";
import axios from 'axios';

const LoginForm = ({onLogin}) => {
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const onEnter = async () => {
        if (!roomId || !userName) {
            return alert('Неверные данные');
        }
        const obj = {
            roomId,
            userName,
        };
        setLoading(true);
        await axios.post('/rooms', obj);
        onLogin(obj);
    };

    return (
        <div>
            <div className={'loginPage'}>
                <div className={'form'}>
                    <form className={'loginForm'}>
                        <input type="text" placeholder="Room ID" value={roomId}  onChange={(e) => setRoomId(e.target.value) }/>
                        <input type="text" placeholder="Nickname" value={userName} onChange={(e) => setUserName(e.target.value) }/>
                        <button onClick={onEnter} disabled={isLoading}>
                            {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm