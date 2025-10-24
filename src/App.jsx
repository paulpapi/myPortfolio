import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  
  const router=createBrowserRouter([
    {path: '/', element: <MainLayout />,
      children: [
        {index: true, element: <HomePage />},
        {path: '/projects', element: <ProjectsPage />},
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
