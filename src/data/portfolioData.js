/**
 * PORTFOLIO DATA CONFIGURATION — ADITYA HIKKE
 * ==============================================================================
 * Final Year B.E. Student in Electronics and Computer Engineering at PICT, Pune
 * Specialized in Java, Spring Boot, React.js, Cloud, IoT & Full-Stack Engineering.
 * ==============================================================================
 */

export const portfolioData = {
  // 1. PERSONAL & HERO INFORMATION
  personal: {
    name: "Aditya Hikke",
    role: "Full-Stack Developer & Software Engineer",
    institution: "PICT, Pune",
    department: "Electronics & Computer Engineering",
    typedTitles: [
      "Final Year B.E. @ PICT Pune",
      "Java & Spring Boot Developer",
      "React.js Full-Stack Developer",
      "Competitive Programmer (150+ DSA)",
      "Cloud & REST API Engineer"
    ],
    tagline: "Final year B.E. student in Electronics and Computer Engineering at PICT, Pune.",
    bioShort: "Strong problem-solving skills with Java as primary language for Data Structures and Algorithms. Skilled in Spring Boot and React for developing scalable and user-focused web applications.",
    availability: "Open to Full-Time SDE Roles & Internships",
    location: "Pune, Maharashtra, India",
    yearsExperience: "Final Year Student",
    resumeUrl: "/resume.pdf",
    avatarUrl: "/avatar.png",
    phone: "+91 93566 43286",
    socialLinks: {
      github: "https://github.com/adityahikke",
      linkedin: "https://www.linkedin.com/in/aditya-hikke",
      leetcode: "https://leetcode.com/u/adityahikke",
      codechef: "https://codechef.com/users/adityapict",
      email: "adityahikke123@gmail.com"
    }
  },

  // 2. HERO FLOATING STAT BADGES
  heroBadges: [
    { label: "Academics @ PICT", value: "8.78 CGPA", icon: "GraduationCap" },
    { label: "DSA Problems Solved", value: "150+ Solved", icon: "Code2" },
    { label: "Coding Ratings", value: "LeetCode 1500+ | 2★ CodeChef", icon: "Award" }
  ],

  // 3. ABOUT SECTION DATA
  about: {
    headline: "Final year B.E. student in Electronics and Computer Engineering at PICT, Pune.",
    paragraphs: [
      "I am a Final year B.E. student in Electronics and Computer Engineering at PICT, Pune, with strong problem-solving skills and Java as my primary language for Data Structures and Algorithms.",
      "Skilled in Spring Boot and React for developing scalable and user-focused web applications. Passionate about software development, technology, and innovation, with a strong interest in building impactful applications and working effectively in collaborative teams.",
      "Beyond technical development, I am an active member of the PICT Debating Society (DebSoc), engaged in competitive debates and discussions that strengthen my critical thinking, teamwork, and communication skills."
    ],
    stats: [
      { number: 8.78, suffix: " CGPA", label: "PICT Pune Academic Score" },
      { number: 150, suffix: "+", label: "DSA Problems Solved" },
      { number: 1500, suffix: "+", label: "LeetCode Contest Rating" },
      { number: 2, suffix: " Star", label: "CodeChef Competitive Rating" }
    ],
    highlights: [
      {
        title: "Enterprise Backend with Spring Boot",
        desc: "Designing resilient RESTful microservices, Spring Data JPA entities, Hibernate ORM, and JWT / Google OAuth 2.0 security pipelines."
      },
      {
        title: "Dynamic React Frontends",
        desc: "Building fast, responsive single-page web applications with React 18, TailwindCSS, state management, and modern UX patterns."
      },
      {
        title: "Data Structures & Competitive Coding",
        desc: "150+ problems solved across LeetCode, CodeChef, and GeeksforGeeks with strong analytical problem-solving in Java and C++."
      },
      {
        title: "Cloud, IoT & AI Integration",
        desc: "Experience with AWS IoT Core, MQTT device connectivity, Google Gemini Generative AI API, and Railway cloud deployments."
      }
    ]
  },

  // 4. WORK EXPERIENCE & INTERNSHIPS
  experience: [
    {
      id: "exp-1",
      role: "Full Stack Web Development Intern",
      company: "In-House Internship",
      location: "Pune, India",
      period: "Sep 2024 — Sep 2025",
      type: "In-House Internship",
      description: "Contributed to a college website as part of a 14-member development team, working in the Database Management team on database design, data modeling, and SQL/NoSQL database management.",
      achievements: [
        "Worked in the Database Management team on database design, data modeling, and SQL/NoSQL database management.",
        "Collaborated with frontend and backend teams to integrate database services and ensure efficient data access and consistency.",
        "Managed database layer and query performance as part of a 14-member cross-functional development team."
      ],
      technologies: ["MongoDB", "SQL", "Database Design", "Data Modeling", "REST APIs", "Git", "Team Collaboration"]
    },
    {
      id: "exp-2",
      role: "AWS IoT Cloud Engineer Intern",
      company: "AICTE – EduSkills (Virtual Internship)",
      location: "Remote / AICTE",
      period: "Jan 2026 — Mar 2026",
      type: "Virtual Internship",
      description: "Specialized in cloud IoT infrastructure, telemetry ingestion pipelines, and encrypted cloud-to-device communication systems.",
      achievements: [
        "Architected an IoT Device Management Dashboard utilizing AWS IoT Core, MQTT messaging protocol, and IoT Thing Groups.",
        "Implemented X.509 device certificates and fine-grained AWS IoT policies for secure device authentication and status monitoring.",
        "Acquired hands-on proficiency in AWS cloud services, IoT rules engine, device shadow management, and telemetry data pipelines."
      ],
      technologies: ["AWS IoT Core", "MQTT", "AWS Cloud", "IoT Security", "Device Certificates", "Cloud Architecture"]
    }
  ],

  // 5. EDUCATION TIMELINE (10th, 12th, Current PICT)
  education: [
    {
      id: "edu-1",
      degree: "B.E. in Electronics and Computer Engineering",
      institution: "Pune Institute of Computer Technology (PICT)",
      location: "Pune, Maharashtra",
      period: "2022 — 2026 (Final Year)",
      grade: "CGPA: 8.78 / 10.0",
      highlights: [
        "Final Year Bachelor of Engineering in Electronics & Computer Engineering",
        "Active Member of PICT Debating Society (DebSoc)",
        "Key Coursework: Data Structures & Algorithms, OOP, DBMS, Computer Networks, Operating Systems, Web Technologies"
      ]
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Certificate (HSC - 12th)",
      institution: "Maharashtra State Board of Secondary and Higher Secondary Education",
      location: "Maharashtra, India",
      period: "2020 — 2022",
      grade: "Score: 79.17%",
      highlights: [
        "Major in Science (Physics, Chemistry, Mathematics & Computer Science)",
        "Solid foundation in mathematical modeling, algorithms, and analytical logic"
      ]
    },
    {
      id: "edu-3",
      degree: "Secondary School Certificate (SSC - 10th)",
      institution: "Maharashtra State Board of Secondary and Higher Secondary Education",
      location: "Maharashtra, India",
      period: "2019 — 2020",
      grade: "Score: 95.80% (Distinction)",
      highlights: [
        "Passed with High Distinction (95.80%)",
        "Academic excellence with top percentiles in Mathematics and Science"
      ]
    }
  ],

  // 6. SKILLS MATRIX (Extracted directly from resume)
  skills: {
    categories: [
      {
        id: "languages",
        name: "Programming Languages",
        icon: "Code2",
        skills: [
          { name: "Java (Primary / DSA)", level: 95, icon: "Code2" },
          { name: "JavaScript (ES6+)", level: 90, icon: "FileCode2" },
          { name: "Python", level: 85, icon: "Terminal" },
          { name: "C / C++", level: 45, icon: "Cpu" }
        ]
      },
      {
        id: "frameworks",
        name: "Frameworks & Backend",
        icon: "Server",
        skills: [
          { name: "Spring Boot", level: 92, icon: "Flame" },
          { name: "React.js (React 18)", level: 92, icon: "Atom" },
          { name: "REST APIs", level: 94, icon: "Network" },
          { name: "Spring Data JPA & Hibernate", level: 90, icon: "Workflow" },
          { name: "JWT & OAuth 2.0", level: 88, icon: "ShieldCheck" },
          { name: "HTML5 & CSS3 / Tailwind", level: 92, icon: "Palette" }
        ]
      },
      {
        id: "databases",
        name: "Databases & Storage",
        icon: "Database",
        skills: [
          { name: "MySQL", level: 92, icon: "Database" },
          { name: "PostgreSQL", level: 88, icon: "HardDrive" },
          { name: "MongoDB & MongoDB Atlas", level: 88, icon: "Boxes" },
          { name: "Database Design & Modeling", level: 90, icon: "Layers" }
        ]
      },
      {
        id: "tools",
        name: "Tools & Cloud Platforms",
        icon: "Wrench",
        skills: [
          { name: "Git & GitHub", level: 92, icon: "GitBranch" },
          { name: "Postman", level: 90, icon: "Radio" },
          { name: "Swagger / OpenAPI", level: 88, icon: "FileText" },
          { name: "AWS IoT Core & MQTT", level: 84, icon: "Cloud" },
          { name: "Railway & Vercel", level: 88, icon: "UploadCloud" }
        ]
      },
      {
        id: "concepts",
        name: "Core Computer Science",
        icon: "Layout",
        skills: [
          { name: "Data Structures & Algorithms", level: 94, icon: "Zap" },
          { name: "Object-Oriented Programming (OOP)", level: 95, icon: "CheckCircle2" },
          { name: "Database Management Systems (DBMS)", level: 92, icon: "Sliders" },
          { name: "RESTful Web Services", level: 92, icon: "Network" }
        ]
      }
    ]
  },

  // 7. FEATURED PROJECTS (3 Resume Projects)
  projects: [
    {
      id: "project-1",
      title: "Placement Prep",
      tagline: "Unified Placement Preparation & Test Engine Platform",
      description: "A full-stack placement readiness portal engineered to bridge the gap for college students seeking structured, timed practice across Aptitude, CS Fundamentals, and Data Structures & Algorithms in one unified dashboard.",
      image: "/projects/project1.png",
      category: "Fullstack / Spring Boot & React",
      featured: true,
      technologies: ["React 18", "Spring Boot 3", "MySQL", "JWT", "Google OAuth 2.0", "REST APIs", "Tailwind CSS"],
      stats: [
        { label: "Target Scope", value: "Aptitude + CS + DSA" },
        { label: "Auth Security", value: "JWT + OAuth 2.0" },
        { label: "Test Engine", value: "Timed & Auto-Graded" }
      ],
      features: [
        "Engineered the full-stack architecture utilizing React 18 on frontend and Spring Boot 3 on backend with MySQL persistence.",
        "Implemented secure JWT stateless authentication and Google OAuth 2.0 with role-based access control (RBAC) for STUDENT and ADMIN users.",
        "Developed a timed test engine with balanced difficulty selection, countdown timer, instant score calculation, and detailed solution explanations for tests of up to 30 questions.",
        "Built a comprehensive Admin Portal with Question Bank CRUD operations, CSV/Excel bulk upload and validation, student management, and dynamic curriculum scheduling."
      ],
      github: "https://github.com/adityahikke",
      demo: "https://aceplacement.up.railway.app/"
    },
    {
      id: "project-2",
      title: "Culinary AI — AI Recipe Assistant",
      tagline: "Personalized Intelligent Recipe Generation Powered by Google Gemini",
      description: "A full-stack intelligent recipe recommendation application leveraging Java Spring Boot backend and Google Gemini Generative AI for customized ingredient analysis, cooking instructions, and image-based ingredient detection.",
      image: "/projects/project2.png",
      category: "Fullstack / AI & Cloud",
      featured: true,
      technologies: ["Java", "Spring Boot", "Google Gemini API", "Spring Data JPA", "Hibernate", "PostgreSQL", "Swagger/OpenAPI", "Railway"],
      stats: [
        { label: "AI Engine", value: "Gemini Pro / Vision" },
        { label: "Persistence", value: "PostgreSQL & JPA" },
        { label: "Deployment", value: "Railway Cloud" }
      ],
      features: [
        "Engineered full-stack Java Spring Boot architecture integrated with Google Gemini API for intelligent ingredient validation and personalized recipe generation.",
        "Implemented image-based ingredient detection and contextual cooking instructions based on available pantry items and dietary constraints.",
        "Utilized Spring Data JPA and Hibernate with PostgreSQL for robust relational data persistence and user recipe bookmarking.",
        "Deployed the live backend on Railway cloud and tested/documented all RESTful endpoints using Swagger/OpenAPI and Postman."
      ],
      github: "https://github.com/adityahikke",
      demo: "https://recipe-assistant-production.up.railway.app/"
    },
    {
      id: "project-3",
      title: "ECE Department Website",
      tagline: "Official Academic Resources & Department Portal for PICT",
      description: "A modern, responsive department web portal delivering centralized academic resources, official announcements, event calendars, and faculty directories for students and staff.",
      image: "/projects/project3.png",
      category: "Fullstack / Web Portal",
      featured: true,
      technologies: ["React.js", "Node.js", "MongoDB", "MongoDB Atlas", "Express", "Tailwind CSS", "Git"],
      stats: [
        { label: "Team Size", value: "14 Engineers" },
        { label: "Database", value: "MongoDB Atlas" },
        { label: "User Base", value: "Students & Faculty" }
      ],
      features: [
        "Developed a responsive department portal delivering academic resources, announcements, and timetables for students and faculty.",
        "Managed the database layer as part of a 14-member development team using MongoDB and MongoDB Atlas cloud storage.",
        "Integrated seamless REST endpoints for fast resource lookup, syllabus distribution, and event notifications.",
        "Implemented clean UI layout with search filtering, mobile responsiveness, and dark/light contrast."
      ],
      github: "https://github.com/adityahikke",
      demo: "https://pict-ece-portal.vercel.app"
    }
  ],

  // 8. CODING ACHIEVEMENTS & CLUBS
  achievements: [
    {
      title: "LeetCode & CodeChef Competitive Programming",
      desc: "Achieved a 2-Star rating on CodeChef and a 1500+ contest rating on LeetCode with 150+ DSA problems solved across platforms."
    },
    {
      title: "PICT Debating Society (DebSoc)",
      desc: "Active member engaged in inter-collegiate debates, discussions, and public-speaking activities to enhance critical thinking."
    },
    {
      title: "AWS IoT Cloud Engineer Certification",
      desc: "Completed virtual internship with AICTE & EduSkills covering AWS IoT Core, MQTT messaging, and cloud-to-device connectivity."
    },
    {
      title: "Infosys Springboard – Basics of Python",
      desc: "Certified in Python fundamentals, core programming concepts, data structures, and problem-solving techniques."
    }
  ],

  // 9. CONTACT INFORMATION
  contact: {
    title: "Let's Connect & Build Something Great",
    subtitle: "Open to Full-Time Software Engineering roles, SDE Internships, and collaborative software projects.",
    email: "adityahikke123@gmail.com",
    phone: "+91 93566 43286",
    location: "Pune, Maharashtra, India",
    college: "Pune Institute of Computer Technology (PICT), Pune",
    timeZone: "IST (Indian Standard Time) — UTC+5:30",
    emailService: {
      // EASIEST OPTION: Formspree (recommended)
      // 1. Go to https://formspree.io  → Sign up with adityahikke123@gmail.com
      // 2. Click "New Form", give it any name → Copy the endpoint URL
      // 3. Paste it below (looks like: https://formspree.io/f/xyzabc)
      formspreeEndpoint: "https://formspree.io/f/xnpaevyr", // ← Paste Formspree URL here

      // OR use EmailJS:
      emailJsServiceId: "",
      emailJsTemplateId: "",
      emailJsPublicKey: ""
    },
    socials: [
      { name: "GitHub", url: "https://github.com/adityahikke", icon: "Github" },
      { name: "LinkedIn", url: "https://linkedin.com/in/adityahikke", icon: "Linkedin" },
      { name: "LeetCode", url: "https://leetcode.com/u/adityahikke", icon: "Code2" },
      { name: "CodeChef", url: "https://codechef.com/users/adityapict", icon: "Award" }
    ]
  }
};
