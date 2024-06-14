//Vitória Karoline de Carvalho Bernardo 
var messages = document.getElementById('messages');
var messageElement = document.createElement('div');
messageElement.textContent = message;
messages.appendChild(messageElement);
messages.scrollTop = messages.scrollHeight;
