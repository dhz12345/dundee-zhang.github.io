import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const HeaderAnimate = {
    offscreen: {
        y: 20,
        opacity: 0.5,
        scale: 0.9,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.5,
        },
    },
};

export default function Contact() {
    const [state, handleSubmit] = useForm("mpwalqqy");
    if (state.succeeded) {
        return (
            <div>
                <h2>Contact Me</h2>
                <p className="message-return">Message Sent!</p>
            </div>
        );
    }

    if (state.errors) {
        return (
            <div>
                <h2>Contact Me</h2>
                <p className="message-return">Message Failed to Send</p>
            </div>
        );
    }

    if (state.submitting) {
        return (
            <div>
                <h2>Contact Me</h2>
                <p className="message-return">Sending...</p>
            </div>
        );
    }

    return (
        <div className="content-container-center" id="contactform">
            <div className="contact-form-container">
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 0.9 }}
                    variants={HeaderAnimate}
                >
                    <h2>Contact Me</h2>
                </motion.div>

                <form
                    id="contact-form"
                    className="contact-form"
                    onSubmit={handleSubmit}
                    method="POST"
                >
                    <motion.div
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ amount: 0.9 }}
                        variants={HeaderAnimate}
                    >
                        <p className="contact-card-text">Name</p>
                        <input
                            className="contact-input-box"
                            placeholder="Tim Apple"
                            type="text"
                            name="name"
                            required={true}
                        />
                    </motion.div>

                    <motion.div
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ amount: 0.9 }}
                        variants={HeaderAnimate}
                    >
                        <p className="contact-card-text">Email</p>
                        <input
                            className="contact-input-box"
                            placeholder="timapple@domain.ca"
                            type="email"
                            name="email"
                            required={true}
                        />
                    </motion.div>

                    <motion.div
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ amount: 0.9 }}
                        variants={HeaderAnimate}
                    >
                        <p className="contact-card-text">Message</p>
                        <textarea
                            className="contact-input-field"
                            maxLength={500}
                            placeholder="Message (Max 500 characters)"
                            name="message"
                            required={true}
                        />
                    </motion.div>

                    <motion.div
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ amount: 0.9 }}
                        variants={HeaderAnimate}
                    >
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button
                            type="submit"
                            className="contact-button"
                            disabled={state.submitting}
                        >
                            <i className="fa-regular fa-paper-plane send-button-icon"></i>
                            Send Message
                        </button>
                    </motion.div>
                </form>
            </div>
        </div>
    );
}
