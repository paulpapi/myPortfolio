export default function Contact() {
  const contacts = [
    { icon: "fas fa-map-marker-alt", title: "Address", value: "4 kilo, Addis Ababa, Ethiopia" },
    { icon: "fas fa-phone", title: "Phone", value: "+251 902 149 507" },
    { icon: "fas fa-envelope", title: "Email", value: "paulpapi94@gmail.com" },
  ];

  const links = [
    { icon: "fab fa-github", title: "GitHub", url: "https://github.com/paulpapi" },
    { icon: "fab fa-linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/pawlos-addisu-741596368/" },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-gray-100 mb-12 relative">
          Get In Touch
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary mt-2 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contacts.map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <i className={`${item.icon} text-primary text-2xl w-8`}></i>
                <div>
                  <h3 className="text-secondary dark:text-gray-100 font-semibold">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg transition-transform transform hover:translate-x-2"
              >
                <i className={`${link.icon} text-primary text-xl`}></i>
                <span className="text-secondary dark:text-gray-100 font-semibold">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}