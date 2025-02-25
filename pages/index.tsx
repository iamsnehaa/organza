import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export default function HomePage() {
  // ✅ Initialize state before using it
  const [bestSellingProducts, setBestSellingProducts] = useState<Product[]>([]);
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await res.json();

        // ✅ Ensure the data exists before slicing
        setBestSellingProducts(data.slice(0, 4) || []);
        setTrendingProducts(data.slice(4, 8) || []);
      } catch (err) {
        setError("Unable to load products. Please try again later.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <Banner />

      {/* ✅ Loading and error handling */}
      {loading && <p className="text-center text-gray-500">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* ✅ Only render lists if there’s no loading/error */}
      {!loading && !error && (
        <>
          <ProductList title="Best Selling Products" products={bestSellingProducts} />
          <ProductList title="Trending Products" products={trendingProducts} />
        </>
      )}
    </div>
  );
}
