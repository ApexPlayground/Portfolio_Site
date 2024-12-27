import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_dkfh1xj",
                "template_5apwjbm",
                {
                    from_name: `${formData.name} ${formData.surname}`,
                    from_email: formData.email,
                    message: formData.message,
                },
                "PdkhQkLc05pozyYj7"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                },
                (error) => {
                    alert("Failed to send the message. Please try again.");
                    console.error(error);
                }
            );
    };

    return (
        <div id="Contact" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8">
            <h1 className="text-center text-5xl font-light text-black">Get In Touch</h1>

            <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-x"
            >
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-200 focus:ring-2 focus:ring-black"
                        required
                    />
                    <input
                        type="text"
                        name="surname"
                        placeholder="Your Surname"
                        value={formData.surname}
                        onChange={handleChange}
                        className="rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-200 focus:ring-2 focus:ring-black"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-200 focus:ring-2 focus:ring-black"
                        required
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="h-32 w-full resize-none rounded-lg border-2 border-black px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-gray-200 focus:ring-2 focus:ring-black"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="rounded-lg border-2 border-black bg-black text-white px-6 py-3 font-semibold transition-all duration-200 hover:bg-gray-900"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
