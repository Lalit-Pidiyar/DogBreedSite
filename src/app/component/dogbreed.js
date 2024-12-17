'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const DogBreedList = () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCard = (breedId) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(breedId)) {
        newSet.delete(breedId);
      } else {
        newSet.add(breedId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dogapi.dog/api/v2/breeds');
        if (!response.ok) {
          throw new Error('Unable to retrieve breed data. Please try again later.');
        }
        const data = await response.json();
        setBreeds(data.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching breed data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg font-semibold">Loading breed information...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-600 font-semibold">{error}</div>
      </div>
    );
  }

  const filteredBreeds = breeds.filter((breed) =>
    breed.attributes.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 bg-gray-50">
      <div className="my-6 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search dog breeds..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg 
            border border-purple-200 
            focus:ring-2 focus:ring-purple-500 
            focus:border-purple-500 
            focus:outline-none 
            bg-white shadow-sm
            text-purple-900
            placeholder-purple-400
            font-medium"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredBreeds.map((breed) => {
          const isExpanded = expandedCards.has(breed.id);
          
          return (
            <div 
              key={breed.id} 
              className="bg-white border border-purple-100 rounded-lg p-6 
                hover:shadow-xl transition-all duration-300 ease-in-out
                transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-bold mb-3 text-purple-900 
                hover:text-purple-700 transition-colors duration-200">
                {breed.attributes.name}
              </h2>

              <p className={`text-gray-700 mb-4 transition-all duration-300 ease-in-out
                ${isExpanded ? 'h-auto' : 'line-clamp-3'}`}>
                {breed.attributes.description || 'No description available'}
              </p>

              <div className="flex flex-col space-y-3">
                <span className="text-sm font-medium text-purple-700 
                  hover:text-purple-900 transition-colors duration-200">
                  Average Lifespan: {breed.attributes.life.min}-{breed.attributes.life.max} years
                </span>

                {isExpanded && (
                  <div className="mt-4 space-y-4 border-t border-purple-100 pt-4
                    animate-fadeIn">
                    <h3 className="font-semibold text-lg text-purple-900">Additional Information</h3>

                    <div className="bg-purple-50 p-4 rounded-lg space-y-3 
                      hover:bg-purple-100 transition-colors duration-200">
                      <h4 className="font-medium text-purple-800">Weight Range</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-purple-600">Male Weight:</p>
                          <p className="font-medium text-purple-900">
                            {breed.attributes.male_weight.min}-{breed.attributes.male_weight.max} kg
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-purple-600">Female Weight:</p>
                          <p className="font-medium text-purple-900">
                            {breed.attributes.female_weight.min}-{breed.attributes.female_weight.max} kg
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg 
                      hover:bg-purple-100 transition-colors duration-200">
                      <h4 className="font-medium text-purple-800 mb-2">Hypoallergenic Status</h4>
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm
                        ${breed.attributes.hypoallergenic 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'}`}>
                        {breed.attributes.hypoallergenic ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                )}

                <div className="mt-2">
                  <span className="inline-flex px-3 py-1 rounded-full text-sm 
                    bg-purple-100 text-purple-800
                    hover:bg-purple-200 transition-all duration-200
                    transform hover:scale-105">
                    Type: {breed.relationships?.group?.data?.type || 'Not specified'}
                  </span>
                </div>

                <button
                  onClick={() => toggleCard(breed.id)}
                  className="mt-4 inline-block w-full bg-purple-600 text-white px-4 py-2 
                    rounded-lg hover:bg-purple-700 transition-all duration-200 
                    text-center shadow-sm
                    transform hover:scale-[1.02] hover:shadow-md
                    active:scale-95"
                >
                  {isExpanded ? 'View Less' : 'View More'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DogBreedList;

