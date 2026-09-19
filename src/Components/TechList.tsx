import React from "react";

const TechList = () => {
  return (
    <div>
      <div className="flex gap-6">
        {/* Left: 75% */}
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="border rounded-lg p-4">Card 1</div>

            {/* Card 2 */}
            <div className="border rounded-lg p-4">Card 2</div>

            {/* Card 3 */}
            <div className="border rounded-lg p-4">Card 3</div>
          </div>
        </div>

        {/* Right: 25% */}
        <div className="w-1/4">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Selected Card</h2>

            {/* Selected card will appear here */}
            <div>Selected Card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechList;
