export interface VerifiedReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  source: 'Yelp' | 'StreetFoodFinder' | 'Google Reviews';
  reviewText: string;
  highlightDish: string;
  date: string;
}

export const VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    id: 'rev-1',
    author: 'Marcus T.',
    location: 'Reno, NV',
    rating: 5,
    source: 'Yelp',
    reviewText: 'The Cheeseburger Wonton Tacos sound crazy until you take that first bite. Crisp wonton shell with perfectly seasoned beef and cheeseburger aioli. Unbelievably good street food concept in Reno!',
    highlightDish: 'Cheeseburger Wonton Tacos',
    date: 'Verified Reno Local',
  },
  {
    id: 'rev-2',
    author: 'Elena R.',
    location: 'Sparks, NV',
    rating: 5,
    source: 'StreetFoodFinder',
    reviewText: 'Found them at Food Truck Friday in Idlewild Park. The Elote Chicken Fries are stacked high and the cotija with cilantro crema ties everything together. Hands down one of our favorite Reno trucks.',
    highlightDish: 'Elote Chicken Fries',
    date: 'Verified Customer',
  },
  {
    id: 'rev-3',
    author: 'David & Sarah M.',
    location: 'South Reno, NV',
    rating: 5,
    source: 'Yelp',
    reviewText: 'We booked Potluck to cater our private anniversary party after trying their potstickers downtown. The crowd loved the Chicken Elote wonton tacos and churros. Professional service and zero hassle.',
    highlightDish: 'Private Event Catering',
    date: 'Catering Client',
  },
];
