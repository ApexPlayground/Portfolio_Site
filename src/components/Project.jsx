
const Project = () => {
    return (
        <div id="Project" className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32">
            <h1 className="text-center text-5xl font-light">Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-black rounded-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl font-semibold">DocSync</h1>
                    <h3 className="text-xl ">NextJS</h3>
                    <p className="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fugiat quo veritatis! Est eius quidem, quam, culpa pariatur ducimus sapiente odio atque fugit quo tempore officiis minus odit repellendus molestias.</p>
                </div>


                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-black rounded-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl font-semibold">Apex Healthcare</h1>
                    <h3 className="text-xl ">Django, JavaScript, MySQL</h3>
                    <p className="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fugiat quo veritatis! Est eius quidem, quam, culpa pariatur ducimus sapiente odio atque fugit quo tempore officiis minus odit repellendus molestias.</p>
                </div>

                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-black rounded-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl font-semibold">Shell Lite</h1>
                    <h3 className="text-xl ">Go</h3>
                    <p className="text-sm ">Shell Lite is a basic command-line shell written in Go that allows users to execute commands interactively.</p>
                </div>

                <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-black rounded-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl font-semibold">SummarizeMe</h1>
                    <h3 className="text-xl ">React, Tailwind, GPT4 API</h3>
                    <p className="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fugiat quo veritatis! Est eius quidem, quam, culpa pariatur ducimus sapiente odio atque fugit quo tempore officiis minus odit repellendus molestias.</p>
                </div>



            </div>
        </div>
    )
}

export default Project