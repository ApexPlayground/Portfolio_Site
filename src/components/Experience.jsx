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
                        <ul className="text-sm text-gray-600 list-disc ml-5">
                            <li>Developed and managed the website for The Potter&apos;s House Church, ensuring a smooth user experience and providing regular updates.</li>
                            <li>Integrated Stripe API to facilitate secure and efficient online donations, simplifying the contribution process for the church community.</li>

                        </ul>

                        <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-black"></span>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="relative space-y-1 border-l-2 p-6 md:p-8 text-left">
                        <h3 className="text-xl font-semibold md:text-2xl">Software Engineer Intern</h3>
                        <p className="font-light text-lg text-gray-600">Becon Hospital</p>
                        <p className="text-sm text-gray-600">June 2023 - September 2024</p>
                        <ul className="text-sm text-gray-600 list-disc ml-5">
                            <li>Developed a medication ordering system that enables nurses to place orders with the pharmaceutical department for patients, which improved drug administration speed.</li>
                            <li>Developed a multipage digital patient admission form, which helped the hospital move towards their goal of a paperless admission process and improving data collection.</li>
                            <li>Developed a drug prescribing calculator for the pharmaceutical department, helping calculate the correct medication dosage based on patient gender, age, and other factors.</li>
                            <li>Developed a stock management system to track inventory levels, notify when stock is low, and integrated it with Sage to monitor delivery status when new orders are made.</li>
                            <li>Optimized the HR new staff onboarding portal by reducing backend request/response time, enhancing system performance.</li>
                        </ul>

                        <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-black"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
