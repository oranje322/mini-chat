import io from 'socket.io-client'

const PORT = process.env.PORT || 5000

const socket = io(`http://localhost:${PORT}`);

export default socket;