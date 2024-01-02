import React from "react";

const Contact = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <section id="contact" className="p-6 bg-gray-100 ">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">Have any questions or feedback? Reach out to us!</p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="border rounded-md px-3 py-2 w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
