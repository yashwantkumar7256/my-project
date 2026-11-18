import React, { useEffect, useState } from "react";
import CoursesCard from "../components/CoursesCard";
import api from "../api";

const ThirdPage = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {

    try {

      setLoading(true);
      setError("");

      const res = await api.get("/api/course");

      setData(res.data.data);

    } catch (err) {

      console.log(err);

      setError("Unable to fetch achievements.");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    getData();
  }, []);

  return (

    <section className="min-h-screen bg-slate-50 py-12 px-4 sm:px-8">

      {/* Heading */}

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <p className="
            text-blue-600
            uppercase
            tracking-[4px]
            text-xs
            sm:text-sm
            font-bold
            mb-3
          ">
            Our Pride
          </p>

          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-extrabold
            text-slate-900
          ">
            Student <span className="text-blue-600">Achievements</span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Our students are making us proud through their dedication,
            hard work and remarkable achievements.
          </p>

        </div>


        {/* Loading */}

        {loading && (

          <div className="flex justify-center items-center py-20">

            <div className="
              w-10 h-10
              border-4
              border-blue-200
              border-t-blue-600
              rounded-full
              animate-spin
            " />

          </div>

        )}


        {/* Error */}

        {error && (

          <div className="text-center text-red-500 py-10">
            {error}
          </div>

        )}


        {/* Cards */}

        {!loading && !error && (

          <>

            {data.length > 0 ? (

              <div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  gap-6
  px-4
  justify-items-center
">

  {data.map((item) => (
    <CoursesCard
      key={item._id}
      data={item}
    />
  ))}

</div>

            ) : (

              <div className="text-center py-20">

                <h2 className="text-xl font-semibold text-gray-600">
                  No achievements available
                </h2>

                <p className="text-gray-400 mt-2">
                  Please check again later.
                </p>

              </div>

            )}

          </>

        )}

      </div>

    </section>

  );

};

export default ThirdPage;