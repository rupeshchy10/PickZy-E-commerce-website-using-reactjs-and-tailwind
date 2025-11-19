import Jeans from "./jeans.png"
import Hoodie from "./hoodie.png"
import LeatherJacket from "./leather-jacket.png"
import Skirt from "./skirt.png"
import TShirt from "./tshirt.png"
import Sleepsuit from "./sleepsuit.png"
import Shirt from "./shirt.png"
import Dress from "./dress.png"
import Skater from "./skater.png"
import Sweater from "./sweater.png"
import BabyShirt from "./baby-shirt.png"
import ShirtDress from "./shirt-dress.png"

const product = [
  {
    id: 1,
    name: "Classic Jeans",
    price: 45.98,
    oldPrice: 55,
    onSale: true,
    newArrival: false,
    category: "Men",
    image: Jeans,
  },
  {
    id: 2,
    name: "Warm Hoodie",
    price: 60.31,
    oldPrice: 70,
    onSale: false,
    newArrival: true,
    category: "Women",
    image: Hoodie,
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 120.43,
    oldPrice: 140,
    onSale: true,
    newArrival: false,
    category: "Men",
    image: LeatherJacket,
  },
  {
    id: 4,
    name: "Stylish Skirt",
    price: 35,
    oldPrice: 45,
    onSale: false,
    newArrival: true,
    category: "Women",
    image: Skirt,
  },
  {
    id: 5,
    name: "Cotton T-Shirt",
    price: 25.45,
    oldPrice: 30,
    onSale: true,
    newArrival: false,
    category: "All",
    image: TShirt,
  },
  {
    id: 6,
    name: "Baby Sleepsuit",
    price: 20,
    oldPrice: 25,
    onSale: false,
    newArrival: true,
    category: "Kids",
    image: Sleepsuit,
  },
  {
    id: 7,
    name: "Formal Shirt",
    price: 40.99,
    oldPrice: 50,
    onSale: true,
    newArrival: false,
    category: "Men",
    image: Shirt,
  },
  {
    id: 8,
    name: "Floral Dress",
    price: 55.33,
    oldPrice: 65,
    onSale: false,
    newArrival: true,
    category: "Women",
    image: Dress,
  },
  {
    id: 9,
    name: "Skater Outfit",
    price: 38,
    oldPrice: 45,
    onSale: false,
    newArrival: true,
    category: "New Arrivals",
    image: Skater,
  },
  {
    id: 10,
    name: "Warm Sweater",
    price: 48.55,
    oldPrice: 55,
    onSale: false,
    newArrival: true,
    category: "All",
    image: Sweater,
  },
  {
    id: 11,
    name: "Cute Baby Shirt",
    price: 18,
    oldPrice: 22,
    onSale: true,
    newArrival: false,
    category: "Kids",
    image: BabyShirt,
  },
  {
    id: 12,
    name: "Shirt Dress",
    price: 50.50,
    oldPrice: 60,
    onSale: true,
    newArrival: false,
    category: "On Sale",
    image: ShirtDress,
  },
];

export default product;
