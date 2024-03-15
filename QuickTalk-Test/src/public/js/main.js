const chatDiv = document.getElementById('chat');
const messageInput = document.getElementById('message');
const messageForm = document.getElementById('message-form');

const ws = new WebSocket('ws://localhost:3000');

ws.onmessage = function (event) {
  const message = event.data;
  appendMessage(message);
};

messageForm.addEventListener('submit', function (event) {
  event.preventDefault();
  sendMessage();
});

function sendMessage() {
  const message = messageInput.value;
  if (message) {
    const currentTime = new Date().toLocaleString();
    const messageWithTimestamp = `${currentTime}: ${message}`;
    ws.send(messageWithTimestamp);
    messageInput.value = '';
    scrollToBottom();
  }
}

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatDiv.appendChild(messageElement);
  scrollToBottom();
}

function scrollToBottom() {
  chatDiv.scrollTop = chatDiv.scrollHeight;
  // scroll to bottom of messages
  message.scrollTop = message.scrollHeight;
}

