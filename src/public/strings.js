// eslint-disable-next-line import/no-anonymous-default-export
export default {
    paragraph: [
        'Hi!, My name is Jefferson Li. <br><br>',
        'I am a <b>Full Stack Developer</b> specializing in Angular, with a focus on building scalable and responsive software ( try to break this site 😉 ). <br> <br> ',
        "Previously at <a href='https://temerityanalytics.com/' target='_blank'><b>Temerity Analytics</b></a>.<br>",
        'Currently pursuing a specialist in <b>Software Engineering</b> and a minor in <b>Statistics</b> at the ',
        "<a href='https://www.utoronto.ca' target='_blank'><b> University of Toronto </b></a>(2023)<br><br>",
        'I love going to the <b>gym</b>, <b>badminton</b>, and <b>photography</b>, I also love to create and bring <b>user friendly</b> and <b>responsive designs</b> to life!',
    ],
    qualifications: {
        'Technical Skills': {
            Web: {
                'HTML/CSS/JS':
                    'Created several sites using HTML/CSS/JS, including this one!',
                Angular:
                    'Worked with an Angular frontend during my time as a full-stack developer at Termerity Analytics',
                React:
                    'Learned independently using official documentation and developed this personal portfolio using React',
                'Django/Django REST framwork/Django ORM':
                    'Worked with the Django REST framework backend during my time as a full-stack developer at Termerity Analytics',
                Flask:
                    'Used Flask to create numerous REST APIs as well as server-side rendered web apps',
                'SQL/PostgreSQL/SQLite':
                    'Utilized PostgreSQL during my time as a full-stack developer at Termerity Analytics',
                RxJS:
                    'Experienced with writing involved asynchronous pipes using the RxJS library to handle backend data',
                'Redux/NgRx': `Used the Redux/NgRx architecture in numerous projects to handle local state.<br>Achieved optimal data fetching with the Action/Reducer/Effects architecture`,
            },
            General: {
                C: 'Achived 93% in C based programming course at UofT',
                'Python/NumPy': `4+ years of python writing numerous scripts<br>Developed numerous machine learning algorithms in school, used NumPy for matrix algebra`,
                'JS/Typescript':
                    '8 Month proffessional experience building numerous features using JS/TS during my time as at Termerity Analytics',
                Java: 'Built numerous android apps and REST apis using Java',
                GIT: `Used during my work as a fullstack developer, as well as all of my personal projects.<br>Profficient in resolving conflicts and researching solutions to complex issues regarding git`,
                Agile:
                    'Followed an Agile development process during my work at Termerity Analytics',
            },
            Testing: {
                'Jasmine/Karma':
                    'Used to test front end Angular code duing my time as a fullstack developer for Termerity Analytics ',
                Postman:
                    'Used to test back end APIs duing my time as a fullstack developer for Termerity Analytics',
                Swagger:
                    'Used to Document APIs duing my time as a fullstack developer for Termerity Analytics',
            },
            Tools: {
                'Windows/MacOS/Linux': '',
                'Android Studio': 'Used to create numerous Android apps',
                'Microsoft Office Suite':
                    'Profficient in Word, Excel, Powerpoint',
                Sourcetree: 'My prefered Git GUI',
                Jira: 'Collaborated using Jira for a 6 person group project',
            },
        },
        Education: {
            'University of Toronto': 'Class of 2023',
            'Software Engineering Specialist, Statistics Minor':
                'GPA: 3.82/4.0',
        },
        'Interests and Hobbies': [
            'Badminton',
            'Swimming',
            'Weight Training',
            "<a href='https://www.instagram.com/jeffersonlii/' target='_blank'><b>Photography</b></a>",
        ],
    },
    projects: {
        Pathfinder: {
            desc: 'Easy to use visualizer for pathfinding algorithms',
            link: '',
            time: '02/2021',
            modal_details: {
                What: [
                    "Visualize pathfinding algorithms such as Dijkstra's with customizable maps and waypoints ",
                    'Implemented using 0 libraries and vanilla JS to minimize overhead',
                ],
                Links: [
                    "<a href='https://jeffersonlii.github.io/Pathfinder/' target='_blank'><b>App</b></a>",
                    "<a href='https://github.com/Jeffersonlii/Pathfinder' target='_blank'><b>Repo</b></a>",
                ],
            },
            images: [
                {
                    url: '/projects-and-work/pathfinder/work.gif',
                    desc: 'Demo',
                },
            ],
        },
        TheCafe: {
            desc:
                'React Webapp that matches random users to rooms based on perferences',
            link: '',
            time: '02/2021',
            modal_details: {
                Goal: [
                    'To created an omegle like platform with a smart matching system',
                ],
                'My Tasks': [
                    'Utilized socket.io and PeerJs to implement video chatting, as well as screen sharing',
                    'Deployed using Docker, Docker Compose, and NGINX on a DigitalOcean VM',
                    'Used the Certbot container to set up an autorenewing certificate for HTTPS',
                ],
                Links: [
                    // "<a href='https://www.thecafe.ml' target='_blank'><b>App</b></a>",
                    "<a href='https://www.youtube.com/watch?v=vsuU0TGqF4k' target='_blank'><b>Video Showcase</b></a>",
                ],
            },
            images: [
                {
                    url: '/projects-and-work/cafe/1.png',
                    desc: 'Dashboard',
                },
                {
                    url: '/projects-and-work/cafe/2.PNG',
                    desc: 'Room',
                },
            ],
        },
        SportsCred: {
            desc: 'Large Angular web app for debating/betting on sports',
            link: '',
            time: '01/2021',
            modal_details: {
                Goal: [
                    'With a team of 6, to create a large platform for competitive debates and trivia on sports league related topics',
                ],
                'My Tasks': [
                    '<b>Main designer</b> and developer of the Angular based frontend',
                    'Linked up backend and frontend using Axios and RxJS observables',
                    'Utilized the redux action effect reducer architecture to manage application state',
                    'Implemented session-based authentification, as well as salting and hashing passwords',
                    'Used<b> media queries</b> to ensure a smooth experience on all platforms',
                ],
                Result: [
                    'Ranked as the best project in the class of 30 groups, received work offers from the client',
                ],
            },
            images: [
                {
                    url: '/projects-and-work/lilypad/debates.PNG',
                    desc: 'Debates Page',
                },
                {
                    url: '/projects-and-work/lilypad/login.PNG',
                    desc: 'Login Page',
                },
                {
                    url: '/projects-and-work/lilypad/myprofile.PNG',
                    desc: 'My Profile Page',
                },
                {
                    url: '/projects-and-work/lilypad/registration.PNG',
                    desc: 'Registration Page',
                },
            ],
        },
        'Personal Website': {
            desc: "You're looking at it!",
            link: '',
            time: '01/2021',
            modal_details: {
                Goal: [
                    'To develop an extendable and responsive website showcasing my achievements  and experiences',
                ],
                'My Tasks': [
                    "Rehauled my portfolio website using new technologies and frameworks I've learned during my 8-month work term as a full stack developer",
                    'Insured <b>high extensibility</b> by centralizing all strings in <b>strings.json</b>. This allows easy addition of new entries and internationalisation',
                ],
            },
            images: [
                {
                    url: '/projects-and-work/Personal-website/strings.PNG',
                    desc: 'strings.json',
                },
            ],
        },
        Gold: {
            desc: 'Android Shopping App',
            link: '',
            time: '11/2019',
            modal_details: {
                Goal: [
                    'To develop a shopping android app with a 3 person team for a software design class',
                    'To utilize <b>SOLID principles</b>, <b>design patterns</b>, and the <b>Scrum Methodology</b> during development.',
                ],
                'My Tasks': [
                    'Made use of <b>abstraction and interfaces</b> to design highly flexible and object-oriented codebase',
                    'Planned around <b>Model View Controller</b> to attain an organized architecture',
                    'Designed and implemented a visually pleasing design that received <b>direct praise</b> from the TA',
                    'Organized <b>Scrum meetings</b> 2 times per week to discuss progress',
                ],
                Result: [
                    'Advanced my skills as an Android developer',
                    'Scored a <b>100%</b> grade worth 40% of the final mark',
                ],
            },
            images: [
                {
                    url: '/projects-and-work/Gold/moe.PNG',
                    desc: 'TA comments after grading',
                },
                {
                    url: '/projects-and-work/Gold/login.jpg',
                    desc: 'Login and Cart Page',
                },
            ],
        },
        'Where Am I?': {
            desc: 'Location Sharing Web App',
            link: 'https://github.com/Jeffersonlii/Where-Am-I-',
            time: '08/2019',
            modal_details: {
                Goal: ['To allow instant location sharing via a link'],
                'My Tasks': [
                    'Used Python (flask) for backend, to update and retrieve user coordinates using a SQL database',
                    'Implemented unique link generation for every use instance',
                    'Used Ajax to pass coordinate data from Python to JS and vice versa',
                ],
            },
            images: [
                {
                    url: '/projects-and-work/whereami/1st.PNG',
                    desc: 'Shared link page',
                },
                {
                    url: '/projects-and-work/whereami/2nd.PNG',
                    desc: 'Map Page',
                },
            ],
        },
    },
    'work exp': {
        'Temerity Analytics': {
            desc: 'Full-Stack Developer Intern',
            link: 'https://temerityanalytics.com/',
            time: '01/2020 - 08/2020',
            modal_details: {
                Role: [
                    'Fullstack developer, developing all aspects of Merln, our cloud-based marketing analysis software',
                ],
                Achivements: [
                    'Rearchetected the client-facing admin interface, which significantly improved the overall usability and stability of the software, and resulted in a final performance evaluation of ’Excellent’',
                    'Drove a unit testing effort, getting API test coverage from 0% -> 40%, and speeding up some endpoints by more than 80%',
                ],
                Tech: [
                    '(Angular, Django ORM/ REST framework, RxJS, Redux, NgRx, npm, PostgreSQL)',
                ],
            },
            images: [
                {
                    url: '/projects-and-work/temerity/many.jpg',
                    desc: 'Recruiting Event at UTSC',
                },
                {
                    url: '/projects-and-work/temerity/eval.jpg',
                    desc: 'Final CO-OP Evaluation',
                },
            ],
        },
    },
    credits: [
        'Developed with 🌮 by Jefferson Li <br/><br/>',
        "Built using React with <a href='https://www.npmjs.com/package/react-draggable' target='_blank'><b>react-draggable</b></a><br/><br/>",
        'Best Viewed On Chrome<br/>',
        `©${new Date().getFullYear()} Jefferson Li. All rights reserved.`,
        "<br/><br/><a href='https://github.com/Jeffersonlii/psite-v3' target='_blank'><b>Source Code</b></a>",
    ],
    socials: [
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/jeffersonlii/',
            desc: 'See My Experience',
        },
        {
            name: 'Github',
            link: 'https://github.com/Jeffersonlii',
            desc: 'See My Projects',
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/jeffersonlii/',
            desc: 'See My Photography',
        },
    ],
};
