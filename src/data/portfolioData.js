// Centralized portfolio data to ensure clean separation of content and structure
export const portfolioData = {
  personalInfo: {
    name: "Bharathiraja M",
    title: "MERN Stack Developer",
    roles: ["Full Stack Developer", "MERN Stack Developer"],
    bio: "Passionate MERN Stack Developer, Full Stack Developer, and Computer Science Engineering student specializing in building high-performance web applications using React.js, Node.js, MongoDB, and Express.js.",
    location: "Vellore, Tamil Nadu",
    email: "bharathirajamurali472@gmail.com",
    phone: "8610338565",
    resumeUrl: "/resume/Bharathiraja_Resume.pdf",
    avatarUrl: "/assets/profile.jpg"
  },

  about: {
    headline: "Aspiring Software Engineer & MERN Stack Developer",
    paragraphs: [
      "I am a third-year Computer Science Engineering student with a deep passion for full-stack software development. Combining theoretical engineering principles with practical coding experience, I specialize in building end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "My placement preparation centers on developing robust architectures, high-performance API layers, and highly fluid user interfaces. I possess a strong problem-solving mindset, a continuous learning attitude, and a keen eye for modern UI/UX design trends.",
      "I am actively seeking placement and internship opportunities where I can apply my skills to real-world products, collaborate with talented teams, and build highly scalable, impact-driven software."
    ],
    highlights: [
      { label: "MERN Stack Specialization", desc: "Expertise in full stack JS/TS web ecosystems" },
      { label: "Scalable Architectures", desc: "Familiarity with RESTful APIs, database design & state management" },
      { label: "UI & UX Design", desc: "Focus on clean typography, responsive layouts & micro-interactions" },
      { label: "Problem Solving", desc: "Strong foundations in Data Structures & Algorithms" }
    ]
  },

  education: [
    {
      degree: "SSLC / Class X",
      institution: "Jaya Vaasavi Matric Hr Sec School",
      timeline: "2021 - 2022",
      grade: "94.4%",
      details: "Completed secondary education with strong academic performance and active participation in school activities."
    },
    {
      degree: "HSC / Class XII",
      institution: "Spark Matric Hr Sec School",
      timeline: "2023 - 2024",
      grade: "90.83%",
      details: "Focused on Mathematics and Computer Science with consistent academic excellence and analytical learning."
    },
    {
      degree: "B.E. Computer Science Engineering",
      institution: "Sri Eshwar College of Engineering, Coimbatore",
      timeline: "2024 - 2028 (Present)",
      grade: "8.07 CGPA (Till 3rd Semester)",
      details: "Currently pursuing Computer Science Engineering with strong interest in Full Stack Development, Software Engineering, and modern web technologies."
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Redux Toolkit", level: 80 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 }
    ],
    database: [
      { name: "MongoDB", level: 80 },
      { name: "SQL / PostgreSQL", level: 75 }
    ],
    programmingLanguages: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C", level: 82 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 88 }
    ],
    tools: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 85 }
    ]
  },

  techStack: [
    { name: "React", iconType: "react" },
    { name: "Node.js", iconType: "node" },
    { name: "MongoDB", iconType: "mongodb" },
    { name: "Express", iconType: "express" },
    { name: "JavaScript", iconType: "javascript" },
    { name: "Python", iconType: "python" },
    { name: "Tailwind CSS", iconType: "tailwind" },
    { name: "GitHub", iconType: "github" }
  ],

  projects: [
    {
      title: "Face Recognition Attendance System",
      description: "A Python-based face recognition attendance system capable of detecting and recognizing faces for automated attendance management. Includes an automated spreadsheet export utility for real-time reporting.",
      tech: ["Python", "OpenCV", "Face Recognition"],
      githubUrl: "https://github.com/Bharathiraja-472/Python-project",
      liveUrl: "", // Optional placeholder
      imageUrl: "", // Left blank to test our elegant placeholder asset fallback
      category: "Python"
    }
  ],

  certifications: [
    {
      title: "Mastering Data Structures & Algorithms using C and C++",
      platform: "Udemy",
      instructor: "Abdul Bari",
      date: "May 15, 2025",
      duration: "76 Total Hours",
      credentialUrl: "https://ude.my/UC-835b3712-cb93-427c-8b8d-6dc508a73a87",
      credentialId: "UC-835b3712-cb93-427c-8b8d-6dc508a73a87",
      description: "Completed an in-depth Data Structures and Algorithms course covering recursion, linked lists, stacks, queues, trees, graphs, sorting algorithms, searching techniques, and advanced problem-solving concepts using C and C++.",
      skills: ["Data Structures", "Algorithms", "C", "C++", "Problem Solving"],
      achievementBadge: "📚 Udemy Course Completion",
      score: ""
    },
    {
      title: "Programming in Python",
      platform: "Meta / Coursera",
      instructor: "Meta Staff",
      date: "April 2, 2025",
      duration: "40 Hours",
      credentialUrl: "https://coursera.org/verify/F9AAAD3RL271",
      credentialId: "F9AAAD3RL271",
      description: "Successfully completed Python programming fundamentals including variables, functions, loops, object-oriented programming, debugging, and practical software development concepts.",
      skills: ["Python", "OOP", "Problem Solving", "Programming Fundamentals"],
      achievementBadge: "🎓 Meta Professional Certificate",
      score: ""
    },
    {
      title: "Master Java Visually: A Complete A-Z Bootcamp for Beginners",
      platform: "Udemy",
      instructor: "Harish Anbalagan",
      date: "September 1, 2025",
      duration: "14.5 Total Hours",
      credentialUrl: "https://ude.my/UC-d3e666ac-cb44-422a-b6c2-35c26cb44a60",
      credentialId: "UC-d3e666ac-cb44-422a-b6c2-35c26cb44a60",
      description: "Completed a Java bootcamp covering Java fundamentals, object-oriented programming, arrays, methods, loops, classes, and core software development concepts.",
      skills: ["Java", "OOP", "Core Java", "Programming Logic"],
      achievementBadge: "📚 Udemy Course Completion",
      score: ""
    },
    {
      title: "Design Thinking – A Primer",
      platform: "NPTEL (IIT Madras) / SWAYAM",
      instructor: "IIT Madras Faculty",
      date: "Jan–Feb 2026",
      duration: "4 Week Course",
      credentialUrl: "https://nptel.ac.in/noc/E_Certificate/NOC26MG51S36560008703339385",
      credentialId: "NPTEL26MG51S365600087",
      description: "Successfully completed the NPTEL course 'Design Thinking – A Primer' offered by IIT Madras. Learned design thinking methodologies including user-centric problem solving, ideation, innovation frameworks, prototyping, and solution development for real-world challenges.",
      skills: ["Design Thinking", "Problem Solving", "Innovation", "User-Centered Design", "Product Thinking", "Creative Thinking"],
      achievementBadge: "🏅 NPTEL Elite Certification",
      score: "79% (Elite Level)"
    }
  ],

  codingProfiles: [
    {
      platform: "LeetCode",
      username: "Bharathiraja_",
      url: "https://leetcode.com/u/Bharathiraja_/",
      color: "from-amber-500 to-yellow-600",
      stats: "150+ Solved | SQL & Algorithms Expert"
    },
    {
      platform: "LinkedIn",
      username: "bharathiraja-m-39560532a",
      url: "https://www.linkedin.com/in/bharathiraja-m-39560532a/",
      color: "from-blue-600 to-indigo-700",
      stats: "Professional Network | Placement Ready"
    },
    {
      platform: "GitHub",
      username: "Bharathiraja-472",
      url: "https://github.com/Bharathiraja-472",
      color: "from-slate-800 to-slate-950",
      stats: "Open Source Projects | Daily Contributions"
    }
  ],

  hackathons: [
    {
      title: "Hack With GDG",
      role: "36-Hour Hackathon Participant",
      period: "2025",
      highlight: "Team Project Development",
      description:
        "Participated in a 36-hour hackathon focused on building innovative real-world software solutions through collaborative development, problem-solving, and rapid prototyping.",
      isWinner: false,
      tags: ["React Native", "Spring Boot", "GPS Tracking"]
    }
  ],

  internships: [
    {
      title: "MERN Full Stack Development Internship",
      organization: "AlgoTutor Academy",
      type: "Certificate of Appreciation",
      duration: "01-12-2025 to 19-12-2025",
      usn: "24CS035",
      instructor: "Siddarth",
      coFounder: "Manish Sharma",
      pdfUrl: "/resume/24CS035_BHARATHIRAJA_M.pdf",
      description: "Successfully completed a MERN Full Stack Development Internship focused on MongoDB, Express.js, React.js, and Node.js. Gained practical experience in real-time web development workflows, frontend/backend integration, and modern software engineering practices.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack", "Full Stack Development", "REST APIs", "Web Development"]
    }
  ]
};
