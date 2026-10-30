export interface TechItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'tools' | 'ai';
  description: string;
  proficiency: string;
  highlight: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  extendedDescription: string;
  image: string;
  tags: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveDemoAvailable?: boolean;
}

export interface SportClass {
  id: string;
  name: string;
  sport: 'Tennis' | 'Football' | 'Badminton' | 'Basketball' | 'Swimming';
  coach: string;
  duration: string;
  slotsAvailable: number;
  court: string;
  time: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced';
}
