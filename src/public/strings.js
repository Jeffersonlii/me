// eslint-disable-next-line import/no-anonymous-default-export
export default {
    paragraph: [
        `Hi! I am Jefferson Li 🌮.
        <br/>
        <br/>
        I am a Software Engineer previously at <b><i>Amazon</i></b> and <b><i>Fidelity</i></b>,<br/> 
        where I utilized various frontend and backend techonologies to impliment systems with a focus on <b>scalability</b> and <b>ease of use</b>.<br/><br/>
        
        I studied at the 
            <a href='https://www.utoronto.ca' target='_blank'><b><i> University of Toronto </i></b></a>(2023)
        where I graduated with a specialist in <b>software engineering</b> and minor in <b>statistics</b>.<br/><br/>

        In my free time I love to hike and backpack, as well as learning about and implimenting machine learning techniques.<br/>`
    ],
    skills: {
        Languages: ['JS/Typescript', 'HTML/CSS', 'Python', 'Java'],
        Libraries: ['Angular', 'React', 'NodeJs', 'RxJS', 'Redux', 'NumPy', 'Tensorflow'],
        Tools: ['Git', 'Jira', 'Github Actions', 'Figma']
    },
    mlProjects: {
        Edgeracer: {
            desc: 'Training an AI agent to complete a race course',
            link: '',
            time: 'August 2023',
            logo: '/projects-and-work/edgeracer/edgeracer.gif',

            modal_details: {
                What: [
                    "Developed a driving simulator utilizing PixiJS",
                    'Implemented an AI learning system using <i>Deep Q Learning techniques </i>(reinforcement learning), using TensorFlow.JS',
                    'Designed and implemented the <i>loss function and back-propagation</i> within the Neural Networks',
                    'Optimized hyper-parameters and the reward function resulting in the agent achieving <i>convergence to a successful strategy within 300 episodes</i>'
                ],
                Tech: [
                    'HTML/TS/CSS, Tensorflow.JS, PixiJS',
                ],
                Links: [
                    "<a href='https://jeffersonlii.github.io/Edgeracer/' target='_blank'><b>App</b></a>",
                    "<a href='https://github.com/Jeffersonlii/Edgeracer' target='_blank'><b>Repo</b></a>",
                ],
            },
            images: [
                {
                    url: '/projects-and-work/edgeracer/edgeracer.gif',
                    desc: 'Demo',
                },
            ],
        },
        'LoL Genius': {
            desc: 'Predicting game match results with historical League of Legends Data',
            link: '',
            time: 'June 2021',
            logo: '',
            modal_details: {
                What: [
                    "Created a match results prediction tool using machine learning and the <i>Riot Games API</i>",
                    "Utilized a crawl algorithm to collect data of varied skill and champion selection",
                    "predict their match outcome with <i>73% accuracy</i>",
                    ""
                ],
                Tech: [
                    'React, Python (Flask, scikit-learn, pandas), Riot API',
                ],
                Links: [
                    "<a href='https://github.com/Jeffersonlii/LoLGenius' target='_blank'><b>Repo</b></a>",
                ],
            }
        },
    },
    projects: {
        Pathfinder: {
            desc: 'Easy to use visualizer for pathfinding algorithms',
            link: '',
            time: 'Febuary 2021',
            logo: '/logos/pathfinder.gif',

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
            time: 'Febuary 2021',
            logo: '/logos/cafe.png',

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
            time: 'January 2021',
            logo: '/logos/sportcred.png',
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
            time: 'January 2021',
            logo: '/logo.png',

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
            logo: '/logos/gold.png',
            time: 'November 2019',
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
            time: 'August 2019',
            logo: '/logos/wami.png',
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
        'Amazon': {
            logo: '/logos/amazon.png',
            desc: 'Software Development Engineer Intern',
            link: 'https://Amazon.com/',
            time: 'May 2022 - August 2022',
            modal_details: {
                Role: [
                    'To <i>Gather requirements, Design, and Develop</i> an Internal Tool in 12 weeks.',
                    'The internal tool tool aids Amazon employees in kickstarting the flywheel of an item when it has been out of stock for an extended period.'
                ],
                Achivements: [
                    'Demonstrated coach-ability by <i>acting on advice from manager</i> to simplify platform and engage with end-users',
                    'Showed commitment to customers by <i>organizing 4 end-user interviews</i> to understand customer values and pain-points',
                    'Exhibited adaptability by accommodating evolving requirements from end-users while consistently <i>surpassing all scheduled targets</i>.',
                    'Earned the only <i>intern recognition by upper management</i> during quarterly strategy meeting, and received a return offer'
                ],
                Tech: [
                    '(React, Figma, Amazon CI/CD Pipeline)',
                ],
            }
        },
        'Fidelity Investments': {
            logo: '/logos/fidelity.png',
            desc: 'Full-Stack Developer / Automation Intern',
            link: 'https://www.fidelity.ca/en/',
            time: 'September 2021 - April 2022',
            modal_details: {
                Role: [
                    'Fullstack developer, developing all aspects of Fidelity uniFide',
                    'Automation Engineer, developing automation processes and tools for internal employees',
                ],
                Achivements: [
                    'Utilized Angular to implement bug fixed and iterations on Fidelity UniFide',
                    'Proactively volunteered to join the automation team during understaffing',
                    'Designed and implemented conversion and reporting services using Java Spring Boot, <i>streamlining tasks for hundreds of internal Fidelity employees</i>.'
                ],
                Tech: [
                    '(Angular, Java Springboot)',
                ],
            }
        },
        'Temerity Analytics': {
            logo: '/logos/temerity.png',
            desc: 'Full-Stack Developer Intern',
            link: 'https://temerityanalytics.com/',
            time: 'January 2020 - August 2020',
            modal_details: {
                Role: [
                    'Fullstack developer, developing all aspects of Merln, our cloud-based marketing analysis software',
                ],
                Achivements: [
                    'Rearchetected the client-facing admin interface, which <i>significantly improved the overall usability and stability</i> of the software, and resulted in a final performance evaluation of ’Excellent’',
                    'Drove a unit testing effort, improving <i>API test coverage from 0% -> 40%, and speeding up some endpoints by more than 80%</i>',
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
        "Built using React with <a href='https://www.npmjs.com/package/react-draggable' target='_blank'><b>react-draggable</b></a> <br/>",
        "<a href='https://github.com/Jeffersonlii/psite-v3' target='_blank'><b>Source Code</b></a> <br/><br/><br>",
        `©${new Date().getFullYear()} Jefferson Li. All rights reserved.`,
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
    ],
};
