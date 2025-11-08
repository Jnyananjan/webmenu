"use client"

interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  image: string
}

const menuData: Record<string, MenuItem[]> = {
  pizza: [
    { id: "1", name: "Margherita Pizza", description: "Classic tomato, mozzarella, basil", price: "₹399", image: "🍕" },
    { id: "2", name: "Pepperoni Pizza", description: "Loaded with pepperoni slices", price: "₹499", image: "🍕" },
    { id: "3", name: "Veggie Supreme", description: "Mixed vegetables and herbs", price: "₹449", image: "🍕" },
    { id: "4", name: "BBQ Chicken", description: "Smoky BBQ chicken pizza", price: "₹549", image: "🍕" },
    { id: "5", name: "Quattro Formaggi", description: "Four cheese blend", price: "₹599", image: "🍕" },
    { id: "6", name: "Spicy Arrabbiata", description: "Fiery red pepper pizza", price: "₹479", image: "🍕" },
    { id: "7", name: "Truffle Mushroom", description: "Premium mushroom pizza", price: "₹699", image: "🍕" },
    { id: "8", name: "Seafood Deluxe", description: "Shrimp and calamari blend", price: "₹749", image: "🍕" },
    { id: "9", name: "Buffalo Chicken", description: "Spicy buffalo sauce chicken", price: "₹519", image: "🍕" },
    { id: "10", name: "Garden Fresh", description: "Seasonal vegetables", price: "₹429", image: "🍕" },
  ],
  burger: [
    { id: "1", name: "Classic Cheeseburger", description: "Beef patty with melted cheese", price: "₹299", image: "🍔" },
    { id: "2", name: "Double Deluxe", description: "Double patty with bacon", price: "₹499", image: "🍔" },
    { id: "3", name: "Spicy Jalapeño", description: "Crispy jalapeños, chipotle mayo", price: "₹349", image: "🍔" },
    { id: "4", name: "Mushroom Swiss", description: "Sautéed mushrooms, Swiss cheese", price: "₹379", image: "🍔" },
    { id: "5", name: "Veggie Burger", description: "Plant-based patty", price: "₹249", image: "🍔" },
    { id: "6", name: "Crispy Chicken", description: "Fried chicken breast", price: "₹329", image: "🍔" },
    { id: "7", name: "Lamb Burger", description: "Premium lamb patty", price: "₹429", image: "🍔" },
    { id: "8", name: "Breakfast Special", description: "Egg, bacon, cheese", price: "₹349", image: "🍔" },
    { id: "9", name: "Hawaiian Twist", description: "Pineapple and ham", price: "₹389", image: "🍔" },
    { id: "10", name: "Steakhouse Burger", description: "Premium beef with garlic mayo", price: "₹549", image: "🍔" },
  ],
  pasta: [
    { id: "1", name: "Spaghetti Carbonara", description: "Creamy bacon and eggs", price: "₹399", image: "🍝" },
    { id: "2", name: "Penne Arrabbiata", description: "Spicy tomato sauce", price: "₹349", image: "🍝" },
    { id: "3", name: "Fettuccine Alfredo", description: "Rich cream sauce", price: "₹449", image: "🍝" },
    { id: "4", name: "Lasagna Bolognese", description: "Layers of meat sauce", price: "₹499", image: "🍝" },
    { id: "5", name: "Seafood Pasta", description: "Mixed seafood in white wine", price: "₹599", image: "🍝" },
    { id: "6", name: "Ravioli Ricotta", description: "Cheese-filled ravioli", price: "₹459", image: "🍝" },
    { id: "7", name: "Mushroom Risotto", description: "Creamy arborio rice", price: "₹429", image: "🍝" },
    { id: "8", name: "Mac and Cheese", description: "Comfort food classic", price: "₹349", image: "🍝" },
    { id: "9", name: "Aglio e Olio", description: "Garlic and olive oil spaghetti", price: "₹329", image: "🍝" },
    { id: "10", name: "Truffle Pasta", description: "Premium truffle oil pasta", price: "₹649", image: "🍝" },
  ],
  biryani: [
    { id: "1", name: "Hyderabadi Chicken", description: "Fragrant basmati rice", price: "₹349", image: "🍲" },
    { id: "2", name: "Mutton Biryani", description: "Tender mutton pieces", price: "₹449", image: "🍲" },
    { id: "3", name: "Vegetable Biryani", description: "Mixed vegetables with spices", price: "₹299", image: "🍲" },
    { id: "4", name: "Paneer Biryani", description: "Cottage cheese biryani", price: "₹329", image: "🍲" },
    { id: "5", name: "Prawns Biryani", description: "Fresh prawns with rice", price: "₹549", image: "🍲" },
    { id: "6", name: "Fish Biryani", description: "Delicate fish pieces", price: "₹499", image: "🍲" },
    { id: "7", name: "Egg Biryani", description: "Boiled eggs layered", price: "₹279", image: "🍲" },
    { id: "8", name: "Lucknowi Biryani", description: "Traditional Lucknow style", price: "₹399", image: "🍲" },
    { id: "9", name: "Dum Pukht Chicken", description: "Slow cooked chicken", price: "₹429", image: "🍲" },
    { id: "10", name: "Mixed Biryani", description: "Chicken and mutton blend", price: "₹499", image: "🍲" },
  ],
  salad: [
    { id: "1", name: "Caesar Salad", description: "Romaine, parmesan, croutons", price: "₹299", image: "🥗" },
    { id: "2", name: "Greek Salad", description: "Feta, olives, tomatoes", price: "₹349", image: "🥗" },
    { id: "3", name: "Garden Fresh", description: "Mixed greens and vegetables", price: "₹279", image: "🥗" },
    { id: "4", name: "Caprese Salad", description: "Tomato, mozzarella, basil", price: "₹329", image: "🥗" },
    { id: "5", name: "Quinoa Bowl", description: "Protein-rich quinoa blend", price: "₹399", image: "🥗" },
    { id: "6", name: "Spinach Salad", description: "Fresh spinach with berries", price: "₹359", image: "🥗" },
    { id: "7", name: "Beetroot Salad", description: "Roasted beetroot blend", price: "₹319", image: "🥗" },
    { id: "8", name: "Chicken Salad", description: "Grilled chicken with greens", price: "₹429", image: "🥗" },
    { id: "9", name: "Asian Fusion", description: "Sesame ginger dressing", price: "₹389", image: "🥗" },
    { id: "10", name: "Mediterranean Salad", description: "Olives, herbs, olive oil", price: "₹369", image: "🥗" },
  ],
  dessert: [
    { id: "1", name: "Chocolate Cake", description: "Rich dark chocolate", price: "₹249", image: "🍰" },
    { id: "2", name: "Cheesecake", description: "Creamy New York style", price: "₹299", image: "🍰" },
    { id: "3", name: "Brownie", description: "Fudgy chocolate brownie", price: "₹199", image: "🍰" },
    { id: "4", name: "Tiramisu", description: "Classic Italian dessert", price: "₹279", image: "🍰" },
    { id: "5", name: "Fruit Tart", description: "Fresh seasonal fruits", price: "₹269", image: "🍰" },
    { id: "6", name: "Gulab Jamun", description: "Sweet milk dumplings", price: "₹149", image: "🍰" },
    { id: "7", name: "Kheer", description: "Rice pudding with cardamom", price: "₹129", image: "🍰" },
    { id: "8", name: "Pistachio Kulfi", description: "Traditional frozen dessert", price: "₹99", image: "🍰" },
    { id: "9", name: "Mango Sorbet", description: "Refreshing fruit sorbet", price: "₹169", image: "🍰" },
    { id: "10", name: "Crème Brûlée", description: "Caramelized sugar custard", price: "₹329", image: "🍰" },
  ],
  chinese: [
    { id: "1", name: "Chow Mein", description: "Stir-fried noodles with vegetables", price: "₹279", image: "🥢" },
    { id: "2", name: "Fried Rice", description: "Egg fried rice with spring onions", price: "₹249", image: "🍚" },
    { id: "3", name: "Spring Rolls", description: "Crispy vegetable rolls", price: "₹199", image: "🌯" },
    { id: "4", name: "Manchurian", description: "Cauliflower manchurian sauce", price: "₹299", image: "🍲" },
    { id: "5", name: "Sweet & Sour", description: "Chicken with pineapple sauce", price: "₹349", image: "🍗" },
    { id: "6", name: "Kung Pao Chicken", description: "Spicy chicken with peanuts", price: "₹369", image: "🍗" },
    { id: "7", name: "Mapo Tofu", description: "Silken tofu in spicy sauce", price: "₹329", image: "🍜" },
    { id: "8", name: "Hot & Sour Soup", description: "Tangy traditional soup", price: "₹179", image: "🍲" },
    { id: "9", name: "Garlic Noodles", description: "Fragrant garlic chow mein", price: "₹269", image: "🍜" },
    { id: "10", name: "Chicken Satay", description: "Grilled chicken skewers", price: "₹399", image: "🍗" },
  ],
  mexican: [
    { id: "1", name: "Tacos", description: "Soft or hard shell with fillings", price: "₹299", image: "🌮" },
    { id: "2", name: "Burritos", description: "Wrapped tortilla with rice and beans", price: "₹349", image: "🌯" },
    { id: "3", name: "Enchiladas", description: "Rolled tortillas with sauce", price: "₹329", image: "🌯" },
    { id: "4", name: "Quesadillas", description: "Cheese filled tortillas", price: "₹279", image: "🧀" },
    { id: "5", name: "Nachos Supreme", description: "Loaded with cheese and jalapeños", price: "₹349", image: "🧀" },
    { id: "6", name: "Fajitas", description: "Grilled peppers and onions", price: "₹399", image: "🌶️" },
    { id: "7", name: "Chiles Rellenos", description: "Stuffed peppers with cheese", price: "₹369", image: "🌶️" },
    { id: "8", name: "Chicken Tinga", description: "Shredded chicken in tomato sauce", price: "₹319", image: "🍗" },
    { id: "9", name: "Carne Asada", description: "Grilled marinated beef", price: "₹449", image: "🥩" },
    { id: "10", name: "Churros", description: "Sweet fried pastries", price: "₹179", image: "🍯" },
  ],
  seafood: [
    { id: "1", name: "Grilled Fish", description: "Fresh fish with herbs", price: "₹449", image: "🐟" },
    { id: "2", name: "Butter Garlic Shrimp", description: "Succulent prawns in butter", price: "₹499", image: "🍤" },
    { id: "3", name: "Crab Curry", description: "Spiced crab in coconut", price: "₹549", image: "🦀" },
    { id: "4", name: "Fish Amritsari", description: "Crispy battered fish", price: "₹399", image: "🐟" },
    { id: "5", name: "Squid Pepper Fry", description: "Calamari with cracked pepper", price: "₹429", image: "🦑" },
    { id: "6", name: "Fish Tikka", description: "Marinated and grilled fish", price: "₹469", image: "🐟" },
    { id: "7", name: "Lobster Thermidor", description: "Premium lobster dish", price: "₹799", image: "🦞" },
    { id: "8", name: "Mussels Marinara", description: "Mussels in tomato sauce", price: "₹459", image: "🐚" },
    { id: "9", name: "Prawn Koliwada", description: "Spicy fried prawns", price: "₹479", image: "🍤" },
    { id: "10", name: "Pomfret Fry", description: "Whole fish crispy fry", price: "₹529", image: "🐟" },
  ],
  tandoori: [
    { id: "1", name: "Tandoori Chicken", description: "Marinated grilled chicken", price: "₹349", image: "🍗" },
    { id: "2", name: "Tandoori Paneer", description: "Cottage cheese tikka", price: "₹329", image: "🧀" },
    { id: "3", name: "Tandoori Fish", description: "Grilled fish in tandoor", price: "₹449", image: "🐟" },
    { id: "4", name: "Tandoori Prawns", description: "Jumbo prawns tandoori", price: "₹499", image: "🍤" },
    { id: "5", name: "Seekh Kebab", description: "Minced meat skewer", price: "₹349", image: "🍖" },
    { id: "6", name: "Shami Kebab", description: "Spiced meat cutlet", price: "₹279", image: "🍖" },
    { id: "7", name: "Galauti Kebab", description: "Melt-in-mouth kebab", price: "₹329", image: "🍖" },
    { id: "8", name: "Malai Tikka", description: "Cream marinated tikka", price: "₹399", image: "🍗" },
    { id: "9", name: "Hariyali Tikka", description: "Herb-infused green tikka", price: "₹349", image: "🍗" },
    { id: "10", name: "Paneer Tikka Masala", description: "Creamy tomato paneer", price: "₹379", image: "🧀" },
  ],
  noodles: [
    { id: "1", name: "Hakka Noodles", description: "Stir-fried chow mein style", price: "₹249", image: "🍜" },
    { id: "2", name: "Ramen", description: "Japanese noodles in broth", price: "₹319", image: "🍜" },
    { id: "3", name: "Pad Thai", description: "Thai sweet and spicy noodles", price: "₹299", image: "🍜" },
    { id: "4", name: "Schezwan Noodles", description: "Spicy chili noodles", price: "₹269", image: "🍜" },
    { id: "5", name: "Butter Garlic Noodles", description: "Creamy garlic noodles", price: "₹279", image: "🍜" },
    { id: "6", name: "Chow Fun", description: "Thick stir-fried noodles", price: "₹289", image: "🍜" },
    { id: "7", name: "Veg Hakka", description: "Vegetable chow mein", price: "₹229", image: "🍜" },
    { id: "8", name: "Chicken Noodles", description: "Chicken with noodles", price: "₹329", image: "🍜" },
    { id: "9", name: "Spicy Ramyeon", description: "Korean spicy instant noodles", price: "₹259", image: "🍜" },
    { id: "10", name: "Noodle Soup", description: "Warm noodles in broth", price: "₹199", image: "🍜" },
  ],
  rice: [
    { id: "1", name: "Fried Rice", description: "Egg fried rice with vegetables", price: "₹249", image: "🍚" },
    { id: "2", name: "Chicken Fried Rice", description: "Rice with chicken pieces", price: "₹299", image: "🍚" },
    { id: "3", name: "Vegetable Fried Rice", description: "Mixed veggies fried rice", price: "₹229", image: "🍚" },
    { id: "4", name: "Shrimp Fried Rice", description: "Prawn fried rice", price: "₹349", image: "🍚" },
    { id: "5", name: "Mushroom Rice", description: "Sautéed mushroom rice", price: "₹279", image: "🍚" },
    { id: "6", name: "Paneer Rice", description: "Cottage cheese fried rice", price: "₹269", image: "🍚" },
    { id: "7", name: "Peas Rice", description: "Green peas with rice", price: "₹219", image: "🍚" },
    { id: "8", name: "Coconut Rice", description: "Fragrant coconut infused", price: "₹259", image: "🍚" },
    { id: "9", name: "Garlic Rice", description: "Aromatic garlic rice", price: "₹249", image: "🍚" },
    { id: "10", name: "Mixed Rice", description: "Mixed vegetables and rice", price: "₹289", image: "🍚" },
  ],
  breads: [
    { id: "1", name: "Naan", description: "Traditional Indian flatbread", price: "₹69", image: "🍞" },
    { id: "2", name: "Butter Naan", description: "Naan with butter", price: "₹79", image: "🍞" },
    { id: "3", name: "Garlic Naan", description: "Naan with garlic and butter", price: "₹89", image: "🍞" },
    { id: "4", name: "Roti", description: "Whole wheat flatbread", price: "₹29", image: "🍞" },
    { id: "5", name: "Paratha", description: "Layered flatbread", price: "₹49", image: "🍞" },
    { id: "6", name: "Stuffed Paratha", description: "Paratha with filling", price: "₹69", image: "🍞" },
    { id: "7", name: "Rumali Roti", description: "Thin paper-thin bread", price: "₹39", image: "🍞" },
    { id: "8", name: "Puri", description: "Deep fried bread", price: "₹49", image: "🍞" },
    { id: "9", name: "Kulcha", description: "Stuffed Indian bread", price: "₹79", image: "🍞" },
    { id: "10", name: "Bhatura", description: "Large fried bread", price: "₹59", image: "🍞" },
  ],
  appetizer: [
    { id: "1", name: "Samosa", description: "Crispy fried pastry", price: "₹79", image: "🥟" },
    { id: "2", name: "Pakora", description: "Vegetable fritter", price: "₹99", image: "🥟" },
    { id: "3", name: "Paneer Tikka", description: "Grilled cottage cheese", price: "₹199", image: "🧀" },
    { id: "4", name: "Chicken Wings", description: "Spiced grilled wings", price: "₹249", image: "🍗" },
    { id: "5", name: "Momos", description: "Steamed dumplings", price: "₹149", image: "🥟" },
    { id: "6", name: "Bruschetta", description: "Toasted bread with toppings", price: "₹129", image: "🍞" },
    { id: "7", name: "Fish Fry", description: "Fried fish pieces", price: "₹229", image: "🐟" },
    { id: "8", name: "Crispy Onions", description: "Fried onion rings", price: "₹109", image: "🧅" },
    { id: "9", name: "Corn Fritters", description: "Corn and cheese bites", price: "₹139", image: "🌽" },
    { id: "10", name: "Spinach Dip", description: "Creamy spinach with bread", price: "₹169", image: "🥬" },
  ],
  beverage: [
    { id: "1", name: "Lassi", description: "Yogurt drink", price: "₹99", image: "🥤" },
    { id: "2", name: "Mango Lassi", description: "Mango yogurt drink", price: "₹129", image: "🥤" },
    { id: "3", name: "Cold Coffee", description: "Iced coffee beverage", price: "₹129", image: "☕" },
    { id: "4", name: "Iced Tea", description: "Chilled tea with lemon", price: "₹79", image: "🍵" },
    { id: "5", name: "Fresh Juice", description: "Orange or apple juice", price: "₹99", image: "🧃" },
    { id: "6", name: "Smoothie", description: "Berry or fruit smoothie", price: "₹149", image: "🧃" },
    { id: "7", name: "Masala Tea", description: "Spiced Indian tea", price: "₹59", image: "🍵" },
    { id: "8", name: "Hot Chocolate", description: "Warm chocolate drink", price: "₹119", image: "☕" },
    { id: "9", name: "Buttermilk", description: "Chilled spiced buttermilk", price: "₹69", image: "🥛" },
    { id: "10", name: "Coconut Water", description: "Fresh tender coconut", price: "₹89", image: "🥥" },
  ],
}

interface MenuItemsProps {
  category: string
}

export default function MenuItems({ category }: MenuItemsProps) {
  const items = menuData[category] || []

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-card hover:bg-card/80 border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
          >
            <div className="flex h-24">
              <div className="w-24 h-24 flex items-center justify-center text-5xl bg-secondary/30">{item.image}</div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                </div>
                <p className="text-primary font-bold text-sm">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
