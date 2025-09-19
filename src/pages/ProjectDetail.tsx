import { useParams } from "react-router-dom";
import { projectData } from "../data/projectData";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { projectName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const project = projectData.find(
    (p) => p.title.toLowerCase().replace(/\s/g, "-") === projectName
  );

  if (!project) {
    return <div className="p-10 text-xl">프로젝트를 찾을 수 없습니다.</div>;
  }
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-lg text-gray-600 mb-6">{project.type}</p>

      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-96 object-contain rounded-lg shadow-md mb-8"
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">프로젝트 설명</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {project.detail}
        </p>
      </section>

      {project.date && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">진행 기간</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{project.date}</p>
        </section>
      )}

      {project.role && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">맡은 역할</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {project.role}
          </p>
        </section>
      )}

      {project.teamSize && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">프로젝트 인원</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {project.teamSize}
          </p>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">사용한 기술 스택</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {project.learnings && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">배운 점</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {project.learnings}
          </p>
        </section>
      )}

      {project.insights && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">아쉬운 점 & 인사이트</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {project.insights}
          </p>
        </section>
      )}

      {project.purpose && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">프로젝트 목적</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {project.purpose}
          </p>
        </section>
      )}

      <section className="mt-8 mb-8 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-500 transition"
          >
            GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
          >
            배포 링크
          </a>
        )}
      </section>

      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">프로젝트 화면</h2>
          <div className="flex flex-col gap-4">
            {project.screenshots.map((shot, idx) => (
              <img
                key={idx}
                src={shot}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="rounded-lg shadow-md w-full object-contain"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
