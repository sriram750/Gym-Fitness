import { GymLocation } from '../models/fitness.models';

export const LOCATIONS_DATA: GymLocation[] = [
  {
    id: 't-nagar',
    name: 'IRONPULSE T NAGAR',
    area: 'T NAGAR',
    city: 'CHENNAI',
    address: '42 Usman Road, Near Panagal Park, T Nagar, Chennai - 600017',
    phone: '+91 44 2815 9001',
    email: 'tnagar@ironpulse.fitness',
    hours: {
      weekdays: '05:00 AM - 11:00 PM',
      weekends: '06:00 AM - 10:00 PM'
    },
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85',
    facilities: [
      '15,000 Sq. Ft. Training Floor',
      'Rogue Fitness Rigging & Platforms',
      'Full Boxing & MMA Octagon Ring',
      'Infrared Recovery Saunas',
      'Juice Bar & Protein Lounge'
    ],
    mapLink: 'https://maps.google.com/?q=T+Nagar+Chennai',
    manager: 'Karthik Subramanian'
  },
  {
    id: 'anna-nagar',
    name: 'IRONPULSE ANNA NAGAR',
    area: 'ANNA NAGAR',
    city: 'CHENNAI',
    address: '2nd Avenue, Block AB 14, Near Roundtana, Anna Nagar, Chennai - 600040',
    phone: '+91 44 2621 8820',
    email: 'annanagar@ironpulse.fitness',
    hours: {
      weekdays: '05:00 AM - 11:00 PM',
      weekends: '06:00 AM - 10:00 PM'
    },
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=85',
    facilities: [
      '18,000 Sq. Ft. Multi-Level Facility',
      'Olympic Barbell & Deadlift Platforms',
      'Synthetic Sled Turf Track (30m)',
      'Cryotherapy & Ice Plunge Baths',
      'Private VIP Training Suites'
    ],
    mapLink: 'https://maps.google.com/?q=Anna+Nagar+Chennai',
    manager: 'Deepak V'
  },
  {
    id: 'velachery',
    name: 'IRONPULSE VELACHERY',
    area: 'VELACHERY',
    city: 'CHENNAI',
    address: '100 Feet Bypass Road, Opposite Phoenix Marketcity, Velachery, Chennai - 600042',
    phone: '+91 44 2243 5050',
    email: 'velachery@ironpulse.fitness',
    hours: {
      weekdays: '05:00 AM - 11:00 PM',
      weekends: '06:00 AM - 09:30 PM'
    },
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=85',
    facilities: [
      '12,000 Sq. Ft. Open Concept Layout',
      'Eleiko Certified Weightlifting Setup',
      'HYROX Official Training Hub',
      'Locker Rooms with Rain Showers',
      'InBody 770 Scan Diagnostics'
    ],
    mapLink: 'https://maps.google.com/?q=Velachery+Chennai',
    manager: 'Siddharth Rao'
  },
  {
    id: 'omr',
    name: 'IRONPULSE OMR TECH PARK',
    area: 'OMR KANDANCHAVADI',
    city: 'CHENNAI',
    address: 'IT Expressway, Phase 1, Kandanchavadi, OMR, Chennai - 600096',
    phone: '+91 44 2496 1100',
    email: 'omr@ironpulse.fitness',
    hours: {
      weekdays: '05:00 AM - 11:30 PM',
      weekends: '06:00 AM - 10:00 PM'
    },
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=85',
    facilities: [
      '20,000 Sq. Ft. Mega Flagship',
      'Panoramic Glass-Facade Cardio Deck',
      'Assault & Woodway Curved Treadmills',
      'Physiotherapy & Dry Needling Clinic',
      'Co-Working & Fuel Lounge'
    ],
    mapLink: 'https://maps.google.com/?q=OMR+Chennai',
    manager: 'Anitha Ramesh'
  },
  {
    id: 'porur',
    name: 'IRONPULSE PORUR',
    area: 'PORUR',
    city: 'CHENNAI',
    address: 'Mount Poonamallee High Rd, Near Ramachandra Hospital, Porur, Chennai - 600116',
    phone: '+91 44 2476 3320',
    email: 'porur@ironpulse.fitness',
    hours: {
      weekdays: '05:00 AM - 11:00 PM',
      weekends: '06:00 AM - 09:00 PM'
    },
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85',
    facilities: [
      '14,000 Sq. Ft. High-Intensity Zone',
      'Plate-Loaded Hammer Strength Area',
      'Group Fitness Studio',
      'Spacious Valet Parking',
      'Supplement Store'
    ],
    mapLink: 'https://maps.google.com/?q=Porur+Chennai',
    manager: 'Rajesh Kumar'
  }
];
