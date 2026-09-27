import { Program } from '../models/fitness.models';

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'strength',
    title: 'STRENGTH & HYPERTROPHY',
    subtitle: 'Build Raw Power & Define Muscle Mass',
    category: 'STRENGTH',
    description: 'Science-backed resistance protocols targeting maximum motor unit recruitment, compound powerlifts, and targeted hypertrophy.',
    longDescription: 'Engineered for athletes and lifters seeking undeniable physical presence. Our strength program combines periodized barbell lifting with biomechanically optimal plate-loaded machinery. Under expert supervision, master proper mechanics, progressive overload, and neural adaptations.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
    duration: '60 MINS',
    intensity: 'Advanced',
    caloriesBurn: '550 - 750 KCAL',
    benefits: [
      'Progressive Barbell Periodization',
      'Structural Muscle Balance & Joint Health',
      'Biomechanical Lift Analysis',
      'Customized Intra-Workout Fueling Guidelines'
    ],
    schedule: 'Mon, Wed, Fri • 06:00 AM & 06:00 PM',
    instructorRole: 'Head Strength Coach'
  },
  {
    id: 'hiit',
    title: 'ATHLETIC HIIT & CONDITIONING',
    subtitle: 'Explosive Stamina & Metabolic Acceleration',
    category: 'CARDIO',
    description: 'High-intensity interval circuits utilizing assault bikes, sled pushes, kettlebells, and plyometrics to ignite metabolic burn.',
    longDescription: 'Designed to break performance plateaus and melt stubborn fat. Our conditioning arena pairs heart-rate monitored tracking with high-energy interval blocks that elevate your VO2 Max and maintain caloric burn for up to 36 hours post-workout.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=85',
    duration: '45 MINS',
    intensity: 'Intermediate',
    caloriesBurn: '700 - 950 KCAL',
    benefits: [
      'Real-Time Heart Rate Telemetry',
      'Accelerated EPOC (Afterburn Effect)',
      'Agility & Explosive Power Drills',
      'Low-Impact High-Output Alternatives'
    ],
    schedule: 'Daily • Multiple Slots',
    instructorRole: 'Performance Specialist'
  },
  {
    id: 'fat-loss',
    title: 'METABOLIC RECOMPOSITION',
    subtitle: 'Melt Fat. Preserve Lean Muscle Mass.',
    category: 'TRANSFORMATION',
    description: 'A hybrid regimen combining targeted resistance training with micro-targeted cardio zones for rapid body composition shifts.',
    longDescription: 'Forget mindless starvation cardio. Our recomposition protocol is a scientific approach to losing fat while maintaining structural muscle density through macronutrient alignment, strength maintenance, and high-frequency metabolic conditioning.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    duration: '50 MINS',
    intensity: 'All Levels',
    caloriesBurn: '600 - 800 KCAL',
    benefits: [
      'Bi-Weekly InBody Composition Scans',
      'Custom Caloric & Macro Allocation',
      'Fat-Oxidizing Circuit Structures',
      'Dedicated Accountability Mentor'
    ],
    schedule: 'Tue, Thu, Sat • 07:00 AM & 07:00 PM',
    instructorRole: 'Recomp Strategist'
  },
  {
    id: 'combat',
    title: 'COMBAT & MMA CONDITIONING',
    subtitle: 'Striking Technique & Fighter Core Conditioning',
    category: 'COMBAT',
    description: 'Heavy bag work, pad drills, sub-minute footwork patterns, and core stabilization routines guided by combat veterans.',
    longDescription: 'Step into the ring environment designed to build unrelenting mental toughness and reflexes. Learn technical boxing combinations, kickboxing movement, and intense core conditioning without taking unnecessary head damage.',
    image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1200&q=85',
    duration: '60 MINS',
    intensity: 'Intermediate',
    caloriesBurn: '800 - 1100 KCAL',
    benefits: [
      'Authentic Heavy Bag & Focus Mitt Training',
      'Defensive Reflex & Kinetic Footwork',
      'Extreme Core & Shoulder Stamina',
      'Stress Reduction & Mental Discipline'
    ],
    schedule: 'Mon, Wed, Fri • 07:30 PM',
    instructorRole: 'Combat Head Coach'
  },
  {
    id: 'functional',
    title: 'FUNCTIONAL HYROX & SLED',
    subtitle: 'Real-World Stamina & Full-Body Synergy',
    category: 'FUNCTIONAL',
    description: 'Sled drives, sandbag carries, kettlebell snatches, and gymnastics ring movements for athletic functional longevity.',
    longDescription: 'Train like an elite functional competitor. Our open turf zone features custom sled tracks, rogue kettlebells, wall balls, and ergometers to forge a body that performs as impeccably as it looks.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85',
    duration: '60 MINS',
    intensity: 'Advanced',
    caloriesBurn: '650 - 900 KCAL',
    benefits: [
      'Multi-Planar Movement Mastery',
      'Grip Strength & Posterior Chain Power',
      'Injury Prevention & Joint Resilience',
      'Official HYROX Training Prep'
    ],
    schedule: 'Tue, Thu, Sat • 06:30 AM',
    instructorRole: 'Functional Lead'
  },
  {
    id: 'yoga',
    title: 'POWER RECOVERY & MOBILITY',
    subtitle: 'Decompress, Flex & Restore Neural Drive',
    category: 'RECOVERY',
    description: 'Dynamic myofascial release, joint articulation, kinetic stretching, and breathwork to accelerate systemic recovery.',
    longDescription: 'Hard training demands aggressive recovery. Our mobility sanctuary pairs infrared therapy with active joint decompression and Vinyasa flow, reducing muscular tension and preventing kinetic chain dysfunctions.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=85',
    duration: '45 MINS',
    intensity: 'All Levels',
    caloriesBurn: '250 - 400 KCAL',
    benefits: [
      'Active Joint Range-of-Motion Expansion',
      'Central Nervous System Parasympathetic Activation',
      'Postural Realignment',
      'Infrared Heat-Assisted Muscle Relaxation'
    ],
    schedule: 'Daily • 08:00 AM & 06:30 PM',
    instructorRole: 'Mobility Specialist'
  }
];
