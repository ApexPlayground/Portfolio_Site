import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import image from '../assets/imgs/hero.png'
const Home = () => {
    return (
        <div id="Home" className="flex min-h-screen w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
                <img src={image} alt="profile image" className='w-[250px] sm:w-[300px] rounded-full' />
                <div className="space-y-1 sm:space-y-3">
                    <h1 className="text-2xl sm:text-4xl font-bold text-center">Hi, I&apos;m Divine Eboigbe</h1>
                    <p className="text-lg sm:text-xl text-center">I&apos;m a Software Engineer</p>
                </div>
                <div className='flex gap-3'>
                    <a href="https://github.com/ApexPlayground"><BiLogoGithub className=' h-10 w-10 cursor-pointer rounded-full border-2 border-transparent transition-all duration-200 hover:scale-110 hover:border-black hover:bg-white hover:text-black md:h-12 md:w-12 ' /></a>
                    <a href="https://www.linkedin.com/in/divine-eboigbe-a63483205/"><BiLogoLinkedin className=' h-10 w-10 cursor-pointer rounded-lg border-2 border-transparent transition-all duration-200 hover:scale-110 hover:border-black hover:bg-white hover:text-black md:h-12 md:w-12 ' /></a>



                </div>
            </div>
        </div>
    )
}

export default Home