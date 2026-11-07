export type MenuCategory = "All" | "Small Plates" | "Mains" | "From the Coast" | "Desserts";
export type DietaryTag = "Vegetarian" | "Vegan" | "Gluten-free";

export type MenuDish = {
  id: string;
  name: string;
  category: Exclude<MenuCategory, "All">;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
  dietary: DietaryTag[];
  allergens: string[];
  availability: "Available" | "Seasonal";
  detail: string;
};

// Demonstration menu data. Confirm every dish, price, allergen and dietary claim before launch.
export const menuCategories: MenuCategory[] = ["All", "Small Plates", "Mains", "From the Coast", "Desserts"];

export const menuDishes: MenuDish[] = [
  { id: "charred-carrots", name: "Charred Garden Carrots", category: "Small Plates", description: "Whipped labneh, toasted seeds, coriander and citrus.", price: 950, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85", imageAlt: "Fresh colourful vegetable plate", dietary: ["Vegetarian", "Gluten-free"], allergens: ["Milk", "Sesame"], availability: "Available", detail: "A bright opening plate built around sweet, fire-kissed carrots, cool labneh and a lively citrus finish." },
  { id: "crispy-cassava", name: "Crispy Cassava", category: "Small Plates", description: "Green chilli salt, tamarind dip, fresh herbs.", price: 780, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=85", imageAlt: "Golden crispy cassava fries", dietary: ["Vegan", "Gluten-free"], allergens: [], availability: "Available", detail: "Golden cassava with a crisp edge, a soft centre and a tangy tamarind dip." },
  { id: "tenderloin", name: "Ember-Roasted Tenderloin", category: "Mains", description: "Charred seasonal vegetables, smoked jus, garden herbs.", price: 2850, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85", imageAlt: "Roasted steak with seasonal vegetables", dietary: [], allergens: ["May contain sulphites"], availability: "Available", detail: "A fire-led centrepiece with seasonal vegetables and a deeply savoury smoked jus." },
  { id: "mushroom-risotto", name: "Wild Mushroom Risotto", category: "Mains", description: "Slow-stirred rice, roasted mushrooms, thyme oil.", price: 1950, image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1000&q=85", imageAlt: "Creamy mushroom risotto in a bowl", dietary: ["Vegetarian", "Gluten-free"], allergens: ["Milk"], availability: "Available", detail: "Comforting and deeply aromatic, finished with roasted mushrooms and fragrant thyme oil." },
  { id: "coastal-crudo", name: "Coastal Citrus Crudo", category: "From the Coast", description: "Fresh catch, bright citrus, coriander oil, a little heat.", price: 1950, image: "https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1000&q=85", imageAlt: "Seafood crudo with citrus and herbs", dietary: ["Gluten-free"], allergens: ["Fish"], availability: "Seasonal", detail: "A delicate, citrus-forward expression of the coast. Prepared with the freshest available catch." },
  { id: "coconut-fish", name: "Coconut Coast Fish", category: "From the Coast", description: "Coconut broth, ginger, lime and soft herbs.", price: 2350, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85", imageAlt: "Fish fillet served with fresh herbs", dietary: ["Gluten-free"], allergens: ["Fish"], availability: "Seasonal", detail: "A gentle coconut broth carries ginger, lime and herbs around the day's catch." },
  { id: "noir-chocolate", name: "The Noir Chocolate", category: "Desserts", description: "Dark chocolate crémeux, roasted nuts, salted caramel.", price: 1250, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85", imageAlt: "Chocolate dessert with cream and berries", dietary: ["Vegetarian", "Gluten-free"], allergens: ["Milk", "Tree nuts"], availability: "Available", detail: "A rich dark chocolate finish balanced with roasted nuts and a delicate salted caramel." },
  { id: "mango-pavlova", name: "Mango & Lime Pavlova", category: "Desserts", description: "Crisp meringue, seasonal mango, lime cream.", price: 1100, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85", imageAlt: "Elegant fruit and cream dessert", dietary: ["Vegetarian", "Gluten-free"], allergens: ["Eggs", "Milk"], availability: "Seasonal", detail: "A light, crisp meringue with seasonal mango and a fresh lime cream." },
];

export function formatKes(amount: number) {
  return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(amount);
}
