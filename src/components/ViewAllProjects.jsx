import { Link } from 'react-router-dom';

const ViewAllProjects = () => {
  return (
    <section className="flex justify-center py-16 px-6 bg-white text-gray-900">
      <Link
        to="/projects"
        className="inline-block text-lg md:text-xl font-bold uppercase tracking-wide bg-gray-900 text-white py-4 px-10 rounded-full shadow-md hover:bg-gray-700 transform hover:-translate-y-1 transition"
      >
        View All Projects
      </Link>
    </section>
  );
};

export default ViewAllProjects;
