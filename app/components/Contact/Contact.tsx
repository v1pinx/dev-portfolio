import { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (form.name === '' || form.email === '' || form.subject === '' || form.message === '') {
            toast.error('Please fill all the fields');
            return;
        }

        try {
            
            const response = await axios.post('https://api.sheetbest.com/sheets/6a9ccf0d-3e7d-4b1a-8084-16dfee1ac153', {
                Name: form.name,
                Email: form.email,
                Subject: form.subject,
                Message: form.message
            });

            toast.success('Message sent successfully!');

            setForm({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
        }
    };

    return (
        <section className='section contact' id='contact'>
            <h2 className="section__title text-cs" data-aos="fade-up">Contact Me</h2>
            <p className="section__subtitle" data-aos="fade-up">
                Let's <span>Talk</span>
            </p>

            <div className='contact__container' >
                <form className='contact__form' onSubmit={handleSubmit} data-aos="fade-right">
                    <div className='contact__input-1'>
                        <div className='contact__input'>
                            <label htmlFor="name">Your Good Name</label>
                            <input
                                type="text"
                                id="name"
                                className='contact__input-name'
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='contact__input'>
                            <label htmlFor="email">Your Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className='contact__input-email'
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='contact__input'>
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className='contact__input-subject'
                            value={form.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='contact__input'>
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            className='contact__input-message'
                            value={form.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className='contact__button'>
                        Send Message
                    </button>
                </form>

                <div className="contact__content" data-aos="fade-left" >
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>
                        <h3 className="contact__card-title">Address</h3>
                        <p className="contact__card-data">Moradabad, Uttar Pradesh(IN)</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser />
                        </span>
                        <h3 className="contact__card-title">Student</h3>
                        <p className="contact__card-data">LPU, Jalandhar, Punjab(IN)</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="contact__card-title">E-Mail</h3>
                        <p className="contact__card-data">vipin.officialbiz@gmail.com</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>
                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data">+91 9528570904</p>
                    </div>
                </div>
            </div>
            <Toaster />
        </section>
    );
}