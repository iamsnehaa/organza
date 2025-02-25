import { useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const groceriesData: Product[] = [
  { id: "1", name: "Apples", category: "Fruits", price: 2.5, image: "/apples.jpg" },
  { id: "2", name: "Bananas", category: "Fruits", price: 1.8, image: "/bananas.jpg" },
  { id: "3", name: "Carrots", category: "Vegetables", price: 1.2, image: "/carrots.jpg" },
  { id: "4", name: "Tomatoes", category: "Vegetables", price: 2.0, image: "/tomatoes.jpg" },
  { id: "5", name: "Milk", category: "Dairy", price: 3.0, image: "/milk.jpg" },
  { id: "6", name: "Cheese", category: "Dairy", price: 4.5, image: "/cheese.jpg" },
];

const Groceries = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGroceries = groceriesData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Groceries</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search groceries..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sectioned Grocery List */}
      <div className="space-y-8">
        {["Fruits", "Vegetables", "Dairy"].map((category) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredGroceries
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id} className="p-4 border rounded-lg shadow-md">
                    <Image src={product.image} alt={product.name} width={150} height={150} className="rounded-md" />
                    <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                    <p className="text-green-600 font-bold">${product.price}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groceries;
