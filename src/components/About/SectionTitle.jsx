import React from 'react'

const SectionTitle = ({ title }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-3">{title}</h2>
    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
  </div>
);

export default SectionTitle