
export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Cultural' | 'Industrial';
  image: string;
  year: string;
  location: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}
