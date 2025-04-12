import config from './config.js';

// Suggestions page functionality
document.addEventListener('DOMContentLoaded', () => {
    loadSuggestions();
});

async function loadSuggestions() {
    try {
        // Example API call using the config
        const response = await fetch(`${config.apiEndpoint}/suggestions`, {
            headers: {
                'Authorization': `Bearer ${config.apiKey}`
            }
        });
        // Handle the response
    } catch (error) {
        console.error('Error loading suggestions:', error);
    }
}