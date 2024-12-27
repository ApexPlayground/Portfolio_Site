const Experience = () => {
    return (
        <div
            id="Experience"
            className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8 md:p-20 lg:p-36"
        >
            <h1 className="text-center text-5xl font-light">Experience</h1>

            <div className="flex flex-col gap-8 md:flex-row md:gap-10">
                <div className="flex-1">
                    <div className="relative space-y-1 border-l-2 p-6 md:p-8 text-left">
                        <h3 className="text-xl font-semibold md:text-2xl">Website Developer & Admin</h3>
                        <p className="font-light text-lg text-gray-600">The Potter&apos;s House</p>
                        <p className="text-sm text-gray-600">August 2024 - Present</p>
                        <p className="text-sm text-gray-600">
                            As a volunteer, I built and managed the website for The Potter&apos;s House Church, ensuring a smooth user experience and ongoing updates. I also integrated Stripe API to handle online donations, enabling secure and easy contributions for the church community. This project improved the church&apos;s digital presence and simplified the donation process.
                        </p>
                        <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-black"></span>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="relative space-y-1 border-l-2 p-6 md:p-8 text-left">
                        <h3 className="text-xl font-semibold md:text-2xl">Software Engineer Intern</h3>
                        <p className="font-light text-lg text-gray-600">Becon Hospital</p>
                        <p className="text-sm text-gray-600">June 2023 - September 2024</p>
                        <p className="text-sm text-gray-600">
                            I developed and optimized several systems to enhance hospital operations. This includes a medication ordering system that incorporated testing with MSTest and deployment through CI/CD pipelines, a digital patient admission form with ASP.NET, and an internal drug prescribing app to reduce errors and improve patient care. I also improved the HR portal by cutting down the processing time by 50%, and created a stock management app to enhance inventory tracking and reduce overstock. Additionally, I led a critical server migration, ensuring zero downtime and seamless operations across teams.
                        </p>
                        <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-black"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
