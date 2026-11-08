import React from "react";

const TranningPage = () => {

  const items = [
    {
      id: 1,
      title: "Web Development",
      image: "https://picsum.photos/seed/web/800/600",
      size: "col-span-2 row-span-2",
    },
    {
      id: 2,
      title: "UI/UX Design",
      image: "https://picsum.photos/seed/design/800/600",
      size: "col-span-1 row-span-1",
    },
    {
      id: 3,
      title: "Programming",
      image: "https://picsum.photos/seed/code/800/600",
      size: "col-span-2 row-span-1",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      image: "https://picsum.photos/seed/ai/800/600",
      size: "col-span-1 row-span-2",
    },
    {
      id: 5,
      title: "Database",
      image: "https://picsum.photos/seed/database/800/600",
      size: "col-span-2 row-span-1",
    },
    {
      id: 6,
      title: "Backend Development",
      image: "https://picsum.photos/seed/backend/800/600",
      size: "col-span-1 row-span-1",
    },
    {
      id: 7,
      title: "Frontend Development",
      image: "https://picsum.photos/seed/frontend/800/600",
      size: "col-span-2 row-span-1",
    },
    {
      id: 8,
      title: "Cyber Security",
      image: "https://picsum.photos/seed/security/800/600",
      size: "col-span-1 row-span-1",
    },
    {
      id: 9,
      title: "Cloud Computing",
      image: "https://picsum.photos/seed/cloud/800/600",
      size: "col-span-1 row-span-1",
    },
    {
      id: 10,
      title: "App Development",
      image: "https://picsum.photos/seed/app/800/600",
      size: "col-span-2 row-span-1",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10 sm:px-8">

      {/* Heading */}

      <div className="text-center mb-10">

        <p className="text-amber-400 uppercase tracking-[5px] text-sm mb-3">
          Explore Our Courses
        </p>

        <h1 className="text-3xl sm:text-5xl font-bold">
          Training <span className="text-amber-400">Time</span>
        </h1>

        <p className="text-gray-400 mt-4">
          Explore our professional training programs.
        </p>

      </div>


      {/* Responsive Bento Grid */}

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-5
          auto-rows-[150px]
          sm:auto-rows-[180px]
          lg:auto-rows-[190px]
          gap-3
          sm:gap-4
          max-w-7xl
          mx-auto
        "
      >

        {items.map((item) => (

          <div
            key={item.id}
            className={`
              relative
              overflow-hidden
              rounded-2xl
              group
              cursor-pointer
              ${item.size}
            `}
          >

            {/* Background Image */}

            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                ease-in-out
                group-hover:scale-110
              "
            />


            {/* Dark Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-black/30
                group-hover:bg-black/50
                transition-all
                duration-500
              "
            />


            {/* Content */}

            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                justify-end
                p-4
                sm:p-6
              "
            >

              <span className="
                text-xs
                text-amber-400
                font-semibold
                mb-2
              ">
                0{item.id}
              </span>

              <h2
                className="
                  text-sm
                  sm:text-lg
                  md:text-xl
                  font-bold
                  translate-y-2
                  group-hover:translate-y-0
                  transition-transform
                  duration-500
                "
              >
                {item.title}
              </h2>

              <div
                className="
                  w-0
                  h-1
                  bg-amber-400
                  mt-3
                  group-hover:w-16
                  transition-all
                  duration-500
                  rounded-full
                "
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default TranningPage;