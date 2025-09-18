import About from "./components/About/About";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import "./index.css";
import ProjectCard from "./components/Projects/ProjectCard";
import { cardData } from "./data/cardData";


function App() {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen">
        <About />
        <div className="flex justify-between p-20 m-20">
          <Card title={cardData.techStack.title} items={cardData.techStack.items} />
          <Card title={cardData.education.title} items={cardData.education.items} />
          <Card title={cardData.contact.title} items={cardData.contact.items} />
        </div>
      </div>
      <div className="bg-gray-300">
        <ProjectCard />
      </div>
    </div>
  );
}

export default App;
