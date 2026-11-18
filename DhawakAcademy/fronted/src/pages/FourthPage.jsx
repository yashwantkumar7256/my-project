import React from "react";

const FourthPage = () => {

  const sections = [
    {
      title: "Indian Army & Agniveer Preparation",
      subtitle: "DISCIPLINE • COURAGE • COMMITMENT",
      description:
        "Turn your dream of wearing the Indian Army uniform into reality. Get professional physical training for running, stamina, strength, endurance and complete recruitment preparation under experienced trainers.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILfyM-xa6cMm7dAaL5hw2Y8Bh5EPFtEJP6uceqXab5J6IM60GEwqFcuQu&s=10",
      points: [
        "Running & Endurance Training",
        "Physical Fitness & Stamina",
        "Army Recruitment Preparation",
      ],
    },

    {
      title: "Police & Home Guard Training",
      subtitle: "TRAIN HARD • STAY STRONG",
      description:
        "Prepare yourself for Police and Home Guard recruitment with structured physical training. Improve your running speed, physical strength, flexibility and overall fitness to meet recruitment standards.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5JVWylIbWEyQ8il_fKzzTDk1H-pRsm7hvk7BL3-j5w&s=10",
      points: [
        "Police Physical Test Preparation",
        "Running & Physical Efficiency",
        "Height & Fitness Guidance",
      ],
    },

    {
      title: "Paramilitary Forces Preparation",
      subtitle: "AIM HIGH • SERVE THE NATION",
      description:
        "Get dedicated physical preparation for forces like BSF, CRPF, CISF, ITBP and SSB. Our training focuses on physical endurance, discipline, strength and the confidence required for recruitment.",
      image:
        "https://media.gettyimages.com/id/2256487252/photo/indian-army-officers-take-part-in-a-rehearsal-for-the-republic-day-parade-in-kolkata-india-on.jpg?s=612x612&w=gi&k=20&c=vzAw_rX1h5wWGhwmFvgmlWGM_FoodnBoAaig-AZyRIg=",
      points: [
        "Physical Endurance Training",
        "Strength & Flexibility",
        "Recruitment Fitness Preparation",
      ],
    },
  ];

  return (

    <div className="min-h-screen bg-[#101810] text-white py-14">

      {/* Heading */}

      <div className="text-center px-4 mb-14">

        <p className="text-orange-500 font-bold tracking-[4px] text-sm">
          YOUR DREAM. OUR MISSION.
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4">
          TRAIN FOR THE <span className="text-orange-500">UNIFORM</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm sm:text-base leading-7">
          Professional physical training for Army, Police, Home Guard
          and Paramilitary recruitment. Prepare yourself to serve the nation.
        </p>

      </div>


      {/* Training Sections */}

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 lg:space-y-24">

        {sections.map((item, index) => (

          <div
            key={index}
            className={`flex flex-col ${
              index % 2 !== 0
                ? "lg:flex-row-reverse"
                : "lg:flex-row"
            } items-center gap-8 lg:gap-14`}
          >

            {/* Image */}

            <div className="w-full lg:w-1/2 h-[260px] sm:h-[350px] lg:h-[420px] relative overflow-hidden rounded-xl group">

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-5 left-5">

                <span className="bg-orange-500 text-black px-4 py-2 text-xs font-extrabold tracking-wider">
                  PHYSICAL TRAINING
                </span>

              </div>

            </div>


            {/* Content */}

            <div className="w-full lg:w-1/2">

              <p className="text-orange-500 font-bold tracking-widest text-xs sm:text-sm">
                {item.subtitle}
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-4 leading-tight">
                {item.title}
              </h2>

              <p className="text-gray-400 leading-7 mt-5 text-sm sm:text-base">
                {item.description}
              </p>


              {/* Training Points */}

              <div className="mt-6 space-y-3">

                {item.points.map((point, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <span className="text-orange-500 text-lg">
                      ✓
                    </span>

                    <p className="text-gray-200 text-sm sm:text-base">
                      {point}
                    </p>

                  </div>

                ))}

              </div>


              {/* Bottom Line */}

              <div className="mt-8 h-1 w-20 bg-orange-500 rounded-full"></div>

            </div>

          </div>

        ))}

      </div>


      {/* Bottom Banner */}

      <div className="max-w-6xl mx-auto mt-20 px-5">

        <div className="bg-[#263526] border border-green-900 rounded-2xl p-8 sm:p-12 text-center">

          <p className="text-orange-500 font-bold tracking-[3px] text-xs sm:text-sm">
            THE UNIFORM IS NOT JUST A DRESS
          </p>

          <h2 className="text-2xl sm:text-4xl font-extrabold mt-4">
            IT'S A MATTER OF PRIDE & HONOUR.
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Start your journey today. Train with discipline,
            build your strength and prepare yourself to serve the nation.
          </p>

        </div>

      </div>

    </div>

  );
};

export default FourthPage;