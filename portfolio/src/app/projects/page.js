// Projects.js
import Menu from "@/components/Menu";
import React from "react";
import Card from "@/components/Card";

function Projects() {
  const titleList = [
    "Data Visualizations",
    "Web Development",
    "Object-Oriented Programming",
    "Time Series Forecasting",
  ];

  const imageList = [
    "/images/data_viz.jpeg",
    "/images/web_development.jpeg",
    "/images/python_class.jpeg",
    "/images/time_series.jpeg",
  ];

  const descriptionList = [
    "in R, Power BI & Tableau",
    "in React.js (Javascript)",
    "in Python",
    "in Python",
  ];
  // Generate cardsData using the titles from the list
  const cardsData = titleList.map((title, index) => ({
    imageSrc: imageList[index],
    title,
    description: descriptionList[index],
  }));

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
