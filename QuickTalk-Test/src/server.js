const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server, connectionStateRecovery: {} });
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/index'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.php');
});

// Función para emitir mensajes al cliente
function broadcastMessage(message) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}

wss.on('connection', (ws, req) => {
    const ip = req.connection.remoteAddress;
    
    console.log(`Cliente conectado desde la dirección IP: ${ip}`);

    ws.on('message', (message) => {
        console.log(`Mensaje recibido de ${ip}: ${message}`);

        // Emitir el mensaje a todos los clientes conectados, incluido el remitente
        broadcastMessage(`[${ip}] ${message}`);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor WebSocket escuchando en http://localhost:${PORT}`);
});