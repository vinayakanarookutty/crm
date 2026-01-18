export interface TripDay {
  id: string; // ✅ needed for drag-drop
  day: number;
  title: string;
  description: string;
  img?: string;
}

export interface FlightItem {
  id: string;
  from: string;
  to: string;
  date: string;
  time?: string;
  airline?: string;
  flightNo?: string;
}

export interface HotelItem {
  id: string;
  name: string;
  city: string;
  checkIn: string;
  checkOut: string;
  roomType?: string;
}

export interface ActivityItem {
  id: string;
  day: number;
  title: string;
  location?: string;
  time?: string;
}

export interface TripData {
  title: string;
  duration: string;
  themeColor: string;
  bgImage?: string;
  inclusions?: string;
  contactPhone?: string;

  flights: FlightItem[];
  hotels: HotelItem[];
  activities: ActivityItem[];
  days: TripDay[];
}
