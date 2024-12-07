import React from "react";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="p-6 text-center bg-blue-600 text-white text-3xl font-bold">
        Product Cards
      </header>
      <main className="container mx-auto">
        <ProductCard />
      </main>
    </div>
  );
}

export default App;
