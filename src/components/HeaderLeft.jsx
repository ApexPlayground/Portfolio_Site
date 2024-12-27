import { BiBriefcase, BiCode, BiHome, BiPhone, BiRightArrowAlt } from "react-icons/bi";

const HeaderLeft = () => {
    return (
        <div className="md:flex-[1]">
            <div className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-black text-white">
                <ul className="flex flex-col gap-10">
                    {["Home", "Experience", "Project", "Contact"].map((item) => (
                        <li
                            key={item}
                            className="flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl"
                        >
                            <BiRightArrowAlt className="text-4xl -translate-x-5 opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                            <a href={`#${item}`} className="transition-all duration-200 hover:translate-x-3"> {item}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="fixed left-0 right-0 top-0 z-10 flex justify-evenly bg-black p-5 text-white md:hidden">
                <a href="#Home" className="flex flex-col items-center justify-center"> <BiHome className="text-2xl" /><span className="text-xs">Home</span></a>
                <a href="#Experience" className="flex flex-col items-center justify-center"> <BiBriefcase className="text-2xl" /><span className="text-xs">Experience</span></a>
                <a href="#Project" className="flex flex-col items-center justify-center"> <BiCode className="text-2xl" /><span className="text-xs">Project</span></a>
                <a href="#Contact" className="flex flex-col items-center justify-center"> <BiPhone className="text-2xl" /><span className="text-xs">Contact</span></a>


            </div>
        </div>
    );
};

export default HeaderLeft;
