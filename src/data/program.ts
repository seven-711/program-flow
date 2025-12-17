export interface ProgramEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  icon?: string; // We can map this to Lucide icons later
  duration?: string;
  highlight?: boolean;
}

export const PROGRAM_FLOW: ProgramEvent[] = [
  {
    id: '1',
    time: '1:00 PM',
    title: 'Arrival & Welcome',
    description: 'SBO Officers arrive, festive music plays, and welcome drinks are served. Find your seat and get comfortable!',
    icon: 'DoorOpen',
    duration: '30 mins'
  },
  {
    id: '2',
    time: '1:30 PM',
    title: 'Opening Prayer & Remarks',
    description: 'A moment of gratitude followed by opening remarks from the host.',
    icon: 'Mic',
    duration: '15 mins'
  },
  {
    id: '3',
    time: '2:45 PM',
    title: 'Christmas Dinner',
    description: 'Enjoy a sumptuous holiday feast. Buffet is open!',
    icon: 'Utensils',
    duration: '1 hr 15 mins',
    highlight: true
  },
  {
    id: '4',
    time: '2:45 PM',
    title: 'Parlor Games',
    description: 'Fun and exciting games for everyone with prizes to be won!',
    icon: 'Gamepad2',
    duration: '45 mins'
  },
  {
    id: '5',
    time: '4:45 PM',
    title: 'Intermission Numbers',
    description: 'Special performances from our talented guests.',
    icon: 'Music',
    duration: '30 mins'
  },
  {
    id: '6',
    time: '4:45 PM',
    title: 'Exchange Gifts',
    description: 'The highlight of the night! exchanging gifts and spreading joy.',
    icon: 'Gift',
    duration: '45 mins'
  },
  {
    id: '7',
    time: '5:45 PM',
    title: 'Closing & Socials',
    description: 'Closing remarks and free time for photos and catching up.',
    icon: 'PartyPopper',
    duration: 'Until late'
  }
];
