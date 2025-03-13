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
                        <h3 className="text-xl font-semibold md:text-2xl">
                            Software Engineer Intern
                        </h3>
                        <p className="font-light text-lg text-gray-600">
                            Beacon Hospital
                        </p>
                        <p className="text-sm text-gray-600"> June 2024 - Sep 2024</p>
                        <ul className="text-sm text-gray-600 list-disc ml-5">
                            <li>
                                Designed and deployed RESTful APIs using Java Spring Boot, enabling seamless integration with hospital
                                systems.
                            </li>
                            <li>
                                Implemented Spring Security for authentication and role-based access control, enhancing application
                                security.
                            </li>
                            <li>
                                Deployed applications on AWS EC2 and used AWS S3 for storing photos and videos in the applications.

                            </li>
                            <li>
                                Developed an in-house drug prescribing assistant, automating dosage calculations for 3,000+ patients and
                                enhancing pharmaceutical operations.
                            </li>
                            <li>
                                Optimized MySQL queries, reducing backend request/response time by 45%, enabling faster HR
                                onboarding.

                            </li>
                            <li>
                                Developed an in-house drug prescribing assistant, automating dosage calculations for 3,000+ patients and
                                enhancing pharmaceutical operations.
                            </li>

                            <li>Collaborated with multiple departments to gather software requirements and implement tailored software
                                solutions.</li>
                        </ul>

                        <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-black"></span>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="relative space-y-1 border-l-2 p-6 md:p-8 text-left">
                        <h3 className="text-xl font-semibold md:text-2xl">
                            Software Engineer Intern
                        </h3>
                        <p className="font-light text-lg text-gray-600">Beacon Hospital</p>
                        <p className="text-sm text-gray-600">  Feb 2023 - Sep 2023</p>
                        <ul className="text-sm text-gray-600 list-disc ml-5">
                            <li>
                                Built a digital patient admission form using React and ASP.NET, reducing data collection time by 40%
                                meeting the hospital’s goal of eliminating 10,000+ paper forms annually.
                            </li>
                            <li>
                                Developed a medication ordering system, simplifying the nurse-to-pharmacy requests and reducing drug
                                administration time by 30%.

                            </li>
                            <li>
                                Led the migration of hospital intranet applications across servers, improving system availability for 1,000+
                                staff.
                            </li>
                            <li>
                                Conducted software testing and debugging to ensure application reliability and functionality.

                            </li>

                        </ul>

                        <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-black"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
