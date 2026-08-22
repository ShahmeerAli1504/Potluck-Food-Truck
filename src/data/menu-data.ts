export interface MenuItem {
  id: string;
  name: string;
  category: 'potstickers' | 'wonton-tacos' | 'fries' | 'favorites' | 'churros';
  categoryLabel: string;
  description: string;
  ingredients?: string[];
  prices?: { [key: string]: string };
  price?: string;
  numericPrice?: number;
  addon?: string;
  tags?: string[];
  image: string;
  isHeroFeatured?: boolean;
  badge?: string;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'potstickers', label: 'Potstickers' },
  { id: 'wonton-tacos', label: 'Wonton Tacos' },
  { id: 'fries', label: 'Fries' },
  { id: 'favorites', label: 'Favorites' },
  { id: 'churros', label: 'Churros' },
] as const;

export interface CategoryGroup {
  category: string;
  categoryId: 'potstickers' | 'wonton-tacos' | 'fries' | 'favorites' | 'churros';
  items: MenuItem[];
}

export const OFFICIAL_MENU_DATA: CategoryGroup[] = [
  {
    category: 'Potstickers',
    categoryId: 'potstickers',
    items: [
      {
        id: 'shrimp-potsticker',
        name: 'Shrimp Potsticker',
        category: 'potstickers',
        categoryLabel: 'Potstickers',
        description: 'Served over cabbage slaw with soyaki and Thai chili aioli drizzle',
        ingredients: ['Shrimp', 'Cabbage Slaw', 'Soyaki Glaze', 'Thai Chili Aioli'],
        prices: { '3 PCS': '$8', '6 PCS': '$13' },
        numericPrice: 8,
        image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80',
        isHeroFeatured: true,
        badge: 'POPULAR',
      },
      {
        id: 'traditional-pork-potsticker',
        name: 'Traditional Pork',
        category: 'potstickers',
        categoryLabel: 'Potstickers',
        description: 'Served over cabbage slaw with soyaki and Thai chili aioli drizzle',
        ingredients: ['Pork', 'Cabbage Slaw', 'Soyaki Glaze', 'Thai Chili Aioli'],
        prices: { '3 PCS': '$7', '6 PCS': '$12' },
        numericPrice: 7,
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1000&q=80',
        isHeroFeatured: true,
        badge: 'CLASSIC',
      },
      {
        id: 'veggie-potsticker',
        name: 'Veggie Potsticker',
        category: 'potstickers',
        categoryLabel: 'Potstickers',
        description: 'Served over cabbage slaw with soyaki and Thai chili aioli drizzle',
        ingredients: ['Mixed Vegetables', 'Cabbage Slaw', 'Soyaki Glaze', 'Thai Chili Aioli'],
        prices: { '3 PCS': '$7', '6 PCS': '$12' },
        numericPrice: 7,
        tags: ['VEGAN'],
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80',
      },
    ],
  },
  {
    category: 'Wonton Tacos',
    categoryId: 'wonton-tacos',
    items: [
      {
        id: 'cheeseburger-wonton-taco',
        name: 'Cheeseburger Wonton Taco',
        category: 'wonton-tacos',
        categoryLabel: 'Wonton Tacos',
        description: 'Ground beef, cheese, lettuce, tomato, cheeseburger aioli',
        ingredients: ['Ground Beef', 'Melted Cheese', 'Lettuce', 'Tomato', 'Cheeseburger Aioli'],
        prices: { '3 PCS': '$9', '6 PCS': '$15' },
        numericPrice: 9,
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80',
        isHeroFeatured: true,
        badge: 'FAN FAVORITE',
      },
      {
        id: 'chicken-elote-wonton-taco',
        name: 'Chicken Elote Wonton Taco',
        category: 'wonton-tacos',
        categoryLabel: 'Wonton Tacos',
        description: 'Ground chicken, corn, cotija, sour cream, cilantro, green onion, tajin',
        ingredients: ['Ground Chicken', 'Street Corn', 'Cotija Cheese', 'Sour Cream', 'Cilantro', 'Tajin'],
        prices: { '3 PCS': '$9', '6 PCS': '$15' },
        numericPrice: 9,
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1000&q=80',
        isHeroFeatured: true,
        badge: 'MUST TRY',
      },
      {
        id: 'veggie-elote-wonton-taco',
        name: 'Veggie Elote Wonton Taco',
        category: 'wonton-tacos',
        categoryLabel: 'Wonton Tacos',
        description: 'Elote, cotija, cilantro, sour cream drizzle, tajin',
        ingredients: ['Elote Corn', 'Cotija Cheese', 'Cilantro', 'Sour Cream Drizzle', 'Tajin'],
        prices: { '3 PCS': '$8', '6 PCS': '$13' },
        numericPrice: 8,
        image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=1000&q=80',
      },
      {
        id: 'chinese-chicken-wonton-taco',
        name: 'Chinese Chicken Wonton Taco',
        category: 'wonton-tacos',
        categoryLabel: 'Wonton Tacos',
        description: 'Chicken in Asian spices, cabbage slaw, ginger-soy aioli drizzle, toasted sesame seeds. + Side of mandarin oranges',
        ingredients: ['Spiced Chicken', 'Cabbage Slaw', 'Ginger-Soy Aioli', 'Mandarin Oranges'],
        prices: { '3 PCS': '$9', '6 PCS': '$15' },
        numericPrice: 9,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
      },
    ],
  },
  {
    category: 'Fries',
    categoryId: 'fries',
    items: [
      {
        id: 'elote-chicken-fries',
        name: 'Elote Chicken Fries',
        category: 'fries',
        categoryLabel: 'Fries',
        description: 'Fries, chicken, elote, cotija, cilantro, green onion, tajin',
        ingredients: ['Crispy Fries', 'Chicken', 'Elote Corn', 'Cotija', 'Cilantro', 'Tajin'],
        price: '$14',
        numericPrice: 14,
        image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1000&q=80',
        isHeroFeatured: true,
        badge: 'CROWD PLEASER',
      },
      {
        id: 'hot-cheeto-fries',
        name: 'Hot Cheeto Fries',
        category: 'fries',
        categoryLabel: 'Fries',
        description: 'French fries, ground beef, Velveeta, lettuce, hot Cheetos',
        ingredients: ['French Fries', 'Ground Beef', 'Melted Velveeta', 'Lettuce', 'Flamin Hot Cheetos'],
        price: '$14',
        numericPrice: 14,
        image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=1000&q=80',
        isHeroFeatured: true,
        badge: 'LEGENDARY',
      },
      {
        id: 'thai-chili-fries',
        name: 'Thai Chili Fries',
        category: 'fries',
        categoryLabel: 'Fries',
        description: 'Garlic chili, sweet Thai aioli, green onion',
        ingredients: ['Fries', 'Garlic Chili', 'Sweet Thai Aioli', 'Green Scallions'],
        price: '$11',
        numericPrice: 11,
        addon: 'Add Chicken +$3',
        image: 'https://images.unsplash.com/photo-1585238341870-8777e5d87e07?auto=format&fit=crop&w=1000&q=80',
      },
      {
        id: 'plain-fries',
        name: 'Plain Fries',
        category: 'fries',
        categoryLabel: 'Fries',
        description: 'Crispy golden french fries',
        ingredients: ['Crispy Golden Potatoes', 'Sea Salt'],
        price: '$8',
        numericPrice: 8,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=80',
      },
    ],
  },
  {
    category: 'Favorites',
    categoryId: 'favorites',
    items: [
      {
        id: 'potsticker-prince-combo',
        name: 'Potsticker Prince Combo',
        category: 'favorites',
        categoryLabel: 'Favorites',
        description: '3 potstickers, small fries, soda',
        ingredients: ['3 Potstickers', 'Small Crispy Fries', 'Choice of Soda'],
        price: '$15',
        numericPrice: 15,
        tags: ['COMBO'],
        image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80',
        badge: 'COMBO DEAL',
      },
      {
        id: 'twisted-tacos-combo',
        name: 'Twisted Tacos Combo',
        category: 'favorites',
        categoryLabel: 'Favorites',
        description: '3 wonton tacos, small fries, soda (Upgrade to Loaded Fries +$2)',
        ingredients: ['3 Wonton Tacos', 'Small Fries', 'Soda Drink'],
        price: '$15',
        numericPrice: 15,
        tags: ['COMBO'],
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80',
        badge: 'COMBO DEAL',
      },
      {
        id: 'chinese-chicken-salad',
        name: 'Chinese Chicken Salad',
        category: 'favorites',
        categoryLabel: 'Favorites',
        description: 'Chicken with Asian spices, cabbage slaw, ginger-soy aioli drizzle, toasted sesame seeds',
        ingredients: ['Spiced Chicken', 'Cabbage Slaw', 'Ginger-Soy Aioli', 'Toasted Sesame'],
        price: '$12',
        numericPrice: 12,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
      },
      {
        id: 'esquites-cup',
        name: 'Esquites Cup',
        category: 'favorites',
        categoryLabel: 'Favorites',
        description: 'Corn, spices, cotija, sour cream, cilantro, tajin, and lime',
        ingredients: ['Sweet Corn', 'Cotija Cheese', 'Sour Cream', 'Cilantro', 'Lime Zest'],
        price: '$9',
        numericPrice: 9,
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1000&q=80',
      },
    ],
  },
  {
    category: 'Churros',
    categoryId: 'churros',
    items: [
      {
        id: 'churros',
        name: 'Churros',
        category: 'churros',
        categoryLabel: 'Churros',
        description: '2 churros with chocolate and caramel drizzle',
        ingredients: ['2 Made-to-Order Churros', 'Cinnamon Sugar', 'Chocolate Drizzle', 'Caramel Drizzle'],
        price: '$7',
        numericPrice: 7,
        tags: ['DESSERT'],
        image: 'https://images.unsplash.com/photo-1624371414361-e670ef48e227?auto=format&fit=crop&w=1000&q=80',
        badge: 'DESSERT',
      },
    ],
  },
];

export const MENU_ITEMS: MenuItem[] = OFFICIAL_MENU_DATA.flatMap((cat) => cat.items);
