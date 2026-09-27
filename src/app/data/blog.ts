import { BlogPost } from '../models/fitness.models';

export const BLOG_DATA: BlogPost[] = [
  {
    id: 'post-1',
    title: '5 Nutritional Pillars for Rapid Muscular Recovery & EPOC Burn',
    slug: '5-nutritional-pillars-muscular-recovery',
    category: 'NUTRITION',
    readTime: '6 MIN READ',
    date: 'SEPTEMBER 24, 2026',
    author: {
      name: 'Vikram Vance',
      role: 'Head Strength Coach',
      avatar: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=150&q=80'
    },
    excerpt: 'Discover how strategic intra-workout hydration, leucine thresholds, and carbohydrate timing amplify muscle protein synthesis and reduce Delayed Onset Muscle Soreness (DOMS).',
    content: [
      'Intense hypertrophy training creates microscopic tears in skeletal muscle tissue. To optimize muscle protein synthesis (MPS), timing your nutrient ingestion relative to your training window is vital.',
      '1. Prioritize High-Leucine Protein Sources: Aim for 30-40g of complete protein post-workout containing at least 3g of L-leucine to trigger the mTOR pathway.',
      '2. Replenish Muscle Glycogen: Pair fast-digesting carbohydrates with your post-workout shake to spike insulin and shuttle amino acids into hungry muscle cells.',
      '3. Maintain Electrolyte Homeostasis: Sodium, potassium, and magnesium depletion drastically reduces muscular contractile force. Ensure proper hydration with unrefined sea salt or key minerals.'
    ],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85',
    tags: ['Nutrition', 'Recovery', 'Protein Timing', 'Hypertrophy']
  },
  {
    id: 'post-2',
    title: 'Progressive Overload Blueprint: Breaking Plateau Barriers in 2026',
    slug: 'progressive-overload-blueprint-breaking-plateaus',
    category: 'TRAINING',
    readTime: '8 MIN READ',
    date: 'SEPTEMBER 18, 2026',
    author: {
      name: 'Elena Rodriguez',
      role: 'Performance Specialist',
      avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=150&q=80'
    },
    excerpt: 'Lifting heavier is not the only way to overload. Master rep velocity, time under tension, mechanical advantage shifts, and rest interval compression.',
    content: [
      'Most lifters hit a wall because they believe progressive overload strictly means adding 2.5kg to the bar every week. In reality, neural adaptation requires multi-dimensional stimulus variation.',
      '1. Manipulate Tempo (Time Under Tension): Slowing down eccentrics to 4 seconds increases mechanical tension without increasing joint shear stress.',
      '2. Rest Period Compression: Executing the same total tonnage (e.g. 5,000kg) in 35 minutes instead of 45 minutes represents a massive increase in work capacity density.',
      '3. Full Range Articulation: Increasing movement depth and pause duration forces higher muscle fiber recruitment.'
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85',
    tags: ['Progressive Overload', 'Strength', 'Hypertrophy', 'Biomechanics']
  },
  {
    id: 'post-3',
    title: 'The Science of Infrared Recovery & Ice Contrast Therapy',
    slug: 'science-of-infrared-recovery-ice-contrast',
    category: 'RECOVERY',
    readTime: '5 MIN READ',
    date: 'SEPTEMBER 12, 2026',
    author: {
      name: 'Maya Lin',
      role: 'Mobility Director',
      avatar: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=150&q=80'
    },
    excerpt: 'Unpack the cellular benefits of heat shock proteins, vascular vasodilation, and central nervous system resetting through contrast therapy.',
    content: [
      'Contrast therapy—alternating between 80°C infrared saunas and 10°C ice plunges—causes systemic vascular pumping, boosting lymphatic drainage and flushing metabolic waste.',
      '1. Heat Shock Protein Activation: Thermal exposure preserves cellular integrity and promotes longevity.',
      '2. Vagus Nerve Stimulation: Ice plunging activates the parasympathetic nervous system, drastically lowering resting heart rate.',
      '3. Enhanced Joint Fluid Circulation: Increases synovial fluid viscosity for smoother articular motion.'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85',
    tags: ['Sauna', 'Cold Plunge', 'Recovery', 'Biohacking']
  }
];
