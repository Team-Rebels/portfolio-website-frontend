
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import { useForm } from 'react-hook-form';
import { apiAddExperience } from '../../../services/experience';
import { toast } from 'react-toastify';
import Loader from '../../../components/loader';

const AddExperience = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const res = await apiAddExperience({
        companyName: data.companyName,
        role: data.role,
        skills: data.skills,
        responsibilities: data.responsibilities,
        location: data.location,
        startDate: data.startDate,
        endDate: data.endDate,
        // Handle thumbnail image upload separately if needed
      });


      console.log(res.data);
      toast.success(res.data.message);
      // Navigate back to the experiences page after successful submission
      navigate('/dashboard/experience');
    } catch (error) {
      console.log(error);
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PagesLayout headerText="Add New Experience" headerTextClassName="text-[#0F1431]" buttonText="" onClick={() => {}}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            {...register("companyName", { required: "Company name is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.companyName && <p className="text-red-500 text-xs">{errors.companyName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <input
            type="text"
            id="role"
            {...register("role", { required: "Role is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Skills (comma separated)
          </label>
          <input
            type="text"
            id="skills"
            {...register("skills", { required: "Skills are required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.skills && <p className="text-red-500 text-xs">{errors.skills.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Responsibilities (comma separated)
          </label>
          <input
            type="text"
            id="responsibilities"
            {...register("responsibilities", { required: "Responsibilities are required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.responsibilities && <p className="text-red-500 text-xs">{errors.responsibilities.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            {...register("location", { required: "Location is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            {...register("startDate", { required: "Start date is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.startDate && <p className="text-red-500 text-xs">{errors.startDate.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            End Date (leave blank if current)
          </label>
          <input
            type="date"
            id="endDate"
            {...register("endDate")}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
          {errors.endDate && <p className="text-red-500 text-xs">{errors.endDate.message}</p>}
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/dashboard/experience')}
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

export default AddExperience;
