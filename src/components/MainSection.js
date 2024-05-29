import React from "react";

const MainSection = () => {
  return (
    <section
      className="flex justify-center p-5 items-center h-screen bg-cover bg-center bg-no-repeat rounded-md"
      style={{
        backgroundImage:
          "url('https://www.trulia.com/images/app-shopping/homePage/extraLarge.jpg')",
      }}
    >
      <div className="bg-transperent p-8 rounded-lg w-50 text-center">
        <h1 className="text-5xl font-bold mb-2  text-white">
          Discover a place you'll love to live{" "}
        </h1>
        <div className="bg-transparent p-8 rounded-lg text-center">
          <div className="flex justify-center items-center space-x-0">
            <button className="bg-gray-500 text-white px-4 py-2  hover:bg-gray-800 hover:text-blue-500 transition duration-300">
              Buy
            </button>
            <button className="bg-gray-500 text-white px-4 py-2  hover:bg-gray-800 hover:text-blue-500 transition duration-300">
              Rent
            </button>
            <button className="bg-gray-500 text-white px-4 py-2  hover:bg-gray-800 hover:text-blue-500 transition duration-300">
              Mortgage
            </button>
          </div>
        </div>
        {/* Google Search Component */}
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-l-md w-full"
            placeholder="Search Google"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-r-md">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
