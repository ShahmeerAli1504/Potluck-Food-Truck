export interface MenuItem {
  id: string;
  name: string;
  category: 'wonton-tacos' | 'potstickers' | 'fries' | 'desserts' | 'drinks';
  categoryLabel: string;
  price: number;
  description: string;
  ingredients?: string[];
  image: string;
  isHeroFeatured?: boolean;
  badge?: string;
  dietary?: ('Vegetarian' | 'Gluten-Free Option' | 'Spicy' | 'Chef Specialty')[];
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Full Menu' },
  { id: 'wonton-tacos', label: 'Wonton Tacos' },
  { id: 'potstickers', label: 'Potstickers' },
  { id: 'fries', label: 'Loaded Fries' },
  { id: 'desserts', label: 'Sweet Treats' },
  { id: 'drinks', label: 'Refreshing Drinks' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // WONTON TACOS
  {
    id: 'cheeseburger-wonton-tacos',
    name: 'Cheeseburger Wonton Tacos',
    category: 'wonton-tacos',
    categoryLabel: 'Wonton Tacos',
    price: 13.50,
    description: 'Crispy fried wonton shells stuffed with savory seasoned ground beef, melted sharp cheese, crisp shredded lettuce, fresh tomato, and our signature house cheeseburger aioli.',
    ingredients: ['Ground Beef', 'Melted Cheese', 'Crisp Lettuce', 'Diced Tomato', 'Cheeseburger Aioli', 'Fried Wonton Shell'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80',
    isHeroFeatured: true,
    badge: 'Fan Favorite',
    dietary: ['Chef Specialty'],
  },
  {
    id: 'chicken-elote-wonton-tacos',
    name: 'Chicken Elote Wonton Tacos',
    category: 'wonton-tacos',
    categoryLabel: 'Wonton Tacos',
    price: 13.50,
    description: 'Slow-shredded marinated chicken nestled in crunchy wonton shells, topped with sweet street corn elote, crumbled cotija cheese, cilantro, and a tangy sour cream drizzle.',
    ingredients: ['Shredded Chicken', 'Sweet Elote Corn', 'Cotija Cheese', 'Sour Cream Drizzle', 'Fresh Cilantro'],
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1000&q=80',
    isHeroFeatured: true,
    badge: 'Must Try',
    dietary: ['Chef Specialty', 'Spicy'],
  },
  {
    id: 'veggie-elote-wonton-tacos',
    name: 'Veggie Elote Wonton Tacos',
    category: 'wonton-tacos',
    categoryLabel: 'Wonton Tacos',
    price: 12.00,
    description: 'Charred sweet corn elote packed into golden wonton shells with cotija cheese, fresh lime zest, cilantro, and chipotle sour cream drizzle.',
    ingredients: ['Charred Sweet Corn', 'Cotija Cheese', 'Lime Zest', 'Chipotle Sour Cream', 'Crispy Wonton'],
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=1000&q=80',
    isHeroFeatured: false,
    dietary: ['Vegetarian'],
  },

  // POTSTICKERS
  {
    id: 'potsticker-prince',
    name: 'Traditional Pork Potstickers',
    category: 'potstickers',
    categoryLabel: 'Potstickers',
    price: 11.50,
    description: 'Hand-folded pork potstickers pan-seared to golden perfection, packed with savory pork, red bell pepper, and scallions. Served with sweet chili dipping sauce.',
    ingredients: ['Seasoned Pork', 'Red Bell Pepper', 'Scallions', 'Sweet Chili Glaze'],
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1000&q=80',
    isHeroFeatured: true,
    badge: 'Iconic Dish',
    dietary: ['Chef Specialty'],
  },
  {
    id: 'shrimp-potstickers',
    name: 'Crispy Shrimp Potstickers',
    category: 'potstickers',
    categoryLabel: 'Potstickers',
    price: 13.00,
    description: 'Succulent shrimp dumplings served over a fresh bed of crisp lettuce and bell peppers, finished with a drizzle of sweet chili sauce.',
    ingredients: ['Wild Shrimp', 'Crisp Lettuce Bed', 'Bell Peppers', 'Sweet Chili Drizzle'],
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80',
    isHeroFeatured: false,
    dietary: ['Chef Specialty'],
  },
  {
    id: 'veggie-potstickers',
    name: 'Garden Veggie Potstickers',
    category: 'potstickers',
    categoryLabel: 'Potstickers',
    price: 10.50,
    description: 'Crispy pan-fried vegetable dumplings topped with vibrant crunchy carrot slaw and house-made sayaki glaze.',
    ingredients: ['Mixed Vegetables', 'Crunchy Carrot Slaw', 'Sayaki Glaze', 'Sesame Seeds'],
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80',
    isHeroFeatured: false,
    dietary: ['Vegetarian'],
  },

  // FRIES
  {
    id: 'elote-chicken-fries',
    name: 'Elote Chicken Loaded Fries',
    category: 'fries',
    categoryLabel: 'Loaded Fries',
    price: 14.00,
    description: 'Crispy golden french fries piled high with seasoned chicken, warm sweet elote corn, authentic cotija cheese, and cilantro lime cream.',
    ingredients: ['Golden Fries', 'Seasoned Chicken', 'Sweet Elote Corn', 'Cotija Cheese', 'Cilantro Lime Crema'],
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1000&q=80',
    isHeroFeatured: true,
    badge: 'Crowd Pleaser',
    dietary: ['Chef Specialty', 'Spicy'],
  },
  {
    id: 'hot-cheeto-fries',
    name: 'Hot Cheeto Beef Fries',
    category: 'fries',
    categoryLabel: 'Loaded Fries',
    price: 14.00,
    description: 'The ultimate street indulgence: piping hot fries layered with savory ground beef, silky melted Velveeta cheese, diced tomatoes, fresh lettuce, and crushed Flamin\' Hot Cheetos.',
    ingredients: ['French Fries', 'Savory Ground Beef', 'Melted Velveeta', 'Fresh Tomato', 'Flamin\' Hot Cheetos'],
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=1000&q=80',
    isHeroFeatured: true,
    badge: 'Legendary',
    dietary: ['Spicy'],
  },
  {
    id: 'thai-chili-fries',
    name: 'Sweet Thai Chili Fries',
    category: 'fries',
    categoryLabel: 'Loaded Fries',
    price: 11.00,
    description: 'Golden fries tossed in our sweet and tangy Thai chili sauce, sprinkled with toasted sesame seeds and fresh green onions. Add chicken +$3.00.',
    ingredients: ['Crispy Fries', 'Sweet Thai Chili Sauce', 'Toasted Sesame', 'Scallions'],
    image: 'https://images.unsplash.com/photo-1585238341870-8777e5d87e07?auto=format&fit=crop&w=1000&q=80',
    isHeroFeatured: false,
    dietary: ['Vegetarian', 'Spicy'],
  },

  // DESSERTS
  {
    id: 'cinnamon-churros',
    name: 'Cinnamon Sugar Churros',
    category: 'desserts',
    categoryLabel: 'Sweet Treats',
    price: 7.50,
    description: 'Made-to-order golden churros dusted in warm cinnamon sugar. Served with dual dipping sauces: Belgian dark chocolate and dulce de leche caramel.',
    ingredients: ['Warm Churros', 'Cinnamon Sugar', 'Dark Chocolate Dip', 'Dulce de Leche Caramel'],
    image: 'https://images.unsplash.com/photo-1624371414361-e670ef48e227?auto=format&fit=crop&w=1000&q=80',
    isHeroFeatured: true,
    badge: 'Sweet Finish',
    dietary: ['Vegetarian'],
  },

  // DRINKS
  {
    id: 'mexican-coke',
    name: 'Mexican Coke (Bottle)',
    category: 'drinks',
    categoryLabel: 'Refreshing Drinks',
    price: 4.00,
    description: 'Ice-cold classic Coca-Cola sweetened with pure cane sugar in a nostalgic glass bottle.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'jarritos-soda',
    name: 'Jarritos Mexican Soda',
    category: 'drinks',
    categoryLabel: 'Refreshing Drinks',
    price: 3.75,
    description: 'Refreshing fruit sodas available in Mandarin Orange, Lime, and Tamarind flavors.',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'iced-thai-tea',
    name: 'House Iced Thai Tea',
    category: 'drinks',
    categoryLabel: 'Refreshing Drinks',
    price: 4.50,
    description: 'Freshly brewed aromatic Thai red tea sweetened and topped with creamy condensed milk over ice.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1000&q=80',
    badge: 'House Made',
    dietary: ['Vegetarian'],
  }
];
