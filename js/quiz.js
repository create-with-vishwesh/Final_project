import config from './config.js';

// Quiz functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeQuiz();
});

function initializeQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const progressBar = document.querySelector('.progress');
    const progressText = document.querySelector('.progress-text');
    const resultsSection = document.getElementById('results-section');

    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(quizForm);
            const results = analyzeResponses(formData);
            updateProgressBar(100);
            displayResults(results);
            
            // Hide the quiz form
            quizForm.style.display = 'none';
            
            // Show the results section with animation
            const resultsSection = document.getElementById('results-section');
            resultsSection.style.display = 'block';
            resultsSection.classList.add('animate__animated', 'animate__fadeIn');
            
            // Scroll to results
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        });

        // Update progress as user answers questions
        const radioInputs = quizForm.querySelectorAll('input[type="radio"]');
        radioInputs.forEach(input => {
            input.addEventListener('change', () => {
                const progress = calculateProgress(quizForm);
                updateProgressBar(progress);
            });
        });
    }
}

function calculateProgress(form) {
    const totalQuestions = form.querySelectorAll('.question').length;
    const answeredQuestions = form.querySelectorAll('input[type="radio"]:checked').length;
    return (answeredQuestions / totalQuestions) * 100;
}

function updateProgressBar(progress) {
    const progressBar = document.querySelector('.progress');
    const progressText = document.querySelector('.progress-text');
    if (progressBar && progressText) {
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}% Complete`;
    }
}

function analyzeResponses(formData) {
    const responses = {
        technical: {
            data: formData.get('data'),
            tech: formData.get('tech'),
            tech_interest: formData.get('tech_interest')
        },
        soft_skills: {
            communication: formData.get('communication'),
            workstyle: formData.get('workstyle'),
            pressure: formData.get('pressure')
        },
        preferences: {
            environment: formData.get('environment'),
            priority: formData.get('priority')
        }
    };

    return determineCareerMatches(responses);
}

function determineCareerMatches(responses) {
    const careers = [
        {
            title: 'Software Developer',
            match: calculateMatch(responses, {
                tech: 'very',
                tech_interest: ['frontend', 'backend'],
                workstyle: ['both', 'independent'],
                priority: ['growth', 'impact']
            }),
            description: 'Design and develop software applications using programming languages and development tools.',
            skills: ['Programming', 'Problem Solving', 'Analytical Thinking'],
            growth: 'High',
            environment: responses.preferences.environment || 'Hybrid'
        },
        {
            title: 'Data Scientist',
            match: calculateMatch(responses, {
                data: 'yes',
                tech_interest: ['data'],
                tech: ['very', 'somewhat'],
                priority: ['impact', 'growth']
            }),
            description: 'Analyze complex data sets and build predictive models to drive business decisions.',
            skills: ['Machine Learning', 'Statistics', 'Data Analysis'],
            growth: 'High',
            environment: responses.preferences.environment || 'Hybrid'
        },
        {
            title: 'UX/UI Designer',
            match: calculateMatch(responses, {
                tech_interest: ['frontend'],
                communication: ['excellent', 'good'],
                priority: ['impact', 'balance']
            }),
            description: 'Create intuitive and engaging user experiences for digital products.',
            skills: ['Design Thinking', 'User Research', 'Visual Design'],
            growth: 'High',
            environment: responses.preferences.environment || 'Hybrid'
        },
        {
            title: 'Project Manager',
            match: calculateMatch(responses, {
                communication: 'excellent',
                workstyle: 'team',
                pressure: ['thrive', 'manage']
            }),
            description: 'Lead and coordinate projects, teams, and resources to achieve business objectives.',
            skills: ['Leadership', 'Communication', 'Organization'],
            growth: 'High',
            environment: responses.preferences.environment || 'Office'
        }
    ];

    return careers.sort((a, b) => b.match - a.match).slice(0, 3);
}

function calculateMatch(responses, criteria) {
    let matchScore = 0;
    let totalCriteria = 0;

    for (const [category, value] of Object.entries(criteria)) {
        totalCriteria++;
        const response = responses.technical[category] || 
                        responses.soft_skills[category] || 
                        responses.preferences[category];

        if (Array.isArray(value)) {
            if (value.includes(response)) matchScore++;
        } else {
            if (response === value) matchScore++;
        }
    }

    return (matchScore / totalCriteria) * 100;
}

function displayResults(results) {
    const resultsSection = document.getElementById('results-section');
    const cardsContainer = resultsSection.querySelector('.career-cards-container');

    if (resultsSection && cardsContainer) {
        cardsContainer.innerHTML = results.map(career => `
            <div class="career-card">
                <div class="career-header">
                    <h3>${career.title}</h3>
                    <span class="match-score">${Math.round(career.match)}% Match</span>
                </div>
                <div class="career-content">
                    <p class="career-description">${career.description}</p>
                    <div class="skills-required">
                        <h4>Key Skills</h4>
                        <ul>
                            ${career.skills.map(skill => `<li>${skill}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="career-details">
                        <p><strong>Growth Potential:</strong> ${career.growth}</p>
                        <p><strong>Work Environment:</strong> ${career.environment}</p>
                    </div>
                </div>
            </div>
        `).join('');

        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
}