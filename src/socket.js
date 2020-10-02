import io from 'socket.io-client'

const PORT = process.env.PORT || 5000

const socket = io(`https://reactt-mini-chat.herokuapp.com/:${PORT}`);

export default socket;