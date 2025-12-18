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
    time: '11:00 AM',
    title: 'Arrival & Welcome',
    description: 'You arrived, festive music plays, and welcome drinks are served. Find your seat and get comfortable!',
    icon: 'DoorOpen',
    duration: '30 mins'
  },
  {
    id: '2',
    time: '11:30 AM',
    title: 'Opening Prayer & Remarks',
    description: 'A moment of gratitude for the holiday season before lunchtime.',
    icon: 'Mic',
    duration: '30 mins'
  },
  {
    id: '3',
    time: '12:00 NN',
    title: 'Lunch',
    description: 'Happy lunchtime!',
    icon: 'Utensils',
    duration: '1 hr',
    highlight: true
  },
  {
    id: '4',
    time: '1:45 PM',
    title: 'Parlor Games',
    description: 'Fun and exciting games for everyone with prizes to be won!',
    icon: 'Gamepad2',
    duration: '1 hr'
  },
  {
    id: '5',
    time: '2:45 PM',
    title: 'Intermission Numbers',
    description: 'Special performances from our talented guests.',
    icon: 'Music',
    duration: '1 hr'
  },
  {
    id: '6',
    time: '3:45 PM',
    title: 'Exchange Gifts',
    description: 'The highlight of the night! exchanging gifts and spreading joy.',
    icon: 'Gift',
    duration: '1 hr'
  },
  {
    id: '7',
    time: '4:00 PM',
    title: 'Closing & Socials',
    description: 'Closing remarks and free time for photos and catching up.',
    icon: 'PartyPopper',
    duration: 'Until late'
  }
];
