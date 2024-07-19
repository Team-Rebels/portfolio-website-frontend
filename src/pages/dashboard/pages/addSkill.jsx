import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import { apiAddSkill } from '../../../services/skills';
import Loader from '../../../components/loader';
import { toast } from 'react-toastify';

const AddSkill = () => {
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
      const res = await apiAddSkill({
        name: data.name,
        levelOfProficiency: data.proficiency,
      });

      console.log(res.data);
      toast.success(res.data.message);
      // Navigate back to the skills page after successful submission
      navigate('/dashboard/skills');
    } catch (error) {
      console.log(error);
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PagesLayout headerText="Add New Skill" headerTextClassName="text-[#0F1431]" buttonText="" onClick={() => {}}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Skill Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Proficiency
          </label>
          <input
            type="text"
            id="proficiency"
            {...register("proficiency", { required: "Proficiency is required" })}
            placeholder="Enter your proficiency"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.proficiency && <p className="text-red-500 text-xs">{errors.proficiency.message}</p>}
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
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : "Add Skill"}
          </button>
        </div>
      </form>
    </PagesLayout>
  );
};

export default AddSkill; 