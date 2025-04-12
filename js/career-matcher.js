// Career matching algorithm and suggestion generator

class CareerMatcher {
    constructor() {
        this.careerPaths = {
            tech: [
                {
                    title: "Frontend Developer",
                    description: "Build responsive and interactive user interfaces using modern web technologies.",
                    skills: ["JavaScript", "React/Vue/Angular", "HTML/CSS"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$70,000 - $140,000"
                },
                {
                    title: "Backend Developer",
                    description: "Develop server-side applications and APIs to power web applications.",
                    skills: ["Node.js/Python/Java", "Database Design", "API Development"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$80,000 - $150,000"
                },
                {
                    title: "Mobile Developer",
                    description: "Create native and cross-platform mobile applications for iOS and Android.",
                    skills: ["Swift/Kotlin", "React Native/Flutter", "Mobile UI Design"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$75,000 - $145,000"
                },
                {
                    title: "DevOps Engineer",
                    description: "Automate deployment processes and manage cloud infrastructure.",
                    skills: ["CI/CD", "Docker/Kubernetes", "Cloud Platforms"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$90,000 - $160,000"
                },
                {
                    title: "Quality Assurance Engineer",
                    description: "Ensure software quality through automated testing and quality processes.",
                    skills: ["Test Automation", "Performance Testing", "Quality Processes"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$65,000 - $120,000"
                },
                {
                    title: "Technical Writer",
                    description: "Create technical documentation and user guides for software products.",
                    skills: ["Technical Writing", "Documentation Tools", "Information Architecture"],
                    environment: "Office/Remote",
                    growthPotential: "Moderate",
                    salary: "$60,000 - $110,000"
                },
                {
                    title: "Cloud Solutions Architect",
                    description: "Design scalable and secure cloud infrastructure solutions.",
                    skills: ["Cloud Architecture", "System Design", "Security Best Practices"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$100,000 - $180,000"
                },
                {
                    title: "Cybersecurity Engineer",
                    description: "Implement security measures and protect against cyber threats.",
                    skills: ["Security Tools", "Penetration Testing", "Risk Assessment"],
                    environment: "Office/Hybrid",
                    salary: "$85,000 - $160,000"
                }
            ],
            data: [
                {
                    title: "Data Analyst",
                    description: "Analyze data sets to identify trends and provide actionable insights.",
                    skills: ["SQL", "Data Visualization", "Statistical Analysis"],
                    environment: "Office/Hybrid",
                    growthPotential: "High",
                    salary: "$60,000 - $100,000"
                },
                {
                    title: "Business Intelligence Developer",
                    description: "Build and maintain BI solutions and data warehouses.",
                    skills: ["ETL", "Data Warehousing", "BI Tools"],
                    environment: "Office/Hybrid",
                    growthPotential: "High",
                    salary: "$70,000 - $120,000"
                },
                {
                    title: "Data Scientist",
                    description: "Apply machine learning and statistical modeling to solve business problems.",
                    skills: ["Python/R", "Machine Learning", "Statistical Modeling"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$90,000 - $160,000"
                },
                {
                    title: "Data Engineer",
                    description: "Design and implement data pipelines and infrastructure.",
                    skills: ["Big Data", "Data Pipeline", "Cloud Platforms"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$85,000 - $155,000"
                },
                {
                    title: "Analytics Manager",
                    description: "Lead data analytics teams and drive data-driven decision making.",
                    skills: ["Team Leadership", "Analytics Strategy", "Stakeholder Management"],
                    environment: "Office/Hybrid",
                    growthPotential: "High",
                    salary: "$100,000 - $180,000"
                },
                {
                    title: "Data Visualization Specialist",
                    description: "Create interactive dashboards and visual stories from complex data.",
                    skills: ["Tableau/Power BI", "Data Storytelling", "UX Design"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$70,000 - $120,000"
                },
                {
                    title: "Machine Learning Engineer",
                    description: "Build and deploy ML models and AI solutions at scale.",
                    skills: ["Deep Learning", "MLOps", "Model Optimization"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$95,000 - $175,000"
                }
            ],
            management: [
                {
                    title: "Technical Program Manager",
                    description: "Coordinate complex technical projects and cross-functional teams.",
                    skills: ["Technical Planning", "Program Management", "Cross-team Coordination"],
                    environment: "Office/Hybrid",
                    growthPotential: "High",
                    salary: "$90,000 - $160,000"
                },
                {
                    title: "Digital Product Manager",
                    description: "Lead digital product development and innovation initiatives.",
                    skills: ["Product Strategy", "User Experience", "Agile Management"],
                    environment: "Office/Hybrid",
                    growthPotential: "High",
                    salary: "$85,000 - $155,000"
                },
                {
                    title: "Agile Coach",
                    description: "Guide organizations in adopting and scaling agile practices.",
                    skills: ["Agile Frameworks", "Change Management", "Team Coaching"],
                    environment: "Office/Hybrid",
                    growthPotential: "High",
                    salary: "$100,000 - $170,000"
                },
                {
                    title: "Engineering Manager",
                    description: "Lead software development teams and drive technical excellence.",
                    skills: ["Technical Leadership", "People Management", "Software Architecture"],
                    environment: "Office/Hybrid",
                    growthPotential: "High",
                    salary: "$120,000 - $200,000"
                },
                {
                    title: "Innovation Manager",
                    description: "Drive technological innovation and digital transformation initiatives.",
                    skills: ["Innovation Strategy", "Digital Transformation", "Stakeholder Management"],
                    environment: "Office/Hybrid",
                    growthPotential: "High",
                    salary: "$95,000 - $170,000"
                },
                {
                    title: "Delivery Manager",
                    description: "Ensure successful delivery of software projects and solutions.",
                    skills: ["Project Delivery", "Risk Management", "Team Leadership"],
                    environment: "Office/Hybrid",
                    growthPotential: "High",
                    salary: "$85,000 - $150,000"
                }
            ],
            creative: [
                {
                    title: "UX/UI Designer",
                    description: "Design intuitive and engaging user interfaces for digital products.",
                    skills: ["User Research", "Wireframing", "Interaction Design"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$70,000 - $130,000"
                },
                {
                    title: "Motion Designer",
                    description: "Create animated graphics and visual effects for digital media.",
                    skills: ["Animation", "Visual Effects", "Creative Tools"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$60,000 - $110,000"
                },
                {
                    title: "AR/VR Designer",
                    description: "Design immersive experiences for augmented and virtual reality.",
                    skills: ["3D Modeling", "Unity/Unreal", "Spatial Design"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$80,000 - $140,000"
                },
                {
                    title: "Interactive Media Developer",
                    description: "Build interactive digital experiences and multimedia applications.",
                    skills: ["Web Animation", "Interactive Design", "Creative Coding"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$70,000 - $120,000"
                },
                {
                    title: "Game Designer",
                    description: "Design engaging gameplay mechanics and user experiences for games.",
                    skills: ["Game Design", "Level Design", "User Psychology"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$65,000 - $115,000"
                },
                {
                    title: "Digital Artist",
                    description: "Create digital artwork and illustrations for various media.",
                    skills: ["Digital Illustration", "Creative Suite", "Art Direction"],
                    environment: "Office/Remote",
                    growthPotential: "High",
                    salary: "$55,000 - $100,000"
                }
            ]
        };
    }

    calculateCareerMatches(quizResponses) {
        const scores = {
            tech: 0,
            data: 0,
            management: 0,
            creative: 0
        };

        // Calculate scores based on quiz responses
        if (quizResponses.data === 'yes') {
            scores.data += 30;
            scores.tech += 20;
        }

        if (quizResponses.tech === 'very') {
            scores.tech += 30;
            scores.data += 20;
        } else if (quizResponses.tech === 'somewhat') {
            scores.tech += 20;
            scores.management += 15;
        }

        switch (quizResponses.tech_interest) {
            case 'frontend':
                scores.tech += 25;
                scores.creative += 20;
                break;
            case 'backend':
                scores.tech += 30;
                scores.data += 15;
                break;
            case 'data':
                scores.data += 30;
                scores.tech += 15;
                break;
            case 'security':
                scores.tech += 25;
                scores.management += 20;
                break;
        }

        if (quizResponses.communication === 'excellent') {
            scores.management += 30;
            scores.creative += 25;
        } else if (quizResponses.communication === 'good') {
            scores.management += 20;
            scores.creative += 15;
        }

        if (quizResponses.workstyle === 'team') {
            scores.management += 25;
            scores.creative += 20;
        } else if (quizResponses.workstyle === 'independent') {
            scores.tech += 20;
            scores.data += 20;
        }

        if (quizResponses.pressure === 'thrive') {
            scores.management += 25;
            scores.creative += 20;
        } else if (quizResponses.pressure === 'manage') {
            scores.tech += 15;
            scores.data += 15;
        }

        // Get top career categories
        const sortedCategories = Object.entries(scores)
            .sort(([,a], [,b]) => b - a)
            .map(([category]) => category);

        // Get top 5 career suggestions from top categories
        const suggestions = [];
        for (const category of sortedCategories) {
            const categoryPaths = this.careerPaths[category];
            if (categoryPaths) {
                // Get multiple suggestions from each category based on score
                const numSuggestions = Math.ceil((scores[category] / 100) * categoryPaths.length);
                const shuffled = [...categoryPaths].sort(() => 0.5 - Math.random());
                
                for (let i = 0; i < numSuggestions && i < categoryPaths.length; i++) {
                    suggestions.push({
                        ...shuffled[i],
                        matchScore: Math.round((scores[category] / 100) * 100)
                    });
                }
            }
            if (suggestions.length >= 5) break;
        }

        return suggestions;
    }
}

export default CareerMatcher;