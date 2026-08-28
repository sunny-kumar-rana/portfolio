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
            'Spring Boot 4',
            'Spring Security',
            'JWT',
            'Spring Data JPA',
            'PostgreSQL',
            'Spring Mail',
            'OpenAPI',
            'React 19',
            'Vite',
            'Tailwind CSS',
            'Recharts',
        ],
        status: 'Full-stack',

        features: [
            'JWT-based user authentication',
            'Daily water-intake tracking',
            'Personal hydration goals',
            'Dashboard with daily progress',
            'Weekly and monthly statistics',
            'Hydration streak tracking',
            'Profile and password management',
            'Scheduled hydration reminders',
            'Email notifications',
            'Telegram notifications',
        ],

        technicalHighlights: [
            'Timezone-aware reminder scheduling',
            'Automated reminders based on individual hydration goals',
            'Daily goal-achievement detection with duplicate notification prevention',
            'Statistics and progress aggregation for daily, weekly and monthly periods',
            'JWT-based stateless authentication',
            'Centralized exception handling and request validation',
        ],

        architecture:
            'React frontend → REST API → Spring Boot → PostgreSQL',

        github: {
            backend:
                'https://github.com/sunny-kumar-rana/hydration-reminder-backend',
            frontend:
                'https://github.com/sunny-kumar-rana/hydration-tracker-frontend',
        },

        demo: null,

        accent: 'blue',
    },

    {
        id: 'digital-wallet',
        number: '03',
        title: 'Digital Wallet',
        subtitle: 'Wallet & Transaction System',
        description:
            'A digital wallet application with authenticated wallet operations, balance validation, wallet transfers and transaction history.',
        technologies: [
            'Spring Boot 3.5',
            'Spring Security',
            'JWT',
            'Spring Data JPA',
            'Oracle',
            'React 19',
            'Axios',
            'Tailwind CSS',
        ],
        status: 'Full-stack',

        features: [
            'User registration and authentication',
            'JWT-based authentication',
            'Wallet creation and management',
            'Deposit and withdrawal operations',
            'Balance validation',
            'Wallet-to-wallet transfers',
            'Transaction history',
            'Request validation',
            'Global exception handling',
        ],

        technicalHighlights: [
            'Transactional money operations',
            'Insufficient-balance validation for withdrawals and transfers',
            'Pessimistic locking during wallet transfers',
            'Consistent wallet lock ordering to reduce deadlock risk',
            'Authenticated-user context through Spring Security',
            'Domain-specific exception handling',
        ],

        architecture:
            'React frontend → REST API → Spring Boot → Oracle',

        github: {
            backend:
                'https://github.com/sunny-kumar-rana/digital-wallet-springboot',
            frontend:
                'https://github.com/sunny-kumar-rana/digital-wallet-frontend',
        },

        demo: null,

        accent: 'blue',
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