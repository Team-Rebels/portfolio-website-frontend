import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className='flex w-full h-screen bg-black' onSubmit={handleSubmit(onSubmit)}>
      <div className="w-1/2 h-screen bg-black">
        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
      </div>
      <div className='flex flex-col w-1/2'>


        <div className="flex gap-x-6 w-full">
          <label htmlFor="firstName" className="font-semibold">First name</label>
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
            <p className='text-blue-700'>{errors.firstName.message}</p>
          )}
        </div>

        <div className=''>
          <label htmlFor="lastName" className="font-semibold">Lastname</label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name" className='border-2 p-2 rounded-md'
            {...register('lastName', {
              required: 'Lastname is required'
              //minlength: 8
            })}
          />
          {errors.lastname && (<p className='text-red-500'>errors.lastName.message</p>)}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id='email'
            type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id='password'
            type="password" />


        </div>

        <button type="submit" className='bg-transparent text-white w-full p-2 rounded-md font-semibold'>
          Signup
        </button>

        {/* <label>
          <input
            type="checkbox" checked name="remember" />
          Remember me
        </label> */}
        <div>
          <p>Already have an account?</p>
          {/* <Link to="/login">
        Login
        </Link> */}
        </div>

        <div className="container" >
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="">Forgot <a href="#">password?</a></span>
        </div>
        
      </div>
    </form>
  );
};

export default SignUp;