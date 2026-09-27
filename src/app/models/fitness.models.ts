export interface Program {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  caloriesBurn: string;
  benefits: string[];
  schedule: string;
  instructorRole: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  experience: string;
  bio: string;
  image: string;
  quote: string;
  certifications: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface GymLocation {
  id: string;
  name: string;
  area: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  image: string;
  facilities: string[];
  mapLink: string;
  manager: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceQuarterly: number;
  priceYearly: number;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  badge?: string;
}

export interface Transformation {
  id: string;
  memberName: string;
  age: number;
  durationWeeks: number;
  weightLostKg: number;
  muscleGainedKg: number;
  programUsed: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
  coach: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  achievement: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'NUTRITION' | 'TRAINING' | 'RECOVERY' | 'LIFESTYLE';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  content: string[];
  image: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
