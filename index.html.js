//parvin tourism.js
const config = {
    welcomeText: "Hello, I am Parvin your travel assistant",
    "font-family": "Arial, sans-serif",
    "font-size": "16px",
    "font-weight": "normal"
};

// app.js
document.addEventListener('DOMContentLoaded', () => {
    const welcomeElement = document.getElementById('welcome-text');
    welcomeElement.textContent = config.welcomeText;
    welcomeElement.style.fontFamily = config['font-family'];
    welcomeElement.style.fontSize = config['font-size'];
    welcomeElement.style.fontWeight = config['font-weight'];

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = '#646a6dff';
        } else {
            navbar.style.background = '#e9f7d1ff';
        }
    });

    // View Details buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Details coming soon!'); // Replace with modal
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your request has been sent!');
    });

    // Floating Icon Toggle Chat
    const assistantIcon = document.getElementById('assistant-icon');
    const chatSection = document.getElementById('chat');
    assistantIcon.addEventListener('click', () => {
        chatSection.classList.toggle('active');
        if (chatSection.classList.contains('active')) {
            // Scroll to chat
            chatSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Virtual Assistant Chat (Client-side Bot)
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message');
    const messageArea = document.getElementById('messageArea');

    function appendMessage(text, sender) {
        const msgElem = document.createElement('p');
        msgElem.classList.add(sender);
        msgElem.textContent = text;
        messageArea.appendChild(msgElem);
        messageArea.scrollTop = messageArea.scrollHeight;
    }

    function botResponse(userMessage) {
        const lowerMsg = userMessage.toLowerCase();
        if (lowerMsg.includes('stuck') || lowerMsg.includes('navigate') || lowerMsg.includes('help')) {
            return 'Hi! I\'m Parvin. If you\'re stuck, use the navbar to go to Explore Sites, Contact, or Chat. What specific section do you need help with?';
        } else if (lowerMsg.includes('kasese')) {
            return 'Kasese offers amazing hikes in Rwenzori Mountains and safaris in Queen Elizabeth Park. Would you like to book a tour?';
        } else if (lowerMsg.includes('lake victoria')) {
            return 'Lake Victoria is perfect for island hopping and relaxation. Contact us for boat tours!';
        } else if (lowerMsg.includes('mabira')) {
            return 'Mabira Forest is great for birdwatching and ziplining. Let me know if you need directions or bookings.';
        } else {
            return 'I\'m here to help with navigation or questions about our sites. Ask about Kasese, Lake Victoria, Mabira Forest, or if you\'re stuck somewhere!';
        }
    }

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (messageInput.value) {
            appendMessage(`You: ${messageInput.value}`, 'user');
            const response = botResponse(messageInput.value);
            setTimeout(() => {
                appendMessage(`Parvin: ${response}`, 'bot');
            }, 500); // Simulate delay
            messageInput.value = '';
        }
    });
});