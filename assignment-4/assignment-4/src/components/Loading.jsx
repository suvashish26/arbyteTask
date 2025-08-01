import { useEffect, useState } from "react";

const Loading = () => {
  const items = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 99 },
    { id: 2, name: "Yoga Mat", category: "Fitness", price: 25 },
    { id: 3, name: "Coffee Maker", category: "Home", price: 45 },
    { id: 4, name: "Bluetooth Speaker", category: "Electronics", price: 70 },
    { id: 5, name: "Water Bottle", category: "Accessories", price: 15 },
    { id: 6, name: "Running Shoes", category: "Footwear", price: 120 },
    { id: 7, name: "Sunglasses", category: "Fashion", price: 60 },
    { id: 8, name: "Gaming Mouse", category: "Electronics", price: 49 },
    { id: 9, name: "Backpack", category: "Travel", price: 35 },
    { id: 10, name: "Notebook", category: "Stationery", price: 5 },
  ];
  //     {items.map(item)=>(
  //         <ul>
  //        <li>
  //         {item.name}
  //         {item.category}
  //         </li>
  //         </ul>
  //     )}
  // )
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Set timeout for 2 seconds (2000 ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear timeout if the component unmounts before 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-xl font-semibold">
      {loading ? (
        <p className="text-blue-500 animate-pulse">Loading...</p>
      ) : (
        <ul className="list-disc text-left space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="bg-blue-50 rounded-lg px-4 py-2 shadow hover:bg-blue-100 transition flex flex-col sm:flex-row sm:items-center gap-2"
            >
              <span className="font-bold text-blue-700">{item.name}</span>
              <span className="text-gray-500 hidden sm:inline">|</span>
              <span className="text-purple-700">{item.category}</span>
              <span className="ml-auto text-xs bg-blue-200 text-blue-800 rounded px-2 py-1">
                ${item.price}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Loading;
