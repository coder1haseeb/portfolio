import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Khan Industrial Trader Portfolio',
        description: "Designed and developed a business portfolio website for Khan Industrial Trader. Added detailed information about the company and product catalog, showcasing their services and products in an interactive and visually appealing manner.",
        tools: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind CSS', 'SwiperJS'],
        role: 'Front End Developer',
        code: '',
        demo: '',
        image: '', // Add image path here
    },
    {
        id: 2,
        name: 'Learning Management System (LMS)',
        description: "Spearheaded the development of the user interface for a Learning Management System (LMS) project, implementing features for managing courses, student profiles, and interactive learning content.",
        tools: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Bootstrap', 'API Integration', 'Axios'],
        role: 'Front End Engineer',
        code: '',
        demo: '',
        image: '', // Add image path here
    },
    {
        id: 3,
        name: 'Chatroom Application',
        description: "Developed a feature-rich chatroom application with a user interface similar to WhatsApp. Users can create and join private and public rooms with password protection. Real-time message updates are handled via WebSockets, allowing for seamless communication. The application includes support for emojis, an admin panel for managing rooms and users, and advanced message features like replying to specific messages. Implemented using Ruby on Rails with MySQL, WebSockets, and the Devise gem for authentication.",
        tools: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Ruby', 'Ruby on Rails', 'MySQL', 'Devise', 'WebSockets'],
        role: 'Full Stack Software Engineer',
        code: '',
        demo: '',
        image: '', // Add image path here
    },
    {
        id: 4,
        name: 'Complete Blogging Application',
        description: "Developed a complete blogging platform, including user authentication, content creation, and social features like following users and messaging others. Integrated real-time messaging functionality using Websockets.",
        tools: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind CSS', 'Ruby', 'Ruby on Rails', 'MySQL', 'Websockets'],
        role: 'Full Stack Software Engineer',
        code: '',
        demo: '',
        image: '', // Add image path here
    },
    {
        id: 5,
        name: 'Promptopia',
        description: "Built a tool to search and find prompts for AI bots to generate better responses. Added features like hashtags, search functionality, and Google OAuth for authentication.",
        tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'MongoDB', 'REST APIs', 'Authentication'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: '', // Add image path here
    },
    {
        id: 6,
        name: 'AI Powered Financial App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 7,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 8,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 9,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];
