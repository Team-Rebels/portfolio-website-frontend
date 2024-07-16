import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import signup from '../../assets/images/signup.svg'


const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };


  return (

    <div className='grid grid-cols-2 h-screen w-full'>
      <div className='flex items-center bg-primary/60'>
        
        <div className='mr-'>
          {<img src={signup} alt="Signup" className="w-96 h-[550px] mt-20" />}
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center h-[550px] w-96 bg-blue-400 rounded-lg' >

            <div className="">

            </div>

            <div className='flex flex-col'>
              <div className="flex gap-x-6 w-15 mt-5  text-white">
                <label htmlFor="firstName" className="font-semibold">First name :</label>
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


              <div className='flex gap-x-6 w-15 mt-5  text-white pl-2'>
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
                {errors.lastname && (
                  <p className='text-red-500'>{errors.lastName.message}</p>)}
              </div>

              <div className='flex gap-x-6 w-15 mt-5 font-semibold  text-white pl-7'>
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

              </div>

              <div className='flex gap-x-6 w-15 mt-5 font-semibold  text-white'>
                <label htmlFor="password">Password :</label>
                <input
                  id='password'
                  type="password"
                  placeholder="Enter your password" className='border-2 p-2 rounded-md'
                  {...register('password', {
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
                  Signup
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
  );
};


export default SignUp;

