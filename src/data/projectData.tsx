export const projectData = [
  {
    title: "Mochigame",
    image: "/assets/MochigameImg.png",
    type: "개인 프로젝트",
    description: "React와 Phaser를 활용한 마우스 상호작용 게임입니다.",
    detail:
      "개발을 독학한 후 처음 시도한 개인 프로젝트입니다.\nReact와 Phaser를 활용하여 게임을 개발하고,\nNetlify를 사용해 배포까지 완료하였습니다.",
    techStack: ["React", "Phaser", "Netlify"],
    github: "https://github.com/nyem1n/mochigame",
    link: "https://mochigame.netlify.app/",
    date: "2024.09~2024.12 (3개월)",
    learnings:
      "개발에 필요한 이미지 요소들 모두 직접 그려 보고,\n게임 기획부터 개발, 배포까지 혼자서 다 해보면서 많은 것을 배울 수 있었습니다.",
    insights:
      "폴더 구조를 깊게 고려하지 않고 한 파일에 한 페이지에서 사용하는 기능을 모두 넣었습니다.\n지금은 컴포넌트 단위로 쪼개고, 재사용 가능한 부분은 따로 빼서 관리하는 것이 유지보수에 훨씬 좋다는 것을 알게 되었습니다.",
    purpose:
      "제대로 된 프로젝트는 해본 적이 없었어서,\n이왕이면 제가 좋아하는 게임을 만들어보면서 공부해보고 싶었습니다.",
    screenshots: [
      "/assets/Mochigame/mochigame1.png",
      "/assets/Mochigame/mochigame2.png",
      "/assets/Mochigame/mochigame3.png",
    ],
  },
  {
    title: "Vibely",
    image: "/assets/VibelyImg.png",
    type: "팀 프로젝트",
    description:
      "React와 TypeScript를 활용한 프로젝트 팀원 구인 웹사이트입니다.",
    detail:
      "기획부터 디자인, 개발까지 모두 팀원들과 협업하여 진행한 첫 팀 프로젝트입니다.\nFigma로 디자인, Express로 백엔드 구축, 프론트엔드는 React와 TypeScript를 사용하여 개발하였습니다.\n사용자가 감정에 대한 키워드를 입력하면, Gemini AI가 Spotify API를 활용해 맞춤형 플레이리스트를 생성해주는 서비스입니다.",
    techStack: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express"],
    github: "https://github.com/eunmilee89/FE-Vibley",
    link: "",
    date: "2024.05~2024.06 (1개월)",
    learnings:
      "이 프로젝트로 Figma의 사용법, Git을 활용한 협업, RESTful API 설계 등을 할 수 있게 되었습니다.\n또한, 팀원들과의 소통을 통해 협업의 중요성을 깨닫게 되었습니다.",
    insights:
      "디자인과 기획에서 많은 시간을 써 개발에 할애할 시간이 부족했습니다.\n하지만 노션 칸반보드를 활용해 업무를 체계적으로 관리하고,\n매일 짧은 회의를 반복해 진행 상황을 공유하며 여러 문제를 함께 해결해 나갔습니다.\n시간 내에 UI와 기능은 완성했지만 배포를 하지 못한 점이 아쉽습니다.",
    purpose:
      "AI를 활용한 프로젝트를 해보고 싶어 진행되었습니다.\nSpotify API와 Gemini API를 통해 사용자 맞춤형 플레이리스트를 제공하는 서비스를 목표로 했습니다.",
    role: "프론트엔드 개발 담당 (디자인, 백엔드 구현, UI 구현, API 연동)",
    teamSize: "4명 (프론트엔드 4)",
    screenshots: [
      "/assets/Vibely/vibely1.png",
      "/assets/Vibely/vibely2.png",
      "/assets/Vibely/vibely3.png",
    ],
  },
  {
    title: "Teamo",
    image: "/assets/TeamoImg.png",
    type: "팀 프로젝트",
    description:
      "React와 TypeScript를 활용한 프로젝트 팀원 구인 웹사이트입니다.",
    detail:
      "사용자가 자신의 포지션과 보유 기술 스택을 입력하면 팀장이 팀에 초대할 수 있고,\n팀장이 프로젝트 정보를 등록하면 팀원들이 지원할 수 있는 서비스입니다.\n프로젝트를 구하는 팀원 정보를 모아둔 페이지와 팀원을 구하는 프로젝트 정보를 모아둔 페이지,\n자신의 스택과 포지션을 변경할 수 있는 마이페이지,\n현재 소속된 팀을 확인할 수 있는 내 팀 정보 페이지 등을 제공합니다.\n또한 사용자들의 기술 스택별 수요와 공급을 그래프로 시각화하고,\n원하는 키워드로 프로젝트나 팀원을 검색할 수 있는 기능도 지원합니다.\n현재 백엔드 서버가 내려가 있어 기능 대부분에 접근할 수 없는 상태입니다.",
    techStack: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express"],
    github: "https://github.com/PRMS-Teamo/mytype-frontend",
    link: "https://teamo-vercel.vercel.app/",
    date: "2025.06~2024.07 (1개월)",
    learnings:
      "기획과 디자인 때 개발 방식을 확실히 정해두는 것이 중요하다는 것을 배웠습니다.\n프론트엔드 개발자끼리 협업할 때와 달리 백엔드와 협업할 때는 또 다른 것도 신경써야 한다는 것을 알게 되었습니다.",
    insights:
      "백엔드와 프론트엔드가 서로 다른 생각을 가지고 있어 소통에 어려움이 있었습니다.\n하지만 깃허브 간반 활용과 짧은 회의를 반복하며 진행 상황을 공유하고 문제를 함께 해결해 나갔습니다.\n시간이 부족해 반응형에 신경 쓰지 못한 점이 아쉽습니다.",
    purpose:
      "초기 계획은 데브코스 교육 내에서의 최종 프로젝트 구인 서비스였습니다.\n하지만 교육이 끝난 후에도 계속 사용할 수 있는 서비스로 확장하였습니다.",
    role: "프론트엔드 개발 담당 (UI 구현, API 연동, 상태 관리, 라우팅)",
    teamSize: "5명 (프론트엔드 3, 백엔드 2)",
    screenshots: [
      "/assets/Teamo/teamo1.png",
      "/assets/Teamo/teamo2.png",
      "/assets/Teamo/teamo3.png",
      "/assets/Teamo/teamo4.png",
      "/assets/Teamo/teamo5.png",
      "/assets/Teamo/teamo6.png",
      "/assets/Teamo/teamo7.png",
      "/assets/Teamo/teamo8.png",
      "/assets/Teamo/teamo9.png",
    ],
  },
];
