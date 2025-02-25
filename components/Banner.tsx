import Image from "next/image";
import { Truck, Leaf, Tag, RefreshCw } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative w-full bg-[#FAF7F0] flex flex-col items-center justify-center px-10 overflow-hidden">
      <div className="flex items-center justify-between w-full max-w-7xl h-[750px]">
        
        
        <div className="w-1/2 flex justify-center">
          <Image 
            src="/organic-products-hero.png" 
            alt="product-hero" 
            width={500} 
            height={500} 
            className="object-contain"
          />
        </div>

       
        <div className="w-1/2 text-black">
          <h1 className="text-5xl font-bold">Join the Organic Movement!</h1>
          <p className="mt-4 text-xl">Discover the best products at unbeatable prices</p>
          <button className="mt-6 bg-white text-black px-8 py-3 rounded-md font-semibold shadow-md hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </div>

      
      <Image 
        src="/logo-leaf-new.png" 
        alt="leaf" 
        width={150} 
        height={150} 
        className="absolute top-10 left-60 w-12 "
      />
      <Image 
        src="/logo-leaf-new.png" 
        alt="mirrored-leaf" 
        width={80} 
        height={80} 
        className="absolute top-9 left-16 w-20 transform scale-x-[-1]"
      />
      <Image 
        src="/logo-leaf-new.png" 
        alt="leaf" 
        width={200} 
        height={200} 
        className="absolute bottom-10 right-10 w-16 "
      />
      <Image 
        src="/logo-leaf-new.png" 
        alt="leaf" 
        width={100} 
        height={100} 
        className="absolute top-1/3 right-1/2 w-14 "
      />

          
<div className="w-full bg-[#E9F5DB] py-8 mt-6 shadow-lg rounded-lg">
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black text-xl font-medium text-center px-6">

          
         
          <div className="flex flex-col items-center bg-white/20 p-6 rounded-lg shadow-md">
            <Truck className="w-8 h-8 text-green-700 mb-2" />
            <span>Free Shipping</span>
          </div>

          
          <div className="flex flex-col items-center bg-white/20 p-6 rounded-lg shadow-md">
            <Leaf className="w-8 h-8 text-green-700 mb-2" />
            <span>Certified Organic</span>
          </div>

          
          <div className="flex flex-col items-center bg-white/20 p-6 rounded-lg shadow-md">
            <Tag className="w-8 h-8 text-green-700 mb-2" />
            <span>Huge Savings</span>
          </div>

          
          <div className="flex flex-col items-center bg-white/20 p-6 rounded-lg shadow-md">
            <RefreshCw className="w-8 h-8 text-green-700 mb-2" />
            <span>Easy Returns</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Banner;
