import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: "",
    });
    const [showModal, setShowModal] = useState(false); // Modal visibility state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: `${formData.name} ${formData.surname}`,
                    from_email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(
                () => {
                    setShowModal(true); 
                },
                (error) => {
                    alert("Failed to send the message. Please try again.");
                    console.error(error);
                }
            );
    };

    const handleCloseModal = () => {
        window.location.reload(); 
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

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg text-center">
                        <h2 className="text-2xl font-bold">Success!</h2>
                        <p>Your message has been sent successfully.</p>
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 bg-black text-white px-6 py-2 rounded-lg"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
