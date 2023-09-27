import { CICDDATA, COURSESData, navData } from "../types/type";
import tick from "../images/choosecicdimg/mdi_shield-tick.png";
import crs1 from "../images/courses/crs1.png";
import crs2 from "../images/courses/crs2.png";
import crs3 from "../images/courses/crs3.png";
import crs4 from "../images/courses/crs4.png";
import crs5 from "../images/courses/crs5.png";
import crs6 from "../images/courses/crs6.png";
import crs7 from "../images/courses/crs7.png";
import crs8 from "../images/courses/crs8.png";
import crs9 from "../images/courses/crs9.png";
import crs10 from "../images/courses/crs10.png";
import crs11 from "../images/courses/crs11.png";
import crs12 from "../images/courses/crs12.png";
import wrk1 from "../images/courses/wrk1.png";
import wrk2 from "../images/courses/wrk2.png";
import wrk3 from "../images/courses/wrk3.png";
import wrk4 from "../images/courses/wrk4.png";

export const CICDdata: CICDDATA[] = [
  {
    id: 1,
    img: tick,
    heading: "From Novice to Pro",
    text: "Our training is tailor-made for individuals with little or no prior product management experience. We take you from scratch and nurture your skills to excel in this competitive field.",
  },
  {
    id: 2,
    img: tick,
    heading: "Hands-On Learning",
    text: "Dive into immersive hands-on workshops, case studies, and simulations to master the intricacies of product management.",
  },
  {
    id: 3,
    img: tick,
    heading: "Expert Faculty",
    text: "Learn from seasoned industry professionals who bring their expertise and real-world insights to the classroom.",
  },
  {
    id: 4,
    img: tick,
    heading: "Internship Placements",
    text: "Gain invaluable work experience through internships with top tech companies, putting your learning into practice.",
  },
];
export const CICDdata2: CICDDATA[] = [
  {
    id: 1,
    img: tick,
    heading: "Product Management Essentials",
    text: "Master the fundamentals of product management, including market research, user personas, and product roadmaps",
  },
  {
    id: 2,
    img: tick,
    heading: "User-Centered Design",
    text: "Learn to create seamless user experiences through user research, prototyping, and usability testing.",
  },
  {
    id: 3,
    img: tick,
    heading: "Agile Product Development",
    text: "Explore agile methodologies to deliver products iteratively and respond to changing market demands effectively",
  },
  {
    id: 4,
    img: tick,
    heading: "Data-Driven Decision",
    text: "Making Harness the power of data analytics to make informed product decisions and drive growth",
  },
];
export const HOWITWORKSDATA: CICDDATA[] = [
  {
    id: 1,
    img: wrk1,
    heading: "Enroll and get started",
    text: "Master the fundamentals of product management, including market research, user personas, and product roadmaps",
  },
  {
    id: 2,
    img: wrk2,
    heading: "Access all content",
    text: "Get access to all content (Quizzes, videos, classes), interactive workshops, industry insights, and personalized guidance through each course.",
  },
  {
    id: 3,
    img: wrk3,
    heading: "Complete Projects",
    text: "Complete projects using real-world scenarios that prepare you to use what you learn right away",
  },
  {
    id: 4,
    img: wrk4,
    heading: "Earn a certificate",
    text: "Get recognized, earn certificate at the end of the program and become a master in your field",
  },
];

export const COURSES: COURSESData[] | never = [
  {
    id: 1,
    img: crs1,
    heading: "INTRODUCTION TO PRODUCT MANAGEMENT",
    text: "This course focuses on the fundamentals of Product management. You will learn who a product manager is, what project management is, the types if product management, responsibilities, its importance, and the 10 top skills for effective product management.",
    curriculum: [
      {
        id: 1,
        pointname: "Definition of Product Management:",
        subpoints: [
          "What is Product Management ?",
          "Who is a Product Manager ?",
          "Types of Product Management",
          "Responsibilities of a Product Manager",
          "Why is product management important?",
          "Top 10 Skills for Effective Product Management",
        ],
      },
    ],
  },
  {
    id: 2,
    img: crs2,
    heading: "PRODUCT MANAGEMENT OPERATIONS",
    text: "Explore the stages in every product’s life cycle, market understanding, product development process, user-Centered Design, product strategies, key metrics and measurement, with real world case studies and examples.",
    curriculum: [
      {
        id: 1,
        pointname: "Product Life Cycle:",
        subpoints: [
          "Stages of a product's life cycle (introduction, growth, maturity, decline).",
          "Characteristics and goals of each product life cycle stage.",
        ],
      },
      {
        id: 2,
        pointname: "Market Understanding",
        subpoints: [
          "Customer needs and pain points.",
          "Market segmentation and targeting.",
          "Competitive analysis and market trends.",
        ],
      },
      {
        id: 3,
        pointname: "Product Development Process",
        subpoints: [
          "Idea generation and validation.",
          "Defining product requirements.",
          "Prototyping and iteration.",
          "Launch and post-launch activities.",
        ],
      },
    ],
  },
  {
    id: 3,
    img: crs3,
    heading: "UNDERSTANDING BUSINESS AS A PRODUCT MANAGER",
    text: "This course covers business fundamentals, business models, revenue generation, profit and loss analysis, profit generation, market analysis, market segmentation and targeting, competitive analysis, and lots more!",
  },
  {
    id: 4,
    img: crs4,
    heading: "DIGITAL MARKETING FOR PRODUCT MANAGEMENT",
    text: "Explore the concept of digital marketing and its significance, understand how digital marketing complements product management, digital marketing channels, social media marketing, content marketing, influencer marketing, E-commerce strategies, etc.",
  },
  {
    id: 5,
    img: crs5,
    heading: "DATA ANALYSIS FOR PRODUCT MANAGEMENT",
    text: "Data Fundamentals, Data collection and measurement, excel for beginners, data visualization, descriptive analytics, exploratory data analysis, user behavior analysis, A/B testing and experimentation, etc,",
  },
  {
    id: 6,
    img: crs6,
    heading: "UI/UX DESIGN FOR PRODUCT MANAGEMENT",
    text: "User-centered design principles, user research and persona development, information architecture, wireframing and prototyping, visual design principles, interaction design, responsive design, usability testing, accessibility design, and lots more.",
  },
  {
    id: 7,
    img: crs7,
    heading: "PRODUCT MANAGEMENT WORK TOOLS",
    text: "Project Management Tools, Collaboration Platforms, Analytics Tools, Prototyping and Design Tools, User Feedback and Testing Platforms, Product Roadmap Tools, Version Control and Documentation, Customer Relationship Management (CRM) Systems, etc.",
  },
  {
    id: 8,
    img: crs8,
    heading: "SOFTWARE TESTING",
    text: "Testing Fundamentals, Test Planning and Strategy, Test Case Design, Test Execution and Automation, Defect Management, Regression Testing, efforts, Performance Testing, Security Testing, etc.",
  },
  {
    id: 9,
    img: crs9,
    heading: "CONTENT CREATION FOR PRODUCT MANAGEMENT",
    text: "Audience Understanding, Content Formats, Writing Skills, Interactive Content, and Content Analytics and Iteration: Analyzing how users engage with your content and using insights to refine your content strategy.",
  },
  {
    id: 10,
    img: crs10,
    heading: "UNDERSTANDING SOFTWARE DEVELOPMENT AS A PRODUCT MANAGER.",
    text: "Software Development Methodologies, Design, Development, Testing, Deployment, Technical Fundamentals, Basic programming concepts, Technology stacks, Collaboration with Development Teams, Communication",
  },
  {
    id: 11,
    img: crs11,
    heading:
      "UNDERSTANDING ENGINEERING TECHNICALITIES AND THE LIFE CYCLE OF A PRODUCT",
    text: "Product Life Cycle Phases, Conceptualization, Development, Testing and Validation, Manufacturing and Production, Launch and Deployment, etc.",
  },
  {
    id: 12,
    img: crs12,
    heading: "ADVANCING YOUR CAREER AS A PRODUCT MANAGER",
    text: "Personal Branding, Leadership and Cross-Functional Collaboration, Data-Driven Decision-Making, Managing Complex Projects, Managing Ambiguity, Demonstrating Results, Negotiation and Influence, Evolving Leadership, and Advanced Industry Knowledge",
  },
];
export const NAV_DATA: navData[] = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/courses", text: "Courses" },
  { id: 3, url: "/aboutus", text: "About Us" },
  { id: 4, url: "/contact", text: "Contact" },
];
