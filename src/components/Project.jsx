
const Project = () => {
    return (
        <div id="Project" className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32">
            <h1 className="text-center text-5xl font-light">Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-black rounded-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl font-semibold">DocSync</h1>
                    <h3 className="text-xl ">NextJS</h3>
                    <p className="text-sm ">In progress</p>
                </div>


                <a className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-black rounded-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl font-semibold">Apex Healthcare</h1>
                    <h3 className="text-xl ">Python, Django, JavaScript, MySQL</h3>
                    <p className="text-sm ">Developed a full-stack web application that predicts potential diseases with 95% accuracy using machine learning based on user-reported symptoms. The platform features appointment booking and a doctor&apos;s portal to notify doctors of diagnoses and scheduled appointments, improving patient care.</p>
                </a>


                <a
                    href="https://github.com/ApexPlayground/Shell_Lite"
                    className="block text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-black rounded-lg hover:bg-black hover:text-white"
                >
                    <h1 className="text-3xl font-semibold">Shell Lite</h1>
                    <h3 className="text-xl">Go</h3>
                    <p className="text-sm">
                        A lightweight shell application that supports basic shell commands, such as ls, cd, and pwd. The platform also features a history command, which logs the user&apos;s command history and allows them to access previous commands.
                    </p>
                </a>


                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-black rounded-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl font-semibold">SummarizeMe</h1>
                    <h3 className="text-xl ">React, Tailwind, Open API</h3>
                    <p className="text-sm ">A web application that uses OpenAI GPT-4 to summarize articles from various sources using URL links, delivering clear and understandable summaries. Designed to save time and keep users informed, the platform features a simple user-friendly interface.</p>
                </div>

            </div>
        </div >
    )
}

export default Project