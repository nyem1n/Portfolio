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
      { text: "React" },
      { text: "TypeScript" },
      { text: "Tailwind CSS" },
      { text: "JavaScript (ES6+)", description: "ES6 이후 최신 문법 활용" },
      { text: "HTML & CSS" },
      { text: "Git & GitHub", description: "협업 경험 O" },
    ],
  },
  education: {
    title: (
      <span className="flex items-center gap-2">
        <IoSchoolSharp /> education
      </span>
    ),
    items: [
      {
        text: "동양미래대학교 정보통신공학과",
        description: "2021.03~2024.02 전문학사",
      },
      {
        text: "동양미래대학교 정보통신공학과",
        description: "2024.03~2025.02 전공심화 학사과정",
      },
      { text: "프로그래머스 웹 풀스택 6기", description: "2025.01~2025.07" },
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
      { text: "✍️ https://velog.io/@nemin/posts" },
      { text: "nyem1n" },
    ],
  },
};