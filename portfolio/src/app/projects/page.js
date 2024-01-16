// Projects.js
import Menu from "@/components/Menu";
import React from "react";
import Card from "@/components/Card";

function Projects() {
  const cardsData = [
    {
      imageSrc: "https://source.unsplash.com/random/400x200",
      title: "Card Title 1",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, dolores?",
    },
    // Add more card data as needed
  ];

  // Duplicate the card data to have a total of 8 cards
  const duplicatedCardsData = Array.from({ length: 8 }, (_, index) => cardsData[index % cardsData.length]);

  return (
    <>
      <main className="flex flex-wrap">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Menu />
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 flex flex-wrap">
          {duplicatedCardsData.map((card, index) => (
            <div key={index} className="w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 p-2">
              <Card
                {...card}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Projects;
