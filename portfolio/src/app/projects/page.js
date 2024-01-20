// Projects.js
import Menu from "@/components/Menu";
import React from "react";
import Card from "@/components/Card";

function Projects() {
  const cardsData = [
    {
      imageSrc: "https://source.unsplash.com/random/400x200",
      title: "Card Title 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, dolores?",
    },
    // Add more card data as needed
  ];

  // Duplicate the card data to have a total of 8 cards
  const duplicatedCardsData = Array.from(
    { length: 4 },
    (_, index) => cardsData[index % cardsData.length]
  );

  return (
    <main className="bg-green-50">
      <div className="flex flex-wrap xl:w-10/12 h-screen">
      <Menu />

        <div className="w-full mt-16 md:w-1/3 lg:w-1/4"></div>
        <div className="w-full md:w-2/3 lg:w-3/4 flex flex-wrap">
          {duplicatedCardsData.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
      </main>
  );
}

export default Projects;
