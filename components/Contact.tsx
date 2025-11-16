
import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
    <section id="contact" className="py-20 md:py-32 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Let's Build Together</h2>
          <p className="text-lg text-gray-400 mt-2">Have a project in mind? We'd love to hear about it.</p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>

        <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
                 <div className="text-center p-8 bg-green-900/50 border border-green-500 rounded-lg">
                    <h3 className="text-2xl font-semibold text-white">Thank You!</h3>
                    <p className="text-gray-300 mt-2">Your message has been sent. We will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-gray-600 text-white p-3 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-gray-600 text-white p-3 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            rows={5}
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b-2 border-gray-600 text-white p-3 focus:outline-none focus:border-amber-400 transition-colors"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-amber-500 text-black font-bold py-3 px-12 rounded-full hover:bg-amber-400 transition-colors text-lg">
                            Send Message
                        </button>
                    </div>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};
