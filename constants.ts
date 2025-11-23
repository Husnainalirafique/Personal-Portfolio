import { ExperienceItem, Skill, SocialLink } from './types';

export const PROFILE = {
  name: "Husnain Rafique",
  title: "Software Engineer",
  subtitle: "Android | Flutter | APIs | Dependency Injection",
  location: "Islamabad, Pakistan",
  email: "husnainalirafique125@gmail.com",
  about: "I am a dedicated Software Engineer specializing in mobile development with Flutter and native Android technologies. With a strong foundation in MVVM, MVC architectures, and clean coding practices, I build robust, scalable mobile applications. My expertise spans from crafting pixel-perfect UIs with Dart to integrating complex APIs and native Android SDKs.",
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Veroke",
    role: "Software Engineer",
    period: "May 2024 - Present",
    duration: "1 year 7 months (approx)",
    location: "Islamabad, Pakistan",
    description: "Leading mobile development initiatives using Flutter and Dart. Responsible for creating responsive, cross-platform UI/UX, implementing state management using Bloc and Provider, and integrating RESTful APIs. Optimizing app performance and ensuring code quality through dependency injection and clean architecture patterns."
  },
  {
    company: "Apps AiT",
    role: "Android Developer",
    period: "July 2023 - May 2024",
    duration: "11 months",
    location: "Delhi, India (Remote/Contract)", 
    description: "Developed and maintained native Android applications. Focused on UI enhancement, third-party library integrations, and migrating legacy Java code to Kotlin while adhering to modern Android development standards."
  },
  {
    company: "Getamaz",
    role: "Android Developer",
    period: "April 2023 - June 2023",
    duration: "3 months",
    location: "Dubai, United Arab Emirates",
    description: "Contributed to rapid feature development and bug fixing for e-commerce related mobile solutions using native Android SDKs."
  }
];

export const SKILLS: Skill[] = [
  { name: "Flutter", category: "Mobile" },
  { name: "Android Development", category: "Mobile" },
  { name: "Android SDK", category: "Mobile" },
  { name: "Jetpack Compose", category: "Mobile" },
  { name: "Dart", category: "Core" },
  { name: "Kotlin", category: "Core" },
  { name: "Java", category: "Core" },
  { name: "REST APIs", category: "Core" },
  { name: "MVVM / MVC", category: "Architecture" },
  { name: "Clean Architecture", category: "Architecture" },
  { name: "Bloc", category: "Architecture" },
  { name: "Provider", category: "Architecture" },
  { name: "Dependency Injection", category: "Architecture" },
  { name: "Git / GitHub", category: "Tools" },
  { name: "Firebase", category: "Tools" },
];

export const SOCIALS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/husnain-rafique-41a33a372",
    iconName: "linkedin"
  },
  {
    platform: "Email",
    url: `mailto:${PROFILE.email}`,
    iconName: "mail"
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Husnain Rafique's personal portfolio website.
Your role is to answer questions about Husnain's professional background, skills, and experience based strictly on the following resume data.

Name: ${PROFILE.name}
Role: ${PROFILE.title}
Location: ${PROFILE.location}
Contact: ${PROFILE.email}

Skills: ${SKILLS.map(s => s.name).join(', ')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}). Location: ${e.location}. ${e.description}`).join('\n')}

Tone: Professional, enthusiastic, and concise.
Key Highlights: Emphasize his expertise in both Flutter (Cross-platform) and Native Android development. Mention his proficiency in Dart, Kotlin, and State Management (Bloc/Provider).
If asked about contact info, provide the email.
If asked about something not in the resume, politely state that you only have information regarding his professional background as listed.
`;