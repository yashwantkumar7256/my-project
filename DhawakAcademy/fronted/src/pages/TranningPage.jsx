import { img } from "motion/react-client";
import React from "react";

const TranningPage = () => {
  const cards = [
    {
      id: 1,
      area: "top-left",
      title: "Physical Training",
      desc: "Build your physical strength, stamina and endurance with professional guidance.",
      color: "bg-amber-500",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10"
    },
    {
      id: 2,
      area: "top-right",
      title: "Army Preparation",
      desc: "Get prepared for Army recruitment with disciplined training and expert guidance.",
      color: "bg-gray-950",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJk2capVly88xUqejWgF-bWUuMCKpkTUaRf0BLz3d-bQ&s=10"
    },
    {
      id: 3,
      area: "center-side-left",
      title: "Running Practice",
      desc: "Improve your running speed and stamina through daily practice.",
      color: "bg-green-600",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwubF0kpn8gkvNz98JyXpLncyGYSqq9BEEB3XA5PeAQ&s=10"
    },
    {
      id: 4,
      area: "center",
      title: "Special Training",
      desc: "Experience professional physical training designed for defence and police recruitment.",
      color: "bg-orange-900",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzFvL6KzmildBKJqFfj1jZ-J_MQYgb85TIJj48ZYOfA&s=10"
    },
    {
      id: 5,
      area: "center-side-right",
      title: "Fitness Training",
      desc: "Develop strength, flexibility and overall physical fitness.",
      color: "bg-blue-800",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLsAYajqTaJgkXOVXkQ2RKcyWeatgCAeSiAhmFB_y1w&s=10"
    },
    {
      id: 6,
      area: "bottom-left",
      title: "Police Training",
      desc: "Prepare yourself for police physical tests with expert trainers.",
      color: "bg-pink-700",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxEfkJ9sHly3WR1gCY0MsEbHg4lqiYajJcbuW1FEHSA&s=10"
    },
    {
      id: 7,
      area: "bottom-middle",
      title: "Ground Practice",
      desc: "Practice outdoor physical activities in a disciplined environment.",
      color: "bg-gray-900",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNc_UZnzVydxKkaz7mfHIeR57-ZK4UcmBYK3mfk--qw&s=10"
    },
    {
      id: 8,
      area: "bottom-right",
      title: "Success Training",
      desc: "Stay focused, motivated and ready to achieve your recruitment goals.",
      color: "bg-green-900",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-0vQ1zC7n51LvvBUU97A4yX3wFN4ipXDEYPxtApSow&s=10'
    },
  ];

   return (
    <div className="w-full min-h-screen px-3 sm:px-6 py-10 bg-slate-100 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Teaching <span className="text-orange-600">Time</span>
        </h1>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Discipline, Dedication and Determination
        </p>

      </div>


      {/* Responsive Grid */}
      <section
        className="
          w-full
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3

          xl:grid-cols-[30fr_15fr_11fr_11fr_30fr]

          grid-rows-none
          xl:grid-rows-[24vh_24vh_24vh_24vh]

          gap-3 sm:gap-4

          xl:[grid-template-areas:'top-left_top-left_top-left_top-right_top-right'_'center-side-left_center_center_center_center-side-right'_'center-side-left_center_center_center_center-side-right'_'bottom-left_bottom-middle_bottom-middle_bottom-middle_bottom-right']
        "
      >

        {cards.map((card) => (

          <div
            key={card.id}

            style={{
              "--area": card.area,
            }}

            className={`
              group relative overflow-hidden
              rounded-xl
              ${card.color}
              text-white

              min-h-[220px]
              sm:min-h-[250px]
              md:min-h-[280px]
              xl:min-h-0

              xl:[grid-area:var(--area)]

              transition-all duration-700 ease-in-out

              hover:scale-[1.03]
              hover:shadow-2xl
              hover:z-10

              cursor-pointer
            `}
          >

            {/* Background Image */}
            <img
              src={card.img}
              alt={card.title}

              className="
                absolute inset-0
                w-full h-full
                object-cover
                object-center

                transition-transform
                duration-700
                ease-in-out

                group-hover:scale-110
              "
            />


            {/* Background Overlay */}
            <div
              className="
                absolute inset-0 z-[1]

                bg-black/20
                group-hover:bg-black/50

                transition-all
                duration-700
              "
            />


            {/* Card Number */}
            <span
              className="
                absolute top-4 left-4 z-[2]
                text-3xl font-bold
                text-white
                opacity-80
              "
            >
            
            </span>


            {/* Hover Content */}
            <div
              className="
                absolute bottom-0 left-0
                w-full z-[2]

                bg-orange-500 group-hover:p-2
                 sm:p-5 opacity-60

                translate-y-[65%]
                group-hover:translate-y-0

                transition-transform
                duration-700
                delay-100
                ease-in-out
              "
            >

              {/* Title */}
              <h2
                className="hidden group-hover:block
                  text-xl sm:text-2xl
                  font-bold
                  text-black
                
                "
              >
                {card.title}
              </h2>


              {/* Description */}
              <p
                className=" hidden group-hover:block
                  text-white
                  text-sm sm:text-base
                  leading-relaxed

                  opacity-0
                  group-hover:opacity-100

                  transition-opacity
                  duration-500
                  delay-300
                  
                "
              >
                {card.desc}
              </p>

            </div>

          </div>

        ))}

      </section>

    </div>
  );
};

export default TranningPage;