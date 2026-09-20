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

        screenshots: [
            {
                src: '/screenshots/hoster/dashboard-preview.png',
                title: 'Dashboard UI Preview',
                description:
                    'Demo interface showing the planned hostel operations dashboard. The production React frontend is currently in development.',
            },
        ],
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

        screenshots: [
            {
                src: '/screenshots/hydration-tracker/dashboard.png',
                title: 'Dashboard',
            },
            {
                src: '/screenshots/hydration-tracker/water-intake.png',
                title: 'Water Intake',
            },
            {
                src: '/screenshots/hydration-tracker/statistics.png',
                title: 'Statistics',
            },
        ],
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

        screenshots: [
            {
                src: '/screenshots/digital-wallet/login.png',
                title: 'Authentication',
            },
            {
                src: '/screenshots/digital-wallet/dashboard.png',
                title: 'Wallet Dashboard',
            },
            {
                src: '/screenshots/digital-wallet/transactions.png',
                title: 'Transaction History',
            },
        ],
    },

    {
        id: 'game-hub',
        number: '04',
        title: 'Game Hub',
        subtitle: 'Browser Games Collection',
        description:
            'A collection of browser games built from scratch with HTML, CSS and Vanilla JavaScript, including Snake, Sudoku, an image slide puzzle and Tic-Tac-Toe.',
        technologies: [
            'HTML5',
            'CSS3',
            'Vanilla JavaScript',
            'Google Fonts',
        ],
        status: 'Complete',

        features: [
            'Classic Snake game with scoring and collision detection',
            'Sudoku with Easy, Medium and Hard difficulty levels',
            'Dynamic Sudoku puzzle generation',
            'Backtracking-based Sudoku solver',
            'Image slide puzzle with dynamic image slicing',
            'Tic-Tac-Toe browser game',
            'Timers and score tracking',
            'Responsive user interfaces',
        ],

        technicalHighlights: [
            'Implemented the games without frameworks or external libraries',
            'Built a Sudoku puzzle generator and backtracking solver',
            'Implemented game-state and collision logic in Vanilla JavaScript',
            'Used dynamic image slicing for the slide puzzle',
        ],

        architecture:
            'HTML / CSS / JavaScript → Browser',

        github: {
            repository:
                'https://github.com/sunny-kumar-rana/game-hub',
        },

        demo: null,

        accent: 'red',

        screenshots: [
            {
                src: '/screenshots/game-hub/home.png',
                title: 'Game Hub',
            },
            {
                src: '/screenshots/game-hub/snake.png',
                title: 'Snake',
            },
            {
                src: '/screenshots/game-hub/sudoku.png',
                title: 'Sudoku',
            },
            {
                src: '/screenshots/game-hub/tic-tac-toe.png',
                title: 'Tic-Tac-Toe',
            },
            {
                src: '/screenshots/game-hub/image-puzzle.png',
                title: 'Image Puzzle',
            },
        ],
    },
]

export default projects