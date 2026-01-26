
import { Project, TeamMember } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Monolith Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1200&auto=format&fit=crop',
    year: '2023',
    location: 'Swiss Alps',
    description: 'A seamless blend of concrete and glass emerging from the rugged terrain, designed to withstand extreme alpine conditions while offering panoramic views.'
  },
  {
    id: '2',
    title: 'Crystal Pavilion',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1518005020251-58296b8a76ff?q=80&w=1200&auto=format&fit=crop',
    year: '2022',
    location: 'Tokyo, Japan',
    description: 'An open-concept exhibition space using advanced structural glass technology to create a weightless atmospheric experience.'
  },
  {
    id: '3',
    title: 'Helix Office Towers',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    year: '2024',
    location: 'Dubai, UAE',
    description: 'A twin-tower configuration inspired by DNA strands, maximizing natural light through a twisting vertical garden facade.'
  },
  {
    id: '4',
    title: 'Obsidian Library',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1449156001437-3a16d1dfda70?q=80&w=1200&auto=format&fit=crop',
    year: '2021',
    location: 'Reykjavik, Iceland',
    description: 'Clad in dark volcanic-textured panels, this quiet sanctuary for knowledge reflects the dramatic Icelandic landscape.'
  },
  {
    id: '5',
    title: 'Azure Marina Resort',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    year: '2023',
    location: 'Santorini, Greece',
    description: 'Reinterpreting traditional Cycladic architecture with modern fluid forms and sustainable cooling systems.'
  },
  {
    id: '6',
    title: 'The Grid Loft',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop',
    year: '2022',
    location: 'New York, USA',
    description: 'A minimalist transformation of a mid-century industrial warehouse into a light-filled living space.'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Elena Vance',
    role: 'Principal Architect',
    bio: 'Pritzker prize nominee with 20 years of experience in brutalist and sustainable design.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Marcus Thorne',
    role: 'Lead Structural Engineer',
    bio: 'Specializing in parametric design and innovative material science.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Sophia Chen',
    role: 'Creative Director',
    bio: 'Bridging the gap between conceptual art and functional architecture.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop'
  }
];
