// AddSocialLink.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';

const AddSocial = () => {
  const navigate = useNavigate();
  const [platform, setPlatform] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic, e.g., sending data to the server
    navigate('/dashboard/socials'); // Redirect back to the social links page
  };

  return (
    <PagesLayout headerText="Add New Social Link" buttonText="" onClick={() => {}}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Platform
          </label>
          <input
            type="text"
            name="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            URL
          </label>
          <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/dashboard/socials')}
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

export default AddSocial;
