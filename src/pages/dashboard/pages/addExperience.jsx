// AddExperience.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';

const AddExperience = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic, e.g., sending data to the server
    navigate('/dashboard/experiences'); // Redirect back to the experiences page
  };

  return (
    <PagesLayout headerText="Add New Experience" buttonText="" onClick={() => {}}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm  font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Description
          </label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/dashboard/experiences')}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </PagesLayout>
  );
};

export default AddExperience;
