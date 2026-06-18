import { BASE_PATH } from "@/lib/basePath";

export const featuredDishes = [
  {
    id: 1,
    name: "Truffle Wagyu Ribeye",
    description: "A5 Japanese Wagyu infused with black truffle butter, served with asparagus.",
    price: "$145",
    rating: 4.9,
    image: `${BASE_PATH}/images/dish-1.jpg`,
  },
  {
    id: 2,
    name: "Lobster Thermidor",
    description: "Classic French dish with creamy cognac sauce, gruyere, and parmesan.",
    price: "$120",
    rating: 4.8,
    image: `${BASE_PATH}/images/dish-2.jpg`,
  },
  {
    id: 3,
    name: "Pan-Seared Scallops",
    description: "Hokkaido scallops with cauliflower purée, caviar, and microgreens.",
    price: "$85",
    rating: 4.9,
    image: `${BASE_PATH}/images/dish-1.jpg`, // fallback
  },
  {
    id: 4,
    name: "Saffron Risotto",
    description: "Creamy Acquerello rice with Spanish saffron and 24-month Parmigiano-Reggiano.",
    price: "$65",
    rating: 4.7,
    image: `${BASE_PATH}/images/dish-2.jpg`, // fallback
  },
  {
    id: 5,
    name: "Miso Glazed Black Cod",
    description: "Alaskan black cod marinated in Saikyo miso for 72 hours.",
    price: "$95",
    rating: 4.9,
    image: `${BASE_PATH}/images/dish-5.jpg`,
  },
  {
    id: 6,
    name: "Grand Marnier Soufflé",
    description: "Classic French dessert served with vanilla bean crème anglaise.",
    price: "$45",
    rating: 4.8,
    image: `${BASE_PATH}/images/dish-6.jpg`,
  },
];

export const reviews = [
  {
    id: 1,
    name: "Alexander M.",
    photo: `${BASE_PATH}/images/review-1.jpg`,
    review: "An absolute masterpiece. The Truffle Wagyu is the best I've had outside of Tokyo. The ambiance is incredibly sophisticated.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia L.",
    photo: `${BASE_PATH}/images/review-2.jpg`,
    review: "Impeccable service and breathtaking presentation. Every dish tells a unique story. Cannot recommend it enough for special occasions.",
    rating: 5,
  },
  {
    id: 3,
    name: "James V.",
    photo: `${BASE_PATH}/images/review-3.jpg`,
    review: "Aura truly lives up to its name. The glass aesthetic combined with the low lighting creates a magical dining experience.",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Isabella K.",
    photo: `${BASE_PATH}/images/review-4.jpg`,
    review: "We celebrated our anniversary here and they made it unforgettable. The Miso Glazed Black Cod melts in your mouth.",
    rating: 5,
  },
  {
    id: 5,
    name: "William H.",
    photo: `${BASE_PATH}/images/review-5.jpg`,
    review: "From the moment you walk in, you're treated like royalty. The sommelier's wine pairings were spot on.",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Olivia R.",
    photo: `${BASE_PATH}/images/review-6.jpg`,
    review: "The Saffron Risotto is divine. The attention to detail in both the food and the interior design is simply unmatched.",
    rating: 5,
  },
];

export const galleryImages = [
  `${BASE_PATH}/images/gallery-1.jpg`,
  `${BASE_PATH}/images/gallery-2.jpg`,
  `${BASE_PATH}/images/gallery-3.jpg`,
  `${BASE_PATH}/images/gallery-4.jpg`,
  `${BASE_PATH}/images/gallery-5.jpg`,
  `${BASE_PATH}/images/gallery-1.jpg`, // fallback
  `${BASE_PATH}/images/gallery-2.jpg`, // fallback
  `${BASE_PATH}/images/gallery-8.jpg`,
];
