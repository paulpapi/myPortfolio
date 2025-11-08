const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-6">
          Contact
        </h2>
        <p className="text-base md:text-lg text-gray-700 font-medium mb-8 leading-relaxed">
          Have a project in mind or just want to say hi? Let's connect!
        </p>
        <a
          href="mailto:yourname@example.com"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wide hover:bg-gray-700 transform hover:-translate-y-1 transition"
        >
          Send a Message
        </a>
      </div>
    </section>
  );
};

export default Contact;
