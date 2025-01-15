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
                                Built an in-house stock management system to track inventory,
                                notify users of low stock, and integrate with Sage for delivery
                                updates, supporting 50+ IT helpdesk staff.
                            </li>
                            <li>
                                Optimized the staff onboarding portal by improving database
                                queries, reducing backend request/response time by 45%. This
                                benefited the human resources department by making it faster to
                                add new staff to the system.
                            </li>
                            <li>
                                Developed a drug prescribing assistant for the pharmaceutical
                                department, accurately calculating dosages for 3,000+ patients
                                based on key health metrics.
                            </li>
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
                                Led the migration of intranet applications and tools across servers, ensuring location consistency and availability. This directly impacted over 1,000+ hospital staff by enhancing system reliability and accessibility.
                            </li>
                            <li>
                                Designed a digital patient admission form using React and C#, reducing data collection time by 40% and eliminating 10,000+ paper forms annually.

                            </li>
                            <li>
                                Developed a medication ordering system, enabling nurses to place orders with the pharmaceutical department, reducing drug administration time by 30% and enhancing overall efficiency.

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
