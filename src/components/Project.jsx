import { Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const ProjectCard = ({ title, technologies, description, githubLink, websiteLink }) => {
    return (
        <div className="relative text-left space-y-2 border-2 px-8 py-10 border-black rounded-lg group hover:bg-black hover:text-white">
            <div className="absolute top-4 right-4 flex gap-3">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
                    >
                        <FaGithub size={20} />
                    </a>
                )}
                {websiteLink && (
                    <a
                        href={websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
                    >
                        <Globe size={20} />
                    </a>
                )}
            </div>
            <h1 className="text-3xl font-semibold">{title}</h1>
            <h3 className="text-xl">{technologies}</h3>
            <p className="text-sm">{description}</p>
        </div>
    );
};

const Project = () => {
    const projects = [
        {
            title: "Apex Healthcare",
            technologies: "Python, Django, JavaScript, MySQL",
            description: "Developed a full-stack web application that predicts potential diseases with 95% accuracy using machine learning based on user-reported symptoms. The platform features appointment booking and a doctor's portal to notify doctors of diagnoses and scheduled appointments, improving patient care.",
            githubLink: "https://github.com/ApexPlayground/Apex_Healthcare",

        },
        {
            title: "HeyThere",
            technologies: "React, Express, Node.js, WebSocket, MongoDB",
            description: "A real-time chat app built with Node.js, Socket.IO, React, and Zustand, using JWT for user authentication and MongoDB for data storage. Features include online/offline user status, text/image messaging, and persistent WebSocket connections.",
            githubLink: "https://github.com/ApexPlayground/HeyThere",
            websiteLink: "https://heythere-db2c.onrender.com/"
        },
        {
            title: "Shell Lite",
            technologies: "Go",
            description: "A lightweight shell application that supports basic shell commands, such as ls, cd, and pwd. The platform also features a history command, which logs the user's command history and allows them to access previous commands.",
            githubLink: "https://github.com/ApexPlayground/Shell_Lite"
        },
        {
            title: "ApexEditor",
            technologies: "Docker, javascript, flask",
            description: "A web-based IDE capable of running and compiling code, containerized with Docker.",
            githubLink: "https://github.com/ApexPlayground/Web_Ide"
        },
        {
            title: "SummarizeMe",
            technologies: "React",
            description: "A web application that uses OpenAI GPT-4 to summarize articles from various sources using URL links, delivering clear and understandable summaries. Designed to save time and keep users informed, the platform features a simple user-friendly interface.",
            githubLink: "https://github.com/ApexPlayground/summarizeme",
            websiteLink: "https://summarizeme.netlify.app/"
        }
    ];

    return (
        <div id="Project" className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32">
            <h1 className="text-center text-5xl font-light">Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        technologies={project.technologies}
                        description={project.description}
                        githubLink={project.githubLink}
                        websiteLink={project.websiteLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;