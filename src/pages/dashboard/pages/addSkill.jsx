
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';



const AddSkill = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [levelOfProficiency, setLevelOfProficiency] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic, e.g., sending data to the server
    navigate('/dashboard/skills'); // Redirect back to the skills page
  };

  return (
    <PagesLayout headerText="Add New Skill" buttonText="" onClick={() => {}}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Skill Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Skill Level
          </label>
          <input
            type="text"
            name="levelOfProficiency"
            value={levelOfProficiency}
            onChange={(e) => setLevelOfProficiency(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/dashboard/skills')}
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

export default AddSkill;
