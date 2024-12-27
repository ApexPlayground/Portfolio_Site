import { BiBriefcase, BiCode, BiHome, BiPhone, BiRightArrowAlt, BiDownload } from "react-icons/bi";

const HeaderLeft = () => {
    return (
        <div className="md:flex-[1]">
            {/* Sidebar for desktop */}
            <div className="min-h-screen top-0 hidden md:sticky md:flex flex-col items-center justify-center bg-black text-white">
                <ul className="flex flex-col gap-10 mb-8">
                    {["Home", "Experience", "Project", "Contact"].map((item) => (
                        <li
                            key={item}
                            className="flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-2xl"
                        >
                            <BiRightArrowAlt className="text-4xl -translate-x-5 opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                            <a href={`#${item}`} className="transition-all duration-200 hover:translate-x-3"> {item}</a>
                        </li>
                    ))}

                    {/* Button to download CV */}
                    <li className="flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-2xl">
                        <a
                            href="/holder.pdf"
                            className="flex items-center justify-center bg-orange-600 text-white py-3 px-6 rounded-full hover:bg-orange-500 transition-all duration-200"
                            download
                        >
                            <BiDownload className="text-2xl mr-2" />
                            Download CV
                        </a>
                    </li>

                </ul>
            </div>

            {/* Mobile navigation */}
            <div className="fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-black p-5 text-white md:hidden">
                <a href="#Home" className="flex flex-col items-center justify-center"> <BiHome className="text-xl" /><span className="text-xs">Home</span></a>
                <a href="#Experience" className="flex flex-col items-center justify-center"> <BiBriefcase className="text-xl" /><span className="text-xs">Experience</span></a>
                <a href="#Project" className="flex flex-col items-center justify-center"> <BiCode className="text-xl" /><span className="text-xs">Project</span></a>
                <a href="#Contact" className="flex flex-col items-center justify-center"> <BiPhone className="text-xl" /><span className="text-xs">Contact</span></a>
            </div>

            {/* Mobile CV download icon */}
            <div className="fixed bottom-5 right-5 md:hidden">
                <a
                    href="/holder.pdf"
                    className="flex items-center justify-center bg-orange-400 text-black p-3 rounded-full hover:bg-orange-600 transition-all duration-200"
                    download
                >
                    <BiDownload className="text-2xl" />
                </a>
            </div>

        </div>
    );
};

export default HeaderLeft;
