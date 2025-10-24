import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  
  const router=createBrowserRouter([
    {path: '/', element: <MainLayout />,
      children: [
        {index: true, element: <HomePage />},
        {path: '/projects', element: <ProjectsPage />},
        {path: '/contact', element: <ContactPage />},
      ],
    }
  ]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
