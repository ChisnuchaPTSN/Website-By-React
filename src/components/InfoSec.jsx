import React from 'react';

function InfoSec() {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row items-center p-6 sm:p-16 space-y-6 sm:space-y-0">

      {/* Text Section */}
      <div className="w-full sm:w-1/2 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Product 2</h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
          voluptate necessitatibus? Asperiores, ut. Rerum ex unde et, magnam
          dolorem accusantium.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1682530016814-6a1c1311cd6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
          alt="Food"
          className="w-full h-auto rounded-lg"
        />
      </div>

    </div>
  );
}

export default InfoSec;
