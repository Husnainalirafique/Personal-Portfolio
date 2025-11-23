export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: 'Mobile' | 'Core' | 'Architecture' | 'Tools';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string; // We'll map this to actual icons in the component
}
