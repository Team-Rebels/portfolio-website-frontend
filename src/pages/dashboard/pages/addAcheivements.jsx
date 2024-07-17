// src/pages/dashboard/pages/AddAchievement.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';

const AddAchievement = ({ setAchievements }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [award, setAward] = useState('');
  const [image, setImage] = useState(''); // For handling image, you can use a file input
  const [institution, setInstitution] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAchievement = {
      title,
      description,
      date,
      award,
      image,
      institution,
    };
    setAchievements((prevAchievements) => [...prevAchievements, newAchievement]);
    navigate('/dashboard/achievements'); // Redirect back to the achievements page
  };


    return (
      <PagesLayout
        headerText="Add New Achievement"
        headerTextClassName="text-[#0F1431]"
        buttonText=""
        onClick={() => {}}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
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
              Description
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Award
            </label>
            <input
              type="text"
              name="award"
              value={award}
              onChange={(e) => setAward(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Institution
            </label>
            <input
              type="text"
              name="institution"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={() => navigate('/dashboard/achievements')}
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
  
  export default AddAchievement;