// src/pages/dashboard/pages/AddAchievement.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import { apiAddAchievement } from '../../../services/achievement';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loader from '../../../components/loader';

const AddAchievement = ({ setAchievement }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const res = await apiAddAchievement({
        title: data.title,
        description: data.description,
        date: data.date,
        award: data.award,
        institution: data.institution,
        // Handle image file separately if needed
        // You might need to adjust the API or file upload handling based on your backend requirements
      });
      console.log(res.data);
      toast.success(res.data.message);
      // Navigate back to the achievements page after successful submission
      navigate('/dashboard/achievement');
    } catch (error) {
      console.log(error);
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PagesLayout
      headerText="Add New Achievement"
      headerTextClassName="text-[#0F1431]"
      buttonText=""
      onClick={() => {}}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: "Description is required" })}
            rows="3"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          ></textarea>
          {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            {...register("date", { required: "Date is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Award
          </label>
          <input
            type="text"
            id="award"
            {...register("award", { required: "Award is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.award && <p className="text-red-500 text-xs">{errors.award.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="image"
            {...register("image", { required: "Image is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.image && <p className="text-red-500 text-xs">{errors.image.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Institution
          </label>
          <input
            type="text"
            id="institution"
            {...register("institution", { required: "Institution is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.institution && <p className="text-red-500 text-xs">{errors.institution.message}</p>}
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/dashboard/achievement')}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : "Submit"}
          </button>
        </div>
      </form>
    </PagesLayout>
  );
};

export default AddAchievement;