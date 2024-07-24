import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import { apiAddVolunteering } from '../../../services/volunteering';

import { useForm } from 'react-hook-form';
import Loader from '../../../components/loader';
import { toast } from 'react-toastify';

const AddVolunteering = () => {
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
        const res = await apiAddVolunteering({
          organization: data.organization,
          description: data.description,
          skills: data.skills,
          responsibilities: data.responsibilities,
          role: data.role,
          location: data.location,
          startDate: data.startDate,
          endDate: data.endDate,
          projectName: data.projectName,
          // Handle additional data or files if needed
        });
      console.log(res.data);
      toast.success(res.data.message);
      // Navigate back to the volunteering page after successful submission
      navigate('/dashboard/volunteering');
    } catch (error) {
      console.log(error);
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PagesLayout
      headerText="Add New Volunteering"
      headerTextClassName="text-[#0F1431]"
      buttonText=""
      onClick={() => {}}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 h-1/2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            {...register("organization", { required: "Organization is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.organization && <p className="text-red-500 text-xs">{errors.organization.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
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
            Skills
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
            Responsibilities
          </label>
          <textarea
            id="responsibilities"
            {...register("responsibilities", { required: "Responsibilities are required" })}
            rows="3"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          ></textarea>
          {errors.responsibilities && <p className="text-red-500 text-xs">{errors.responsibilities.message}</p>}
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
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            {...register("endDate", { required: "End date is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.endDate && <p className="text-red-500 text-xs">{errors.endDate.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            {...register("projectName", { required: "Project name is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.projectName && <p className="text-red-500 text-xs">{errors.projectName.message}</p>}
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/dashboard/volunteering')}
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

export default AddVolunteering;

