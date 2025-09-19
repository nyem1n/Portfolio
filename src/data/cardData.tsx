import { SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiGithub, SiFigma, SiNotion } from "react-icons/si";
import { FaTools, FaGithub } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";

export const cardData = {
  techStack: {
    title: (
      <span className="flex items-center gap-2">
        <FaTools /> Tech Stacks & Tools
      </span>
    ),
    items: [
      { icon: <SiReact size={36} />, text: "React" },
      { icon: <SiTypescript size={36} />, text: "TypeScript" },
      { icon: <SiTailwindcss size={36} />, text: "Tailwind CSS" },
      { icon: <SiJavascript size={36} />, text: "JavaScript (ES6+)" },
      { icon: <SiHtml5 size={36} />, text: "HTML5" },
      { icon: <SiCss3 size={36} />, text: "CSS3" },
      { icon: <SiGithub size={36} />, text: "Git & GitHub" },
      { icon: <SiFigma size={36} />, text: "Figma" },
      { icon: <SiNotion size={36} />, text: "Notion" },
    ],
  },
  education: {
    title: (
      <span className="flex items-center gap-2">
        <IoSchoolSharp /> education
      </span>
    ),
    items: [
      { text: "동양미래대학교 정보통신공학과", description: "2021.03~2024.02 전문학사" },
      { text: "동양미래대학교 정보통신공학과", description: "2024.03~2025.02 전공심화 학사과정" },
      { text: "프로그래머스 데브코스 웹 풀스택 6기", description: "2025.01~2025.07" },
    ],
  },
  contact: {
    title: (
      <span className="flex items-center gap-2">
        <FaGithub /> contact
      </span>
    ),
    items: [
      { text: "✉️ hmshin02@gmail.com" },
      { text: "✍️ Velog", link: "https://velog.io/@nemin/posts" },
      { text: "GitHub", link: "https://github.com/nyem1n" },
    ],
  },
};