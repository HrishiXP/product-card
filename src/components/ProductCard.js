import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    fetch("https://dummyjson.com/carts")
      .then((response) => response.json())
      .then((data) => {
        // Get the first cart's products
        setProducts(data.carts[0].products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-xs w-full sm:w-80 flex flex-col justify-between rounded overflow-hidden shadow-lg bg-white border hover:shadow-xl transform transition hover:scale-105"
        >
          {/* Image */}
          <img
            className="w-full h-48 object-cover"
            src={product.thumbnail}
            alt={product.title}
          />

          {/* Product Details */}
          <div className="flex-grow px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{product.title}</h2>
            <p className="text-gray-700 text-base">
              Price: ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 text-base">
              Discount: {product.discountPercentage}%
            </p>
            <p className="text-gray-700 text-base">
              Final Price: ${product.discountedTotal.toFixed(2)}
            </p>
          </div>

          {/* Buy Now Button */}
          <div className="px-6 py-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
