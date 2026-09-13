import React from 'react'

const StudentCard = () => {
  return (
    <div>
       <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200">

      {/* Image */}
      <div className="w-full h-56 sm:h-64">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Name */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Yashwant Kumar
        </h2>

        {/* Year */}
        <p className="mt-1 text-sm text-gray-500">
          2026
        </p>

        {/* Post */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          Full Stack Developer
        </p>

      </div>
    </div>
    </div>
  )
}

export default StudentCard
