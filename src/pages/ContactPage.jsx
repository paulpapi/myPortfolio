import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with EmailJS, Formspree, or backend here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="min-h-screen py-24 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-slate-700 dark:text-white mb-6">
          Contact Me
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12">
          Have a project in mind or just want to say hi? I'd love to hear from you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 dark:text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 dark:text-white mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
