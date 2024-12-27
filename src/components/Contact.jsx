
const Contact = () => {
    return (
        <div id="Contact" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8">
            <h1 className="text-center text-5xl font-light text-black">Get In Touch</h1>

            <form className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-x ">
                <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" className="rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-200 focus:ring-2 focus:ring-black" />
                    <input type="text" placeholder="Your Surname" className="rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-200 focus:ring-2 focus:ring-black" />
                    <input type="email" placeholder="Your Email" className="rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-200 focus:ring-2 focus:ring-black" />

                </div>
                <textarea placeholder="Your Message" className="h-32 w-full resize-none rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-200 focus:ring-2 focus:ring-black"></textarea>
                <button className="rounded-lg border-2 border-black bg-black text-white px-6 py-3 font-semibold transition-all duration-200 hover:bg-gray-800">Send Message</button>
            </form>
        </div>
    )
}

export default Contact