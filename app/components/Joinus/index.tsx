"use client"
import React, { useRef } from 'react';
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { PhoneIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (form.current) {
            emailjs.sendForm(
                'service_lkn2f29',  // Replace with your EmailJS service ID
                'template_5odk8qm',  // Replace with your EmailJS template ID
                form.current,
                'DlwAi0HkPZnWc2qIt'    // Replace with your EmailJS public key (user_id)
            )
            .then((result) => {
                console.log(result.text);
                alert('Message successfully sent!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            });
        }
    };
    const services = [
        "Aluminium technicians", "Glass technicians", "Pop technicians",
        "AC technicians", "Signage technicians", "Furnitures", 
        "Carpenters", "Tilers", "Plumbers", "Painters", "Welders", 
        "Bricklayers", "Electricians", "Interior Designer", 
        "General home cleaners", "Project Managers"
    ];

    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 my-32" id="contactus-section">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                <div className="text-center">
                    <h3 className="text-blue-600 text-lg font-normal tracking-widest">CONTACT US</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">Get in Touch<br />with D5</h2>
                    <p className="text-gray-700 text-base font-normal">We are here to help! Reach out to us for any inquiries or services you need.</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <form ref={form} onSubmit={sendEmail} className="space-y-4 mx-5">
                        <input type="text" name="user_name" className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name" required />
                        <input type="email" name="user_email" className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your email" required />
                        <select name="user_service" className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                            ))}
                        </select>
                        <textarea name="message" className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={4} placeholder="Your message" required></textarea>
                        <button type="submit" className="w-full py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <Link href="tel:+2349125319416" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                    <PhoneIcon className="h-6 w-6" />
                        <span>Customer Care: +2349125319416</span>
                    </Link>
                    <Link href="tel:+2349132601857" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                    <PhoneIcon className="h-6 w-6" />
                        <span>Complaints: +2349132601857</span>
                    </Link>
                    <Link href="https://wa.link/tjwksq" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-black transition duration-300">
                        <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
                        <span>WhatsApp Us</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
