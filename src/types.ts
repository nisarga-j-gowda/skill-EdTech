export type CourseCategory = 
  | 'All'
  | 'Development'
  | 'Data & AI'
  | 'Mobile'
  | 'UI/UX'
  | 'Career';

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  lessonsCount: number;
}

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  learnersCount: number;
  techStack: string[];
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  modules: CourseModule[];
  isFeatured?: boolean;
  popularTag?: string;
  badgeColor?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  skillsGained: string[];
  techStack: string[];
  gradient: string;
  highlights: string[];
}

export interface RoadmapStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  keySkills: string[];
  estimatedTime: string;
  coursesCount: number;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  provider?: 'gemini' | 'fallback';
}

export interface UserStats {
  streakDays: number;
  totalHours: number;
  completedCourses: number;
  certificatesCount: number;
  skillsUnlocked: number;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: string;
  trackPreference?: string;
  joinedDate?: string;
}

