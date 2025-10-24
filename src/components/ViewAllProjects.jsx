import { Link } from 'react-router-dom';

const ViewAllProjects = () => {
  return (
    <section className="flex justify-center my-5 px-6">
      <Link
        to="/projects"
        className="inline-block text-xl font-bold bg-gradient-to-r from-primary to-indigo-600 text-white py-5 px-12 rounded-full shadow-lg hover:shadow-xl hover:from-primary/80 hover:to-indigo-500 transition-all duration-300 dark:shadow-xl"
      >
        View All Projects
      </Link>
    </section>
  );
};

export default ViewAllProjects;
