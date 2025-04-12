// Configuration settings
const config = {
    version: '1.0.0',
    maxMessageLength: 500,
    
    // Career advisor settings
    advisor: {
        name: 'Career Compass Advisor',
        greeting: 'Hello! I\'m your career advisor. How can I help you today?',
        responseDelay: 500 // Milliseconds to simulate thinking
    },
    
    // Career categories for suggestions
    careerCategories: {
        tech: 'Technology',
        business: 'Business',
        creative: 'Creative',
        healthcare: 'Healthcare',
        education: 'Education'
    },
    
    // Response categories for advisor
    responseCategories: {
        careerPath: 'Career Path Guidance',
        skillDevelopment: 'Skill Development',
        jobSearch: 'Job Search Strategy',
        interview: 'Interview Preparation',
        resumeAdvice: 'Resume Building',
        networking: 'Professional Networking'
    }
};

export default config;