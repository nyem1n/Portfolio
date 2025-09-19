import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import "./index.css";
import ProjectCard from "./components/Projects/ProjectCard";
import { cardData } from "./data/cardData";
import { projectData } from "./data/projectData";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="bg-gray-100 min-h-screen">
                <About />
                <div className="flex flex-wrap justify-center gap-10 p-10">
                  <Card
                    title={cardData.techStack.title}
                    items={cardData.techStack.items}
                  />
                  <Card
                    title={cardData.education.title}
                    items={cardData.education.items}
                  />
                  <Card
                    title={cardData.contact.title}
                    items={cardData.contact.items}
                  />
                </div>
              </div>
              <div className="bg-gray-200 p-20">
                <h1 className="text-4xl mt-20 ml-4 mb-12 text-center text-[#4178a8] font-medium">
                  Projects
                </h1>
                <div className="flex flex-wrap justify-center gap-10">
                  {projectData.map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      image={project.image}
                      type={project.type}
                      description={project.description}
                      techStack={project.techStack}
                    />
                  ))}
                </div>
              </div>
            </>
          }
        />

        <Route path="/projects/:projectName" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
