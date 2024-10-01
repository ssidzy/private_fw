document.getElementById('data-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Show submission notification
    const notification = document.getElementById('notification');
    notification.textContent = 'Submitted, please wait...';
    notification.style.color = 'orange';

    // Show loading spinner
    const loadingBar = document.getElementById('loading-bar');
    const spinner = document.getElementById('spinner');
    loadingBar.style.display = 'none'; // Hide loading bar
    spinner.style.display = 'block'; // Show spinner

    // Simulate an async process with a promise
    await simulateAsyncProcess();

    // Hide spinner after process completes
    spinner.style.display = 'none';

    // Show success notification
    notification.textContent = 'Successfully done!';
    notification.style.color = 'green';
});

// Function to simulate an async process
function simulateAsyncProcess() {
    return new Promise((resolve) => {
        let width = 0;
        const loadingInterval = setInterval(function() {
            if (width >= 100) {
                clearInterval(loadingInterval);
                resolve();
            } else {
                width += Math.random() * 10; // Increment width randomly
                loadingBar.style.width = Math.min(width, 100) + '%'; // Cap at 100%
            }
        }, 500); // Adjust the interval as needed
    });
}

// Chatbot functionality
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', function() {
    const message = userInput.value.trim();
    if (message) {
        // Display user message
        const userMessage = document.createElement('p');
        userMessage.textContent = 'You: ' + message;
        chatMessages.appendChild(userMessage);
        
        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement('p');
            botMessage.textContent = 'Bot: ' + getBotResponse(message);
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
        }, 500);

        userInput.value = ''; // Clear input field
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
    }
});

function getBotResponse(userMessage) {
    // Simple bot responses (you can customize this)
    return "I'm here to help! You said: " + userMessage;
}
