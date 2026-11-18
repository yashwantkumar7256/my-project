import React from "react";

const CoursesCard = ({ data }) => {
  return (
    <div
      className="
        group
        w-full
        max-w-sm
        bg-white
        rounded-2xl
        overflow-hidden
        border border-gray-200
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-500
      "
    >

      {/* Image Section */}

      <div className="relative h-56 overflow-hidden">

        <img
          src={data.imgUrl}
          alt="Course"
          loading="lazy"
          className="
            w-full h-full
            object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Duration Badge */}

        <div className="
          absolute top-4 left-4
          bg-blue-600 text-white
          px-3 py-1.5
          rounded-full
          text-xs font-semibold
        ">
          {data.duration}
        </div>

        {/* Price */}

        <div className="
          absolute bottom-4 right-4
          bg-amber-400 text-black
          px-4 py-2
          rounded-xl
          font-bold text-lg
          shadow-lg
        ">
          ₹{data.price}
        </div>

      </div>


      {/* Card Content */}

      <div className="p-5">

        {/* Trainer */}

        <div className="mb-5">

          <p className="text-xs text-gray-400 uppercase tracking-widest">
            Course Trainer
          </p>

          <h2 className="text-xl font-bold text-gray-800 capitalize mt-1">
            {data.tranner}
          </h2>

        </div>


        {/* Course Details */}

        <div className="space-y-4">

          {/* Timing */}

          <div className="flex items-start gap-3">

            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
              🕒
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Class Timing
              </p>

              <p className="text-sm font-semibold text-gray-700">
                {data.timing}
              </p>
            </div>

          </div>


          {/* Location */}

          <div className="flex items-start gap-3">

            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
              📍
            </div>

            <div className="min-w-0">
              <p className="text-xs text-gray-400">
                Location
              </p>

              <p className="text-sm font-semibold text-gray-700 break-words capitalize">
                {data.location}
              </p>
            </div>

          </div>


          {/* Validity */}

          <div className="flex items-start gap-3">

            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
              🎓
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Validity
              </p>

              <p className="text-sm font-semibold text-gray-700">
                {data.validity}
              </p>
            </div>

          </div>

        </div>


        {/* Divider */}

        <div className="border-t border-gray-100 my-5" />


        {/* Footer */}

        <div className="flex items-center justify-between gap-3">

          <div>
            <p className="text-xs text-gray-400">
              Course Fee
            </p>

            <p className="text-2xl font-extrabold text-blue-700">
              ₹{data.price}
            </p>
          </div>

          <button
            type="button"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-5 py-3
              rounded-xl
              text-sm font-semibold
              transition-all duration-300
              active:scale-95
            "
          >
            View Details →
          </button>

        </div>

      </div>

    </div>
  );
};

export default CoursesCard;