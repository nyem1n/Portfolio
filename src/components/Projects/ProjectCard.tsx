import { useNavigate } from "react-router-dom";

interface ProjectProps {
  title: string;
  image: string;
  type: string;
  description: string;
  techStack: string[];
}

function ProjectCard({
  title,
  image,
  type,
  description,
  techStack,
}: ProjectProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const urlTitle = title.toLowerCase().replace(/\s/g, "-");
    navigate(`/projects/${urlTitle}`);
  };

  return (
<div
  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
              flex flex-col w-full sm:w-[300px] md:w-[350px] lg:w-[380px] xl:w-[400px]"
  onClick={handleCardClick}
>
  <div className="w-full h-[180px] bg-gray-200 flex items-center justify-center">
    <img src={image} alt={title} className="w-full h-full object-cover" />
  </div>

  <div className="p-4">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-xl font-bold ">{title}</h3>
      <span className="text-sm text-gray-500">{type}</span>
    </div>

    <p className="text-sm text-gray-700 mb-4">{description}</p>

    <div className="flex flex-wrap gap-2 text-sm  text-[#4178a8]">
      {techStack.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  </div>
</div>
  );
}

export default ProjectCard;
