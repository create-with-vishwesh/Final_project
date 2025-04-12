const OPENAI_API_KEY = "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";

const API_KEY = "AIzaSyCvnUqO_IGQXyN1fqYO6O_JYIrHiJhhCm4";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');
let selectedVoice = null;
let recognition;
let isListening = false;

// Initialize speech synthesis voices
function setVoice() {
    const speechSynthesis = window.speechSynthesis;
    const voices = speechSynthesis.getVoices();
    selectedVoice = voices.find(voice => voice.name.toLowerCase().includes("female")) || voices[0];
}

// Initialize voices when they load
window.speechSynthesis.onvoiceschanged = setVoice;

// Function to start/stop speech recognition
function toggleSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Speech Recognition API not supported in this browser.');
        return;
    }

    if (isListening) {
        recognition.stop();
        return;
    }

    recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function() {
        isListening = true;
        console.log("Listening...");
    };

    recognition.onresult = function(event) {
        const speechToText = event.results[0][0].transcript;
        userInput.value = speechToText;
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.onend = function() {
        isListening = false;
    };

    recognition.start();
}

// Function to speak text
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    window.speechSynthesis.speak(utterance);
}

function isCareerRelated(message) {
    const careerKeywords = ['career', 'job', 'work', 'employment', 'profession', 'occupation', 'resume', 'cv', 'interview', 'salary', 'promotion', 'skills', 'experience'];
    const educationKeywords = ['education', 'school', 'university', 'college', 'degree', 'course', 'study', 'learning', 'training', 'certification', 'qualification'];
    
    const lowerMessage = message.toLowerCase();
    return careerKeywords.some(word => lowerMessage.includes(word)) || 
           educationKeywords.some(word => lowerMessage.includes(word));
}

async function sendMessageToAI(message) {
    if (!isCareerRelated(message)) {
        return "I'm sorry, I can only answer questions related to careers and education. Please ask me about career advice, job searching, or education paths.";
    }
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: message
                    }]
                }]
            })
        });

        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        const data = await response.json();
        return data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I didn't understand that.";
    } catch (error) {
        console.error('Error:', error);
        return "Sorry, I'm having trouble connecting to the career advice service. Please try again later.";
    }
}

function addMessageToChat(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user' : 'advisor');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendMessage.addEventListener('click', async () => {
    const message = userInput.value.trim();
    if (message) {
        addMessageToChat(message, true);
        userInput.value = '';
        
        const response = await sendMessageToAI(message);
        addMessageToChat(response, false);
    }
});

userInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const message = userInput.value.trim();
        if (message) {
            addMessageToChat(message, true);
            userInput.value = '';
            
            const response = await sendMessageToAI(message);
            addMessageToChat(response, false);
        }
    }
});