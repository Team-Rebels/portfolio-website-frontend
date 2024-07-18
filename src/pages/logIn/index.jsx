import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { apiLogin } from "../../services/auth";
import { useState } from 'react';
import background from "../../assets/images/background.avif"
import googlelogo from "../../assets/images/googlelogo.png"
import { toast } from "react-toastify";
import Loader from "../../components/loader";

const LogIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password
      });
      console.log("Response", res.data);
      localStorage.setItem("accessToken", res.data.accessToken)


      toast.success(res.data.message);
      setTimeout (() => {navigate("/dashboard")}, 3000);

    } catch (error) { 
      console.log(error);
      toast.error("An error occured!");

    } finally {
      setIsSubmitting(false)
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">

        <div className="w-1/2 h-auto hidden md:block">
          <img src={background} alt="Login image" className="object-cover h-full w-full" />
        </div>


        <div className="w-1/2">
          <div className="flex flex-col justify-center text-left ">
            <h3 className="font-extrabold text-center">Welcome Back.</h3>
            <p></p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="font-semibold text-[#1826ef] mb-0">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="h-10 w-1/2 px-2 py-1 border-blue-500 border-2 rounded-lg "
                  {
                  ...register("email", { required: "Enter your email !" })
                  }
                />
                {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}

                <label
                  htmlFor="password"
                  className="font-semibold text-[#1826ef] mb-0 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="h-10 w-1/2 px-2 py-1 border-blue-500 border-2 rounded-lg"
                  {
                  ...register("password", { required: "Enter your password !" })
                  }
                />
                {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
                <div className=" m-10 ml-16">
                  <button
                    type="submit"
                    className="mt-10 mb-5 h-8 w-40 bg-white text-blue-500  border-blue-500 border-2 rounded-lg hover:bg-[#a1739b]">
                    {isSubmitting ? <Loader /> : "Login"}
                  </button>
                  <div className="flex items-center">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-2 text-gray-600">or</span>
                    <hr className="flex-1 border-gray-300" />
                  </div>

                  <button className="flex items-center justify-center h-10 border border-blue-500 rounded-lg text-gray-600 hover:bg-gray-100 transition duration-200 w-1/2">
                    <img className="w-5 h-5 mr-2" src={googlelogo} alt="Google logo" />
                  </button>


                </div>
              </div>
            </form>

          </div>
          <div className=" inline-block align-baseline">
            <p>Not registered?</p>

            <div className="text-justify">
              <span className="underline">Forgot password?</span>
            </div>

            <div className="space-y-2"> 
                <label 
                htmlFor="password" className="font-semibold text-[#1826ef] mb-0 ">Password</label>
          <input
            type="text"
            id="password"
            className="h-10 w-full px-3 py-2 border-blue-500 border-2 rounded-lg focus:outline-none focus:border-blue-700"
            {...register("password", { required: "Enter your password !" })} />
          {errors.password && (<p className="text-red-500 text-sm">{errors.password.message}</p>)}
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            type="submit" className="h-10 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-opacity-50">
            {isSubmitting ? (<ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />) : "Login"}</button>
        </div>

        <div className="flex items-center mt-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-600">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <button className="flex items-center justify-center h-10 border border-blue-500 rounded-lg text-gray-600 hover:bg-gray-100 transition duration-200 w-1/2">
          <img className="w-5 h-5 mr-2" src={googlelogo} alt="Google logo" />Sign in with Google</button>

      </form>
      <div className="mt-4 text-center">
        <p className="text-gray-600">Not registered? <Link to="/signup" className="text-blue-600 underline">Sign Up</Link></p>
        <p className="text-gray-600 mt-2">Forgot password?</p>
      </div>
    </div>
      </div >
    </div >
  );
};


export default LogIn
