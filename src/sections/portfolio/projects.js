import aloftBlog from "../../images/aloftBlog.png";
import cq from "../../images/cq.png";
import psc from "../../images/psc.png";
import pscblog from "../../images/pscblog.png";
import meancms from "../../images/meancms.png";
import ZipTask from "../../images/zipTask.png";
import Icon from "../../components/icon";



///////////////////////////////////
//TODO Add alt text to images - all
//update links to all projects

const projects = [
    {
        name: 'Progressive Web Application',
        role: 'goAloft: A Resource for Sailors',
        desc: 'Developed PWA responsively using modern web development capabilities to deliver an app-like user experience, based on Google\'s PWA training resources.',
        imageUrl: aloftBlog,
        icons: [
            {
                icon: 'html5',
                brand: true
            },
            {
                icon: 'css3',
                brand: true,
            },
            {
                icon: 'sass',
                brand: true,
            },
            {
                icon: 'bootstrap',
                brand: true,
            },
            {
                icon: 'js-square',
                brand: true,
            }
        ]
    },
    {
        name: 'MEAN / Angular / MongoDB',
        role: 'WYSIWYG Blog',
        imageUrl: meancms,
        desc: 'I am working to update my portfolio.  I need to compile my angular code and upload to my server.  In the meantime, feel free to view my pdf presentation.',
        icons: [
            {
                icon: 'html5',
                brand: true
            },
            {
                icon: 'css3',
                brand: true,
            },
            {
                icon: 'sass',
                brand: true,
            },
            {
                icon: 'bootstrap',
                brand: true,
            },
            {
                icon: 'js-square',
                brand: true,
            },
            {
                icon: 'angular',
                brand: true,
            },
            {
                icon: 'node-js',
                brand: true,
            }
        ]

    },
    {
        name: 'Small Business Website',
        role: 'CQ Electrical',
        desc: 'I was given the opportunity to build this website from the ground up, to include design, image selection, and content writing.  Completed midway through graduate program.',
        imageUrl: cq,
        icons: [
            {
                icon: 'html5',
                brand: true
            },
            {
                icon: 'css3',
                brand: true,
            },
            {
                icon: 'sass',
                brand: true,
            },
            {
                icon: 'bootstrap',
                brand: true,
            },
            {
                icon: 'js-square',
                brand: true,
            },
            {
                icon: 'php',
                brand: true,
            },
            ,
            {
                icon: 'database'
            }
        ]
    },
    {
        name: 'Android / Java',
        role: 'zipTask',
        imageUrl: ZipTask,
        desc: 'What to say about this project, but "wow, what a ride!\" I will be uploading my code to GitHub.  Stay tuned for video presentation upload to capture a peek of the final product!',
        icons: [

            {
                icon: 'android',
                brand: true,
            },
            {
                icon: 'java',
                brand: true,
            },
            {
                icon: 'database'
            }
        ]
    },
    {
        name: 'Responsive Web Development',
        role: 'Portland Schooner Company',
        desc: 'Assignment was to select an existing website and develop it responsively.',
        imageUrl: psc,
        icons: [
            {
                icon: 'html5',
                brand: true
            },
            {
                icon: 'css3',
                brand: true,
            },
            {
                icon: 'sass',
                brand: true,
            },
            {
                icon: 'bootstrap',
                brand: true,
            },
            {
                icon: 'js-square',
                brand: true,
            }
        ],
        // twitterUrl: 'https://littleapple27.github.io/psc/',
        // linkedinUrl: '#',
    },
    {
        name: 'LAMP / CRUD / PHP / mySQL',
        role: 'Content Management System',
        desc: 'Create, read, update, delete functionality with admin/user login screen and search capabilities.  Able to create user profiles and set admin flag.',
        imageUrl: pscblog,
        icons: [
            {
                icon: 'html5',
                brand: true
            },
            {
                icon: 'css3',
                brand: true,
            },
            {
                icon: 'sass',
                brand: true,
            },
            {
                icon: 'bootstrap',
                brand: true,
            },
            {
                icon: 'js-square',
                brand: true,
            },
            {
                icon: 'php',
                brand: true,
            },
            {
                icon: 'database'
            },
        ],
        // twitterUrl: 'https://littleapple27.github.io/psc/',
        // linkedinUrl: '#',
    },
    // More people...
]

let Projects = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Other projects</h2>
                        <p className="text-xl text-gray-500">
                            A sampling of my work from over the years...
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                    >
                        {projects.map((project) => (
                            <li key={project?.name}>
                                <div className="space-y-4">
                                    <div className="aspect-w-3 aspect-h-2 h-75 w-75">
                                        <img className="object-cover shadow-lg rounded-lg" src={project?.imageUrl} alt="" />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="leading-6 font-medium space-y-1">
                                            <h3 className="uppercase text-sm text-indigo-700">{project?.name}</h3>
                                            <p className="text-xl font-semibold text-gray-900 mb-3">{project?.role}</p>
                                        </div>
                                        <div className="text-md font-light space-y-3">
                                            <p className="text-gray-600">{project?.desc}</p>
                                        </div>
                                        <div className="flex mt-15">
                                            {project?.icons?.map((icon) => (
                                                <Icon key={icon?.icon} size={'lg'} {...icon} classNames={'text-indigo-500'} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}


export default Projects;