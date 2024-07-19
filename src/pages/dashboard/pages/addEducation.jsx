import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../layouts/pagesLayout';
import { apiAddEducation } from '../../../services/education';
import { toast } from 'react-toastify';
import Loader from '../../../components/loader';

const AddEducation = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const res = await apiAddEducation({
        schoolName: data.schoolName,
        program: data.program,
        qualification: data.qualification,
        grade: data.grade,
        location: data.location,
        startDate: data.startDate,
        endDate: data.endDate,
        // Handle additional data or files if needed
      });
      console.log(res.data);
      toast.success(res.data.message);
      // Navigate back to the education page after successful submission
      navigate('/dashboard/education');
    } catch (error) {
      console.log(error);
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PagesLayout headerText="Add New Education" headerTextClassName="text-[#0F1431]" buttonText="" onClick={() => {}}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            School Name
          </label>
          <input
            type="text"
            id="schoolName"
            {...register("schoolName", { required: "School name is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.schoolName && <p className="text-red-500 text-xs">{errors.schoolName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Program
          </label>
          <input
            type="text"
            id="program"
            {...register("program", { required: "Program is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.program && <p className="text-red-500 text-xs">{errors.program.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Qualification
          </label>
          <input
            type="text"
            id="qualification"
            {...register("qualification", { required: "Qualification is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.qualification && <p className="text-red-500 text-xs">{errors.qualification.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Grade
          </label>
          <input
            type="text"
            id="grade"
            {...register("grade", { required: "Grade is required" })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
          {errors.grade && <p className="text-red-500 text-xs">{errors.grade.message}</p>}
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
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/dashboard/education')}
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

export default AddEducation;