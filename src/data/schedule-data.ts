export interface ScheduleLocation {
  id: string;
  dayName: string;
  dateStr: string;
  timeWindow: string;
  venueName: string;
  address: string;
  cityState: string;
  note?: string;
  isToday?: boolean;
  googleMapsUrl: string;
  statusText: 'SERVING NOW' | 'NEXT UP' | 'SCHEDULED' | 'PRIVATE CATERING';
}

export const CURRENT_WEEK_SCHEDULE: ScheduleLocation[] = [
  {
    id: 'stop-1',
    dayName: 'Friday',
    dateStr: 'This Friday',
    timeWindow: '5:00 PM – 9:00 PM',
    venueName: 'Food Truck Friday at Idlewild Park',
    address: '2055 Idlewild Dr',
    cityState: 'Reno, NV 89509',
    note: 'Reno\'s biggest weekly food truck gathering! Find us by the main lawn.',
    isToday: true,
    statusText: 'SERVING NOW',
    googleMapsUrl: 'https://maps.google.com/?q=Idlewild+Park+Reno+NV',
  },
  {
    id: 'stop-2',
    dayName: 'Saturday',
    dateStr: 'This Saturday',
    timeWindow: '12:00 PM – 8:00 PM',
    venueName: 'The Stick Downtown Reno',
    address: '95 N Sierra St',
    cityState: 'Reno, NV 89501',
    note: 'Parked right outside The Stick in downtown Reno! Perfect fuel before or after the game.',
    isToday: false,
    statusText: 'NEXT UP',
    googleMapsUrl: 'https://maps.google.com/?q=95+N+Sierra+St+Reno+NV',
  },
  {
    id: 'stop-3',
    dayName: 'Sunday',
    dateStr: 'This Sunday',
    timeWindow: '11:00 AM – 4:00 PM',
    venueName: 'Midtown District Pop-Up',
    address: '777 S Virginia St',
    cityState: 'Reno, NV 89501',
    note: 'Sunday lunch vibe near Junkee & local boutiques.',
    isToday: false,
    statusText: 'SCHEDULED',
    googleMapsUrl: 'https://maps.google.com/?q=777+S+Virginia+St+Reno+NV',
  },
  {
    id: 'stop-4',
    dayName: 'Tuesday',
    dateStr: 'Next Tuesday',
    timeWindow: '11:30 AM – 2:30 PM',
    venueName: 'South Reno Tech Park Lunch',
    address: '10390 Double R Blvd',
    cityState: 'Reno, NV 89521',
    note: 'Mid-week lunch break destination for the tech district.',
    isToday: false,
    statusText: 'SCHEDULED',
    googleMapsUrl: 'https://maps.google.com/?q=10390+Double+R+Blvd+Reno+NV',
  },
  {
    id: 'stop-5',
    dayName: 'Thursday',
    dateStr: 'Next Thursday',
    timeWindow: '6:00 PM – 10:00 PM',
    venueName: 'Nevada Museum of Art Night',
    address: '160 W Liberty St',
    cityState: 'Reno, NV 89501',
    note: 'Evening art walkthrough and late-night wonton taco cravings.',
    isToday: false,
    statusText: 'SCHEDULED',
    googleMapsUrl: 'https://maps.google.com/?q=160+W+Liberty+St+Reno+NV',
  },
];
