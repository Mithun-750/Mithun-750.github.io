import React, { useRef, useState } from 'react';
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const service_id = import.meta.env.VITE_EMAIL_SERVICE_ID
        const templet_id = import.meta.env.VITE_EMAIL_TEMPLET_ID
        const public_key = import.meta.env.VITE_EMAIL_PUBLIC_KEY

        emailjs.sendForm(service_id, templet_id, form.current, public_key)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = import.meta.env.VITE_FIREBASE_URL;

        try {

            const res = async () => {
                try {
                    await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name,
                            email,
                            query,
                        }),
                    });
                } catch (error) {
                    console.error('Error submitting the form:', error);
                }
            };
            await res();

            sendEmail(e);


            alert('Your query has been submitted successfully!');

            setName('');
            setEmail('');
            setQuery('');
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className='contact-container' >
            <h2>Contact Me</h2>
            <form className='contact-form' ref={form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    name='from_name'
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={3}
                    maxLength={25}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name='from_email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Query"
                    name='query'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                    minLength={5}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
