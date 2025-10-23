// src/components/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Contact</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Have a project in mind or just want to say hi? Let's connect!
        </p>
        <a
          href="mailto:yourname@example.com"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Send a Message
        </a>
      </div>
    </section>
  );
};

export default Contact;
