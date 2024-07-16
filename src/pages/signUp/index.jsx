import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../assets/images/signup.svg'
import { useEffect, useState } from 'react';
import { apiCheckUserNameExists, apiSigUp } from '../../services/auth';
import { toast } from 'react-toastify';


const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState (false)
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState (false);

  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const checkUserName = async(userName) => {
    try {
      const res = await apiCheckUserNameExists(userName)
      console.log(res.data);
      const user =res.data;
      if(user) {
        setUsernameAvailable(true);
      }else{
         setUsernameNotAvailable(true);
       }
      } catch (error) {
        console.log(error);
    }
  };

  const userNameWatch = watch("userName")
  console.log(userNameWatch);

  useEffect(() => {
    if(userNameWatch){
      checkUserName(userNameWatch);
    }
  }, [userNameWatch]); 

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      otherNames: data.otherNames ? data.otherNames : "",
      username: data.username,
      password: data.password,
      email: data.email,
      confirmedPassword: data.password,
    };
    if (data.otherNames) {
      payload = {...payload, otherNames:data.otherNames};
    }
    try {
      const res = await apiSigUp(payload);
      console.log(res.data);
      toast.success(res.data.user);
      setTimeout(() =>
      {
        navigate("/login")
      }, 5000)

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (

    <div className='grid grid-cols-2 h-screen w-full'>
      <div className='flex items-center bg-primary/60'>

        <div className='mr-'>
          {<img src={signup} alt="Signup" className="w-96 h-[550px] mt-20" />}
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center h-[550px] w-96 bg-blue-400 rounded-lg ' >

            <div>
              <div>
                <div className="flex gap-x-6 w-15 mt-5  text-black">
                  <label htmlFor="firstName" className="font-semibold">Firstname :</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name" className='border-2 p-2 rounded-md'
                    {...register('firstName', {
                    required: 'Firstname is required'
                    //minlength: 2
                    })}
                  />
                  {errors.firstName && (
                    <p className='text-red-500'>{errors.firstName.message}</p>
                  )}
                </div>

                <div className='flex gap-x-6 w-15 mt-5  text-black pl-2'>
                  <label htmlFor="lastName" className="font-semibold">Lastname :</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name" className='border-2 p-2 rounded-md'
                    {...register('lastName', {
                    required: 'Lastname is required'
                    //minlength: 8
                    })}
                  />
                  {errors.lastName && (
                    <p className='text-red-500'>{errors.lastName.message}</p>)}
                </div>
              </div>
                <div className="flex gap-x-6 w-15 mt-5  text-black">
                  <label htmlFor="othernames" className="font-semibold">Othernames :</label>
                  <input
                    id="otherNames"
                    type="text"
                    placeholder="Enter your other names" className='border-2 p-2 rounded-md'
                    {...register('otherNames')}
                  />
                </div>
                <div className="flex gap-x-6 w-15 mt-5  text-black">
                  <label htmlFor="userName" className="font-semibold">Username :</label>
                  <input
                    id="userName"
                    type="text"
                    placeholder="Enter your user name" className='border-2 p-2 rounded-md'
                    {...register('userName', {
                    required: 'Username is required'
                    //minlength: 2
                    })}
                  />
                  {errors.userName && (
                    <p className='text-red-500'>{errors.userName.message}</p>
                  )}
                </div>
                <div className='flex gap-x-6 w-15 mt-5 font-semibold  text-black pl-7'>
                  <label htmlFor="email">Email :</label>
                  <input
                    id='email'
                    type="text"
                    placeholder="Enter your email" className='border-2 p-2 rounded-md'
                    {...register('email', {
                    required: 'Email is required'
                    //minlength: 8
                    })}
                  />
                    {errors.email && (
                    <p className='text-white'>{errors.email.message}</p>)}
                    {
                      usernameAvailable && <p className='text-white'>username is Available</p>
                    }
                    {
                      usernameNotAvailable && <p className='text-red-500'>username is already taken!</p>
                    }

                </div>

                <div className='flex gap-x-6 w-15 mt-5 font-semibold  text-black'>
                  <label htmlFor="password">Password :</label>
                  <input
                    id='current-password'
                    type="current-password"
                    placeholder="Enter your password" className='border-2 p-2 rounded-md'
                    {...register('current-password', {
                      required: 'Password is required'
                      //minlength: 8
                    })}
                  />
                  {errors.password && (
                    <p className='text-white'>{errors.password.message}</p>)}

                </div>
                <div className='flex flex-col'>
                  <button type="submit" className='bg-white w-15 p-2 
                       font-semibold border-2 rounded-md mt-5'>
                    {isSubmitting? "Loading..." : "Signup"}
                  </button>

                  {/* <label>
                    <input
                      type="checkbox" checked name="remember" />
                    Remember me
                  </label> */}
                </div>

                <div className='flex flex-col w-15'>
                  <p>Already have an account?</p>
                  <div className="border-2 rounded-md p-2 text-center font-semibold bg-white">
                    <Link to="/login">
                      Login
                    </Link>
                  </div>
                </div>


                <div className="border-2 rounded-sm p-2 text-center bg-white font-semibold mt-5" >
                  <button type="button">Cancel</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )};


export default SignUp;

