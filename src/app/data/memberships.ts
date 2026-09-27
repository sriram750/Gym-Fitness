import { MembershipPlan } from '../models/fitness.models';

export const MEMBERSHIPS_DATA: MembershipPlan[] = [
  {
    id: 'starter',
    name: 'STARTER PASS',
    tagline: 'Essential access for dedicated individual lifters.',
    priceMonthly: 2999,
    priceQuarterly: 7999,
    priceYearly: 24999,
    features: [
      'Full Gym Access across Selected Home Branch',
      'Locker & Steam Room Facilities Access',
      'Free Initial InBody 770 Composition Scan',
      'Access to Mobile Workout & Progress App',
      'Standard Weight & Cardio Deck Usage'
    ],
    notIncluded: [
      'Multi-Branch Access Pass',
      'Unlimited Group Classes',
      '1-on-1 Personal Trainer Sessions'
    ]
  },
  {
    id: 'performance',
    name: 'PERFORMANCE CLUB',
    tagline: 'Our most popular all-access membership for serious athletes.',
    priceMonthly: 4999,
    priceQuarterly: 12999,
    priceYearly: 39999,
    popular: true,
    badge: 'MOST POPULAR',
    features: [
      'UNLIMITED Access to ALL 5 Chennai Locations',
      'Unlimited Group Beast & HYROX Classes',
      'Monthly InBody Composition & Macro Review',
      'Infrared Sauna & Recovery Room Access',
      '2 Complimentary Personal Coaching Sessions',
      'Guest Pass (2 per month)',
      '15% Discount on IronPulse Fuel Lounge'
    ],
    notIncluded: [
      'VIP Locker Reservation'
    ]
  },
  {
    id: 'elite',
    name: 'ELITE EXECUTIVE',
    tagline: 'The ultimate bespoke high-performance fitness concierge.',
    priceMonthly: 8999,
    priceQuarterly: 23999,
    priceYearly: 69999,
    badge: 'VIP CONCIERGE',
    features: [
      'All Performance Access Perks Included',
      'Dedicated Master Personal Coach (4 Sessions/mo)',
      'Customized Bi-Weekly Nutrition & Supplement Protocol',
      'Permanent VIP Locker with Laundry Service',
      'Unlimited Cryotherapy & Recovery Plunge',
      'Unlimited Guest Passes',
      '24/7 Concierge Support & Priority Class Booking'
    ]
  }
];
