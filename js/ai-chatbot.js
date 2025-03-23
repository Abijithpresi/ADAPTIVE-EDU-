// Dark/Light Mode Toggle
const toggleMode = document.getElementById('toggleMode');
const body = document.body;

toggleMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleMode.innerHTML = body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Typing Indicator Simulation
const chatHistory = document.querySelector('.chat-history');
const typingIndicator = document.querySelector('.message.typing');

setTimeout(() => {
    typingIndicator.remove();
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    botMessage.innerHTML = '<p>Sure! Let me help you with Python.</p>';
    chatHistory.appendChild(botMessage);
    chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom
}, 2000);

// Send Message Functionality
const chatInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.chat-input button');

sendButton.addEventListener('click', () => {
    const messageText = chatInput.value.trim();
    if (messageText) {
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.innerHTML = `<p>${messageText}</p>`;
        chatHistory.appendChild(userMessage);
        chatInput.value = '';
        chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom

        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot');
            botMessage.innerHTML = `<p>Got it! Here's the answer...</p>`;
            chatHistory.appendChild(botMessage);
            chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom
        }, 1000);
    }
});

// Quick Replies Functionality
const quickReplies = document.querySelectorAll('.quick-replies button');

quickReplies.forEach(button => {
    button.addEventListener('click', () => {
        const messageText = button.textContent;
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.innerHTML = `<p>${messageText}</p>`;
        chatHistory.appendChild(userMessage);
        chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom

        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot');
            botMessage.innerHTML = `<p>Here's some information about ${messageText}.</p>`;
            chatHistory.appendChild(botMessage);
            chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom
        }, 1000);
    });
});