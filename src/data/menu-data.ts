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
        image: '/menu-items/shrimp-potsticker.jpg',
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
        image: '/menu-items/traditional-pork.jpg',
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
        image: '/menu-items/veggie-potsticker.jpg',
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
        image: '/menu-items/cheeseburger-wonton-taco.jpg',
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
        image: '/menu-items/chicken-elote-wonton-taco.jpg',
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
        image: '/menu-items/veggie-elote-wonton-taco.jpg',
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
        image: '/menu-items/chinese-chicken-wonton-taco.jpg',
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
        image: '/menu-items/elote-chicken-fries.jpg',
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
        image: '/menu-items/hot-cheeto-fries.jpg',
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
        image: '/menu-items/thai-chili-fries.jpg',
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
        image: '/menu-items/plain-fries.jpg',
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
        image: '/menu-items/potsticker-prince-combo.jpg',
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
        image: '/menu-items/twisted-tacos-combo.jpg',
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
        image: '/menu-items/chinese-chicken-salad.jpg',
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
        image: '/menu-items/esquites-cup.jpg',
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
        image: '/menu-items/churros.jpg',
        badge: 'DESSERT',
      },
    ],
  },
];

export const MENU_ITEMS: MenuItem[] = OFFICIAL_MENU_DATA.flatMap((cat) => cat.items);
