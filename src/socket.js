import io from 'socket.io-client'
import {PORT} from "../server";

const socket = io(`http://localhost:${PORT}`);

export default socket;