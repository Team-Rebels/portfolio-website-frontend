
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import { apiAddSkill } from '../../../services/skills';



const AddSkill = () => {
 // const navigate = useNavigate();
  //navigate('/dashboard/skills'); // Redirect back to the skills page

  //const handleSubmit = (event) => {
    //event.preventDefault();
    // Handle form submission logic, e.g., sending data to the server
    
 // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
  console.log(data);
  try {
    const res = await apiAddSkill({
      name: data.name,
      levelOfProficiency: data.proficiency,

    });

    console.log(res.data);
    
  } catch (error) {
    console.log(error)
    
  }
};

  return (
    <PagesLayout headerText="Add New Skill" headerTextClassName="text-[#0F1431]"  buttonText="" onClick={() => {}}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Skill Name
          </label>
          <input
            type="text"
            id="name"
          
            {...register ("name", {required: "name is required"})}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Proficiency
          </label>
          <input
            type="text"
            id="proficiency"
            {...register ("proficiency", {required: "proficiency is required"})}
            placeholder= "Enter your proficiency"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
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
