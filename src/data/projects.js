const projects = [
    {
        id: 'hoster',
        number: '01',
        title: 'Hoster',
        subtitle: 'Hostel Management System',
        description:
            'A full-stack hostel management system for managing hostels, rooms, beds, residents, occupancy and rent.',
        technologies: [
            'Java 21',
            'Spring Boot 4',
            'Spring Security',
            'JWT',
            'Spring Data JPA',
            'PostgreSQL',
            'MapStruct',
            'OpenAPI',
            'React 19',
            'Vite',
            'Tailwind CSS',
        ],
        status: 'Backend complete · Frontend in development',
        accent: 'red',

        features: [
            'JWT-based authentication',
            'Owner-scoped hostel management',
            'Hostel, room and bed management',
            'Resident management with search and pagination',
            'Bed-based occupancy and check-in / check-out workflows',
            'Rent and payment tracking',
            'Pending and overdue rent queries',
            'Owner-focused dashboard metrics',
        ],

        technicalHighlights: [
            'Layered backend architecture with controllers, services, repositories and DTOs',
            'Stateless authentication with Spring Security and JWT',
            'Transactional occupancy operations',
            'MapStruct-based DTO mapping',
            'Bean validation and centralized exception handling',
            'OpenAPI / Swagger API documentation',
        ],

        architecture:
            'React frontend → REST API → Spring Boot → PostgreSQL',

        github: {
            backend:
                'https://github.com/sunny-kumar-rana/Hoster-Backend',
            frontend:
                'https://github.com/sunny-kumar-rana/hoster-frontend',
        },

        demo: null,
    },

    {
        id: 'hydration-tracker',
        number: '02',
        title: 'Hydration Tracker',
        subtitle: 'Hydration Tracking Application',
        description:
            'A full-stack hydration tracking application with progress analytics, streak tracking and automated hydration reminders.',
        technologies: [
            'Java 21',
            'Spring Boot',
            'Spring Security',
            'JWT',
            'PostgreSQL',
            'React',
        ],
        status: 'Full-stack',
        accent: 'blue',
        github: {
            backend:
                'https://github.com/sunny-kumar-rana/hydration-reminder-backend',
            frontend:
                'https://github.com/sunny-kumar-rana/hydration-tracker-frontend',
        },
        demo: null,
    },

    {
        id: 'digital-wallet',
        number: '03',
        title: 'Digital Wallet',
        subtitle: 'Wallet & Transaction System',
        description:
            'A digital wallet application with authenticated wallet operations, transfers, balance validation and transaction history.',
        technologies: [
            'Spring Boot',
            'Spring Security',
            'JWT',
            'JPA',
            'Oracle',
            'React',
        ],
        status: 'Full-stack',
        accent: 'blue',
        github: {
            backend:
                'https://github.com/sunny-kumar-rana/digital-wallet-springboot',
            frontend:
                'https://github.com/sunny-kumar-rana/digital-wallet-frontend',
        },
        demo: null,
    },

    {
        id: 'game-hub',
        number: '04',
        title: 'Game Hub',
        subtitle: 'Browser Games Collection',
        description:
            'A collection of browser games built from scratch with Vanilla JavaScript, including Snake, Sudoku, an image slide puzzle and Tic-Tac-Toe.',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Algorithms',
        ],
        status: 'Complete',
        accent: 'red',
        github: {
            repository: 'https://github.com/sunny-kumar-rana/game-hub',
        },
        demo: null,
    },
]

export default projects