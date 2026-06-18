import { BASE_PATH } from "@/lib/basePath";

export const featuredDishes = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Rich tomato-based curry with tender tandoor-cooked chicken, finished with cream and aromatic spices.",
    price: "₹349",
    rating: 4.8,
    image: `${BASE_PATH}/images/dishes/butter-chicken.png`,
  },
  {
    id: 2,
    name: "Hyderabadi Dum Biryani",
    description: "Aromatic basmati rice layered with marinated meat, slow-cooked in a sealed handi with exotic spices.",
    price: "₹399",
    rating: 4.9,
    image: `${BASE_PATH}/images/dishes/hyderabadi-dum-biryani.png`,
  },
  {
    id: 3,
    name: "Paneer Tikka",
    description: "Cubes of fresh cottage cheese marinated in spiced yogurt and grilled to perfection in a clay oven.",
    price: "₹279",
    rating: 4.7,
    image: `${BASE_PATH}/images/dishes/paneer-tikka.png`,
  },
  {
    id: 4,
    name: "Malabar Fish Curry",
    description: "Authentic Kerala-style fish curry simmered in a tangy and spicy coconut gravy with fresh curry leaves.",
    price: "₹429",
    rating: 4.8,
    image: `${BASE_PATH}/images/dishes/malabar-fish-curry.png`,
  },
  {
    id: 5,
    name: "Tandoori Chicken",
    description: "Classic Indian roasted chicken marinated in yogurt and fiery red spices, served with fresh lemon.",
    price: "₹379",
    rating: 4.9,
    image: `${BASE_PATH}/images/dishes/tandoori-chicken.png`,
  },
  {
    id: 6,
    name: "Gulab Jamun with Rabri",
    description: "Warm, syrup-soaked milk dumplings served alongside rich, sweetened condensed milk garnished with pistachios.",
    price: "₹149",
    rating: 4.8,
    image: `${BASE_PATH}/images/dishes/gulab-jamun.png`,
  },
];

export const reviews = [
  {
    id: 1,
    name: "Alexander M.",
    photo: `${BASE_PATH}/images/reviews/review-1.jpg`,
    review: "An absolute masterpiece. The Butter Chicken is the best I've had outside of Delhi. The ambiance is incredibly sophisticated.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia L.",
    photo: `${BASE_PATH}/images/reviews/review-2.jpg`,
    review: "Impeccable service and breathtaking presentation. The Hyderabadi Dum Biryani is packed with authentic flavors.",
    rating: 5,
  },
  {
    id: 3,
    name: "James V.",
    photo: `${BASE_PATH}/images/reviews/review-3.jpg`,
    review: "Aurum Dining truly lives up to its name. The traditional Indian aesthetics combined with modern dining creates a magical experience.",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Isabella K.",
    photo: `${BASE_PATH}/images/reviews/review-4.jpg`,
    review: "We celebrated our anniversary here and they made it unforgettable. The Malabar Fish Curry is simply outstanding.",
    rating: 5,
  },
  {
    id: 5,
    name: "William H.",
    photo: `${BASE_PATH}/images/reviews/review-5.jpg`,
    review: "From the moment you walk in, you're treated like royalty. The Paneer Tikka was grilled to perfection.",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Olivia R.",
    photo: `${BASE_PATH}/images/reviews/review-6.jpg`,
    review: "The Tandoori Chicken is divine. The attention to detail in both the food and the interior design is simply unmatched.",
    rating: 5,
  },
];

export const galleryImages = [
  `${BASE_PATH}/images/gallery/gallery-1.jpg`,
  `${BASE_PATH}/images/gallery/gallery-2.jpg`,
  `${BASE_PATH}/images/hero/hero-banner.jpg`,
  `${BASE_PATH}/images/gallery/gallery-4.jpg`,
  `${BASE_PATH}/images/gallery/gallery-5.jpg`,
  `${BASE_PATH}/images/gallery/gallery-1.jpg`, // fallback
  `${BASE_PATH}/images/gallery/gallery-2.jpg`, // fallback
  `${BASE_PATH}/images/gallery/gallery-8.jpg`,
];
