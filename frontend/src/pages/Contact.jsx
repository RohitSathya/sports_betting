import React from 'react';

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">If you have any questions or need support, please reach out to us.</p>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Your Name:</label>
          <input type="text" className="input w-full" placeholder="Enter your name" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Your Email:</label>
          <input type="email" className="input w-full" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Your Message:</label>
          <textarea className="input w-full" placeholder="Enter your message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
