import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../assets/images/signup.svg';
import { useEffect, useState } from 'react';
import { apiCheckUserNameExists, apiSigUp } from '../../services/auth';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const checkUserName = async (userName) => {
    try {
      const res = await apiCheckUserNameExists(userName);
      const user = res.data;
      if (user) {
        setUsernameAvailable(true);
      } else {
        setUsernameNotAvailable(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userNameWatch = watch("userName");

  useEffect(() => {
    if (userNameWatch) {
      checkUserName(userNameWatch);
    }
  }, [userNameWatch]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      otherNames: data.otherNames ? data.otherNames : "",
      username: data.userName,
      password: data.password,
      email: data.email,
      confirmedPassword: data.password,
    };

    try {
      const res = await apiSigUp(payload);
      toast.success("Signup successful");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen w-full'>
      <div className='hidden md:flex items-center justify-center bg-primary'>
        <img src={signup} alt="Signup" className="w-full h-auto" />
      </div>
      <div className='flex items-center justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-3/4 max-w-md bg-white p-8 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up on Captura</h2>
          <div className='mb-4'>
            <label htmlFor="firstName" className='block text-gray-700 font-semibold'>First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              className='border border-gray-300 p-2 w-full rounded-md'
              {...register('firstName', { required: 'First name is required' })}
            />
            {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor="lastName" className='block text-gray-700 font-semibold'>Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              className='border border-gray-300 p-2 w-full rounded-md'
              {...register('lastName', { required: 'Last name is required' })}
            />
            {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor="otherNames" className='block text-gray-700 font-semibold'>Other Names</label>
            <input
              id="otherNames"
              type="text"
              placeholder="Enter your other names"
              className='border border-gray-300 p-2 w-full rounded-md'
              {...register('otherNames')}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="userName" className='block text-gray-700 font-semibold'>Username</label>
            <input
              id="userName"
              type="text"
              placeholder="Enter your username"
              className='border border-gray-300 p-2 w-full rounded-md'
              {...register('userName', { required: 'Username is required' })}
            />
            {errors.userName && <p className='text-red-500'>{errors.userName.message}</p>}
            {usernameAvailable && <p className='text-green-500'>Username is available</p>}
            {usernameNotAvailable && <p className='text-red-500'>Username is already taken!</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 font-semibold'>Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className='border border-gray-300 p-2 w-full rounded-md'
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-gray-700 font-semibold'>Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className='border border-gray-300 p-2 w-full rounded-md'
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>
          <button type="submit" className='bg-blue-500 text-white p-2 w-full rounded-md font-semibold'>
            {isSubmitting ? "Loading..." : "Sign Up"}
          </button>
          <div className='flex justify-between items-center mt-4'>
            <p>Already have an account? <Link to="/login" className='text-blue-500'>Login</Link></p>
          </div>
          <button type="button" className='mt-4 bg-gray-300 text-gray-700 p-2 w-full rounded-md' onClick={() => navigate("/")}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
